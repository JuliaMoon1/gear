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

//! Module for messenger implementation.
//!
//! Messenger provides API for all available gear message storing.

use crate::storage::{
    Counted, CountedByKey, Counter, DequeueError, IterableDoubleMap, IterableMap, Mailbox,
    MailboxError, Queue, Toggler,
};
use core::fmt::Debug;

/// Represents messenger's logic of centralized message processing behavior.
pub trait Messenger {
    /// Capacity of the messenger.
    ///
    /// This type defines length type of the queue, sent and
    /// dequeued messages within same block amount type.
    type Capacity;
    /// Inner error type generated by gear's storage types.
    type Error: MailboxError + DequeueError + Debug;
    /// Output error of each storage algorithm.
    ///
    /// Implements `From<Self::Error>` to be able to return
    /// any required error type.
    type OutputError: From<Self::Error> + Debug;

    /// First key of the mailbox storage.
    ///
    /// Present to clarify compiler behavior over associated types.
    type MailboxFirstKey;
    /// Second key of the mailbox storage.
    ///
    /// Present to clarify compiler behavior over associated types.
    type MailboxSecondKey;
    /// Stored values type for `Self::Mailbox`.
    ///
    /// Present to clarify compiler behavior over associated types.
    type MailboxedMessage;
    /// Stored values type for `Self::Queue`.
    ///
    /// Present to clarify compiler behavior over associated types.
    type QueuedDispatch;

    /// Amount of messages sent from outside (from users)
    /// within the current block.
    ///
    /// Used as local counter for `MessageId` generation.
    type Sent: Counter<Value = Self::Capacity>;

    /// Amount of messages dequeued with the current block.
    ///
    /// Used for depositing informational event about how much messages
    /// were took from queue in `process_queue` execution.
    type Dequeued: Counter<Value = Self::Capacity>;

    /// Allowance of queue processing.
    ///
    /// Used for checking could `process_queue` continue it's execution.
    /// Execution finishes, once message requeued at the end of the queue,
    /// because it alerts, that this execution exceed gas allowance of the
    /// current block by gear's processing algorithm.
    type QueueProcessing: Toggler;

    /// Gear message queue.
    ///
    /// Message queue contains only messages addressed to programs.
    /// Messages from queue process on idle of each block in `process_queue`,
    /// function, except case of runtime upgrade - then processing skipped.
    type Queue: Queue<Value = Self::QueuedDispatch, Error = Self::Error, OutputError = Self::OutputError>
        + Counted<Length = Self::Capacity>
        + IterableMap<Result<Self::QueuedDispatch, Self::OutputError>>;

    /// Gear mailbox.
    ///
    /// Mailbox contains only messages addressed to user accounts.
    /// Any address meant as user account if it's not program id.
    ///
    /// Only mailbox owner (user with message's destination address)
    /// can claim value from the message, removing it afterward, or claim
    /// and send reply on received message, if it still present (#642).
    type Mailbox: Mailbox<
            Key1 = Self::MailboxFirstKey,
            Key2 = Self::MailboxSecondKey,
            Value = Self::MailboxedMessage,
            Error = Self::Error,
            OutputError = Self::OutputError,
        > + CountedByKey<Key = Self::MailboxFirstKey, Length = usize>
        + IterableDoubleMap<Self::MailboxedMessage, Key = Self::MailboxFirstKey>;

    // Soon ...
    // /// Gear waitlist.
    // type Waitlist;

    /// Resets all related to messenger storages.
    ///
    /// It's temporary production solution to avoid DB migrations,
    /// would be available for tests purposes only in future.
    fn reset() {
        Self::Sent::reset();
        Self::Dequeued::reset();
        Self::QueueProcessing::allow();
        Self::Queue::remove_all();
        Self::Mailbox::remove_all();
    }
}
