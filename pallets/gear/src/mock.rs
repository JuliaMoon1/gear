// This file is part of Gear.

// Copyright (C) 2021-2022 Gear Technologies Inc.
// SPDX-License-Identifier: GPL-3.0-or-later WITH Classpath-exception-2.0

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.

use crate as pallet_gear;
use crate::{ext::LazyPagesExt, manager::ExtManager};
use common::{lazy_pages, Origin as _};
use core_processor::{
    common::{DispatchOutcome, JournalNote},
    configs::{AllocationsConfig, BlockInfo},
    Ext,
};
use frame_support::{
    construct_runtime, parameter_types,
    traits::{Currency, FindAuthor, OnFinalize, OnIdle, OnInitialize},
};
use frame_system as system;
use gear_backend_sandbox::SandboxEnvironment;
use gear_core::{
    ids::ProgramId,
    message::{Dispatch, DispatchKind, Message},
};
use sp_core::H256;
use sp_runtime::{
    testing::Header,
    traits::{BlakeTwo256, IdentityLookup, UniqueSaturatedInto},
};
use sp_std::convert::{TryFrom, TryInto};

type UncheckedExtrinsic = frame_system::mocking::MockUncheckedExtrinsic<Test>;
type Block = frame_system::mocking::MockBlock<Test>;
type AccountId = u64;

pub(crate) const USER_1: AccountId = 1;
pub(crate) const USER_2: AccountId = 2;
pub(crate) const USER_3: AccountId = 3;
pub(crate) const LOW_BALANCE_USER: AccountId = 4;
pub(crate) const BLOCK_AUTHOR: AccountId = 255;

// Configure a mock runtime to test the pallet.
construct_runtime!(
    pub enum Test where
        Block = Block,
        NodeBlock = Block,
        UncheckedExtrinsic = UncheckedExtrinsic,
    {
        System: system::{Pallet, Call, Config, Storage, Event<T>},
        GearProgram: pallet_gear_program::{Pallet, Storage, Event<T>},
        GearMessenger: pallet_gear_messenger::{Pallet},
        Gear: pallet_gear::{Pallet, Call, Storage, Event<T>},
        Gas: pallet_gas::{Pallet, Storage},
        Balances: pallet_balances::{Pallet, Call, Storage, Config<T>, Event<T>},
        Authorship: pallet_authorship::{Pallet, Storage},
        Timestamp: pallet_timestamp::{Pallet, Call, Storage, Inherent},
    }
);

impl pallet_balances::Config for Test {
    type MaxLocks = ();
    type MaxReserves = ();
    type ReserveIdentifier = [u8; 8];
    type Balance = u128;
    type DustRemoval = ();
    type Event = Event;
    type ExistentialDeposit = ExistentialDeposit;
    type AccountStore = System;
    type WeightInfo = ();
}

parameter_types! {
    pub const BlockHashCount: u64 = 250;
    pub const SS58Prefix: u8 = 42;
    pub const ExistentialDeposit: u64 = 500;
}

impl system::Config for Test {
    type BaseCallFilter = frame_support::traits::Everything;
    type BlockWeights = ();
    type BlockLength = ();
    type DbWeight = ();
    type Origin = Origin;
    type Call = Call;
    type Index = u64;
    type BlockNumber = u64;
    type Hash = H256;
    type Hashing = BlakeTwo256;
    type AccountId = AccountId;
    type Lookup = IdentityLookup<Self::AccountId>;
    type Header = Header;
    type Event = Event;
    type BlockHashCount = BlockHashCount;
    type Version = ();
    type PalletInfo = PalletInfo;
    type AccountData = pallet_balances::AccountData<u128>;
    type OnNewAccount = ();
    type OnKilledAccount = ();
    type SystemWeightInfo = ();
    type SS58Prefix = SS58Prefix;
    type OnSetCode = ();
    type MaxConsumers = frame_support::traits::ConstU32<16>;
}

pub struct GasConverter;
impl common::GasPrice for GasConverter {
    type Balance = u128;
}

impl pallet_gear_program::Config for Test {
    type Event = Event;
    type WeightInfo = ();
    type Currency = Balances;
}

parameter_types! {
    pub const BlockGasLimit: u64 = 100_000_000_000;
    pub const OutgoingLimit: u32 = 1024;
    pub const WaitListFeePerBlock: u64 = 1_000;
    pub MySchedule: pallet_gear::Schedule<Test> = <pallet_gear::Schedule<Test>>::default();
}

impl pallet_gear::Config for Test {
    type Event = Event;
    type Currency = Balances;
    type GasPrice = GasConverter;
    type GasHandler = Gas;
    type WeightInfo = ();
    type Schedule = MySchedule;
    type OutgoingLimit = OutgoingLimit;
    type DebugInfo = ();
    type WaitListFeePerBlock = WaitListFeePerBlock;
    type CodeStorage = GearProgram;
    type Messenger = GearMessenger;
}

impl pallet_gas::Config for Test {
    type BlockGasLimit = BlockGasLimit;
}

impl pallet_gear_messenger::Config for Test {
    type Currency = Balances;
}

pub struct FixedBlockAuthor;

impl FindAuthor<u64> for FixedBlockAuthor {
    fn find_author<'a, I>(_digests: I) -> Option<u64>
    where
        I: 'a + IntoIterator<Item = (sp_runtime::ConsensusEngineId, &'a [u8])>,
    {
        Some(BLOCK_AUTHOR)
    }
}

impl pallet_authorship::Config for Test {
    type FindAuthor = FixedBlockAuthor;
    type UncleGenerations = ();
    type FilterUncle = ();
    type EventHandler = ();
}

parameter_types! {
    pub const MinimumPeriod: u64 = 500;
}

impl pallet_timestamp::Config for Test {
    type Moment = u64;
    type OnTimestampSet = ();
    type MinimumPeriod = MinimumPeriod;
    type WeightInfo = ();
}

// Build genesis storage according to the mock runtime.
pub fn new_test_ext() -> sp_io::TestExternalities {
    let mut t = system::GenesisConfig::default()
        .build_storage::<Test>()
        .unwrap();

    pallet_balances::GenesisConfig::<Test> {
        balances: vec![
            (USER_1, 500_000_000_000_u128),
            (USER_2, 200_000_000_000_u128),
            (USER_3, 500_000_000_000_u128),
            (LOW_BALANCE_USER, 1000_u128),
            (BLOCK_AUTHOR, 500_u128),
        ],
    }
    .assimilate_storage(&mut t)
    .unwrap();

    let mut ext = sp_io::TestExternalities::new(t);
    ext.execute_with(|| System::set_block_number(1));
    ext
}

pub fn run_to_block(n: u64, remaining_weight: Option<u64>) {
    while System::block_number() < n {
        System::on_finalize(System::block_number());
        System::set_block_number(System::block_number() + 1);
        System::on_initialize(System::block_number());
        Gas::on_initialize(System::block_number());
        GearMessenger::on_initialize(System::block_number());
        Gear::on_initialize(System::block_number());

        let remaining_weight =
            remaining_weight.unwrap_or(<Test as pallet_gas::Config>::BlockGasLimit::get());

        log::debug!(
            "🧱 Running on_idle block #{} with weight {}",
            System::block_number(),
            remaining_weight
        );

        Gear::on_idle(System::block_number(), remaining_weight);
    }
}

pub fn calc_handle_gas_spent(source: H256, dest: H256, payload: Vec<u8>) -> (u64, u64) {
    let ext_manager: ExtManager<Test> = Default::default();

    let initial_gas = <Test as pallet_gas::Config>::BlockGasLimit::get();

    let message = Message::new(
        Default::default(),
        ProgramId::from_origin(source),
        ProgramId::from_origin(dest),
        payload,
        Some(initial_gas),
        0,
        None,
    );

    let lazy_pages_enabled = cfg!(feature = "lazy-pages") && lazy_pages::try_to_enable_lazy_pages();

    let actor = ext_manager
        .get_executable_actor(dest, !lazy_pages_enabled)
        .expect("Can't find a program");

    let dispatch = Dispatch::new(DispatchKind::Handle, message);

    let block_info = BlockInfo {
        height: System::block_number() as u32,
        timestamp: Timestamp::get(),
    };

    let schedule = <Test as pallet_gear::Config>::Schedule::get();
    let allocations_config = AllocationsConfig {
        max_pages: gear_core::memory::WasmPageNumber(schedule.limits.memory_pages),
        init_cost: schedule.memory_weights.initial_cost,
        alloc_cost: schedule.memory_weights.allocation_cost,
        mem_grow_cost: schedule.memory_weights.grow_cost,
        load_page_cost: schedule.memory_weights.load_cost,
    };
    let existential_deposit =
        <Test as pallet_gear::Config>::Currency::minimum_balance().unique_saturated_into();

    let journal = if lazy_pages_enabled {
        core_processor::process::<LazyPagesExt, SandboxEnvironment<_>>(
            Some(actor),
            dispatch.into_stored().into_incoming(initial_gas),
            block_info,
            allocations_config,
            existential_deposit,
            ProgramId::from_origin(source),
            ProgramId::from_origin(dest),
            u64::MAX,
            <Test as pallet_gear::Config>::OutgoingLimit::get(),
            schedule.host_fn_weights.into_core(),
        )
    } else {
        core_processor::process::<Ext, SandboxEnvironment<_>>(
            Some(actor),
            dispatch.into_stored().into_incoming(initial_gas),
            block_info,
            allocations_config,
            existential_deposit,
            ProgramId::from_origin(source),
            ProgramId::from_origin(dest),
            u64::MAX,
            <Test as pallet_gear::Config>::OutgoingLimit::get(),
            schedule.host_fn_weights.into_core(),
        )
    };

    let mut gas_burned: u64 = 0;
    let mut gas_to_send: u64 = 0;

    for note in &journal {
        match note {
            JournalNote::GasBurned { amount, .. } => {
                gas_burned = gas_burned.saturating_add(*amount);
            }
            JournalNote::SendDispatch { dispatch, .. } => {
                gas_to_send = gas_to_send.saturating_add(dispatch.gas_limit().unwrap_or(0));
            }
            JournalNote::MessageDispatched(DispatchOutcome::MessageTrap { .. }) => {
                panic!("Program terminated with a trap");
            }
            _ => (),
        }
    }

    (gas_burned, gas_to_send)
}
