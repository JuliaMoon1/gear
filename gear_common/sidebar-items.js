initSidebarItems({"constant":[["STORAGE_PROGRAM_PAGES_PREFIX",""],["STORAGE_PROGRAM_PREFIX",""],["STORAGE_PROGRAM_STATE_WAIT_PREFIX",""],["STORAGE_WAITLIST_PREFIX",""]],"enum":[["Program",""],["ProgramError",""],["ProgramState","Enumeration contains variants for program state."]],"fn":[["get_program",""],["get_program_data_for_pages","Returns data for all pages from `pages` arg, which has data in storage."],["get_program_page_data","Returns mem page data from storage for program `id` and `page_idx`"],["get_program_pages_data",""],["insert_waiting_message",""],["pages_prefix",""],["program_exists",""],["program_key",""],["remove_program_page_data",""],["remove_program_waitlist",""],["remove_waiting_message",""],["reset_storage",""],["save_page_lazy_info","Save page data key in storage"],["set_program",""],["set_program_allocations",""],["set_program_and_pages_data",""],["set_program_initialized",""],["set_program_page_data",""],["set_program_terminated_status",""],["wait_key",""],["wait_prefix",""],["waiting_init_append_message_id",""],["waiting_init_prefix",""],["waiting_init_take_messages",""]],"macro":[["wrap_counted_storage_map","Same as `wrap_storage_map!`, but with length type parameter to auto-impl `Counted` trait of `gear_common` storage primitives."],["wrap_extended_storage_double_map","Same as `wrap_storage_double_map!`, but with extra implementations of `CountedByKey` and `IterableDoubleMap` over double map values."],["wrap_storage_double_map","Creates new type with specified name and key1-key2-value types and implements `DoubleMapStorage` for it based on specified storage, which is a `Substrate`’s `StorageDoubleMap`."],["wrap_storage_map","Creates new type with specified name and key-value types and implements `MapStorage` for it based on specified storage, which is a `Substrate`’s `StorageMap`."],["wrap_storage_value","Creates new type with specified name and value type and implements `ValueStorage` for it based on specified storage, which is a `Substrate`’s `StorageValue`."]],"mod":[["code_storage",""],["lazy_pages","Lazy pages support runtime functions"],["storage","Gear’s storage API module."]],"struct":[["ActiveProgram",""],["CodeMetadata",""],["PageIsNotAllocatedErr",""]],"trait":[["GasPrice",""],["Origin",""],["PaymentProvider",""],["ValueTree","Abstraction for a chain of value items each piece of which has an attributed owner and can be traced up to some root origin. The definition is largely inspired by the `frame_support::traits::Currency` - https://github.com/paritytech/substrate/blob/master/frame/support/src/traits/tokens/currency.rs, however, the intended use is very close to the UTxO based ledger model."]],"type":[["ExitCode",""]]});