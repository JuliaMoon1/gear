#![no_std]

use gstd::{String, debug, msg, CodeHash};

static mut COUNTER: i32 = 0;

fn increase() {
    unsafe {
        COUNTER += 1;
    }
}

fn get() -> i32 {
    unsafe { COUNTER }
}

/// Creates the following program:
/// ```
/// let default_program = r#"
/// (module
///   (import "env" "memory" (memory 1))
///   (export "handle" (func $handle))
///   (export "init" (func init))
///   (func $handle)
///   (func $init)
/// )"#;
/// ```
#[no_mangle]
pub unsafe extern "C" fn handle() {
    let command = String::from_utf8(msg::load_bytes()).expect("Unable to decode string");
    let submitted_code: CodeHash =
            hex_literal::hex!("abf3746e72a6e8740bd9e12b879fbdd59e052cb390f116454e9116c22021ae4a")
                .into();

    match command.as_ref() {
        "default" => {
            // Assume that the code of the deploying program was submitted by `submit_code`
            // extrinsic and we got its hash. For more details please read README file.
            let new_program_id = msg::create_program(submitted_code, get().to_le_bytes(), b"unique", 10_000, 0);
            debug!("A new program is created {:?}", new_program_id);

            let msg_id = msg::send(new_program_id, b"", 10_001, 0);
            debug!("Sent to a new program message with id {:?}", msg_id);

            increase();
        }
        "duplicate" => {
            let new_program_id = msg::create_program(submitted_code, (get() - 1).to_le_bytes(), b"not_unique", 10_000, 0);
            debug!("A new program is created {:?}", new_program_id);

            let msg_id = msg::send(new_program_id, b"", 10_001, 0);
            debug!("Sent to a new program message with id {:?}", msg_id);
        }
        _ => {
            panic!("Unknown option");
        }
    }
}

#[no_mangle]
pub unsafe extern "C" fn init() {}
