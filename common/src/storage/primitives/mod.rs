// This file is part of Gear.

// Copyright (C) 2022 Gear Technologies Inc.
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

//! Gear storage primitives.
//!
//! Contains basic behavior of interaction with globally shared data,
//! which could be used directly for common purposes or be a part of
//! some consistent logic.

// Private modules declaration.
mod callback;
mod counted;
mod double_map;
mod iterable;
mod key;
mod map;
mod value;

// Public exports from primitive modules.
pub use callback::{Callback, EmptyCallback, FallibleCallback};
pub use counted::{Counted, CountedByKey};
pub use double_map::DoubleMapStorage;
pub use iterable::{IterableDoubleMap, IterableMap, KeyValueIteratorWrap};
pub use key::{KeyFor, MailboxKeyGen, QueueKeyGen};
pub use map::MapStorage;
pub use value::ValueStorage;
