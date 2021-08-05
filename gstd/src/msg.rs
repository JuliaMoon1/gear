use crate::prelude::Vec;
use crate::{MessageId, ProgramId};

#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub struct MessageHandle(u32);

mod sys {
    extern "C" {
        pub fn gr_charge(gas: u64);
        pub fn gr_msg_id(val: *mut u8);
        pub fn gr_read(at: u32, len: u32, dest: *mut u8);
        pub fn gr_reply(data_ptr: *const u8, data_len: u32, gas_limit: u64, value_ptr: *const u8);
        pub fn gr_reply_push(data_ptr: *const u8, data_len: u32);
        pub fn gr_reply_to(dest: *mut u8);
        pub fn gr_send(
            program: *const u8,
            data_ptr: *const u8,
            data_len: u32,
            gas_limit: u64,
            value_ptr: *const u8,
        );
        pub fn gr_send_commit(handle: u32);
        pub fn gr_send_init(
            program: *const u8,
            data_ptr: *const u8,
            data_len: u32,
            gas_limit: u64,
            value_ptr: *const u8,
        ) -> u32;
        pub fn gr_send_push(handle: u32, data_ptr: *const u8, data_len: u32);
        pub fn gr_size() -> u32;
        pub fn gr_source(program: *mut u8);
        pub fn gr_value(val: *mut u8);
        pub fn gr_wait();
    }
}

pub fn charge(gas: u64) {
    unsafe {
        sys::gr_charge(gas);
    }
}

pub fn id() -> MessageId {
    let mut msg_id = MessageId::default();
    unsafe { sys::gr_msg_id(msg_id.0.as_mut_ptr()) }
    msg_id
}

pub fn load() -> Vec<u8> {
    unsafe {
        let message_size = sys::gr_size() as usize;
        let mut data = Vec::with_capacity(message_size);
        data.set_len(message_size);
        sys::gr_read(0, message_size as _, data.as_mut_ptr() as _);
        data
    }
}

pub fn reply(payload: &[u8], gas_limit: u64, value: u128) {
    unsafe {
        sys::gr_reply(
            payload.as_ptr(),
            payload.len() as _,
            gas_limit,
            value.to_le_bytes().as_ptr(),
        )
    }
}

pub fn reply_push(payload: &[u8]) {
    unsafe { sys::gr_reply_push(payload.as_ptr(), payload.len() as _) }
}

pub fn reply_to() -> MessageId {
    let mut message_id = MessageId::default();
    unsafe { sys::gr_reply_to(message_id.0.as_mut_ptr()) }
    message_id
}

pub fn send(program: ProgramId, payload: &[u8], gas_limit: u64) {
    send_with_value(program, payload, gas_limit, 0u128);
}

pub fn send_commit(handle: MessageHandle) {
    unsafe { sys::gr_send_commit(handle.0) }
}

pub fn send_init(program: ProgramId, payload: &[u8], gas_limit: u64, value: u128) -> MessageHandle {
    unsafe {
        MessageHandle(sys::gr_send_init(
            program.as_slice().as_ptr(),
            payload.as_ptr(),
            payload.len() as _,
            gas_limit,
            value.to_le_bytes().as_ptr(),
        ))
    }
}

pub fn send_push(handle: MessageHandle, payload: &[u8]) {
    unsafe { sys::gr_send_push(handle.0, payload.as_ptr(), payload.len() as _) }
}

pub fn send_with_value(program: ProgramId, payload: &[u8], gas_limit: u64, value: u128) {
    unsafe {
        sys::gr_send(
            program.as_slice().as_ptr(),
            payload.as_ptr(),
            payload.len() as _,
            gas_limit,
            value.to_le_bytes().as_ptr(),
        )
    }
}

pub fn source() -> ProgramId {
    let mut program_id = ProgramId::default();
    unsafe { sys::gr_source(program_id.as_mut_slice().as_mut_ptr()) }
    program_id
}

pub fn value() -> u128 {
    let mut value_data = [0u8; 16];
    unsafe {
        sys::gr_value(value_data.as_mut_ptr());
    }
    u128::from_le_bytes(value_data)
}

pub fn wait() {
    unsafe {
        sys::gr_wait();
    }
}
