#!/usr/bin/env sh

format_usage() {
  cat << EOF

  Usage:
    ./gear.sh format <FLAG>
    ./gear.sh format <SUBCOMMAND> [CARGO FLAGS]

  Flags:
    -h, --help     show help message and exit

  Subcommands:
    help           show help message and exit

    gear           format gear workspace or check via --check
    examples       format gear program examples or check via --check
    doc            format gear doc or check via --check

EOF
}

# $1 = Path to Cargo.toml file
format() {
  MANIFEST="$1"
  shift

  cargo +nightly fmt --all --manifest-path="$MANIFEST" -- \
    --config=license_template_path="" "$@"
}

doc_format() {
  cargo +nightly fmt -p gstd -p gcore -- "$@" \
    --config wrap_comments=true,format_code_in_doc_comments=true
}
