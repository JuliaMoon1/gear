#!/bin/sh
cargo +nightly build --release --workspace --exclude=test-gear --target=wasm32-unknown-unknown --verbose