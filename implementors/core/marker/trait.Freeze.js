(function() {var implementors = {};
implementors["gcore"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"gcore/msg/struct.ErrorCode.html\" title=\"struct gcore::msg::ErrorCode\">ErrorCode</a>","synthetic":true,"types":["gcore::msg::ErrorCode"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gcore/msg/struct.SendError.html\" title=\"struct gcore::msg::SendError\">SendError</a>","synthetic":true,"types":["gcore::msg::SendError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gcore/msg/struct.ReplyError.html\" title=\"struct gcore::msg::ReplyError\">ReplyError</a>","synthetic":true,"types":["gcore::msg::ReplyError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gcore/struct.MessageHandle.html\" title=\"struct gcore::MessageHandle\">MessageHandle</a>","synthetic":true,"types":["gcore::general::MessageHandle"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gcore/struct.MessageId.html\" title=\"struct gcore::MessageId\">MessageId</a>","synthetic":true,"types":["gcore::general::MessageId"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gcore/struct.ActorId.html\" title=\"struct gcore::ActorId\">ActorId</a>","synthetic":true,"types":["gcore::general::ActorId"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gcore/struct.CodeHash.html\" title=\"struct gcore::CodeHash\">CodeHash</a>","synthetic":true,"types":["gcore::general::CodeHash"]}];
implementors["gear_backend_common"] = [{"text":"impl Freeze for <a class=\"enum\" href=\"gear_backend_common/enum.TerminationReason.html\" title=\"enum gear_backend_common::TerminationReason\">TerminationReason</a>","synthetic":true,"types":["gear_backend_common::TerminationReason"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_backend_common/struct.ExtInfo.html\" title=\"struct gear_backend_common::ExtInfo\">ExtInfo</a>","synthetic":true,"types":["gear_backend_common::ExtInfo"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_backend_common/struct.BackendReport.html\" title=\"struct gear_backend_common::BackendReport\">BackendReport</a>","synthetic":true,"types":["gear_backend_common::BackendReport"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"gear_backend_common/struct.BackendError.html\" title=\"struct gear_backend_common::BackendError\">BackendError</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["gear_backend_common::BackendError"]}];
implementors["gear_backend_sandbox"] = [{"text":"impl Freeze for <a class=\"enum\" href=\"gear_backend_sandbox/env/enum.SandboxEnvironmentError.html\" title=\"enum gear_backend_sandbox::env::SandboxEnvironmentError\">SandboxEnvironmentError</a>","synthetic":true,"types":["gear_backend_sandbox::env::SandboxEnvironmentError"]},{"text":"impl&lt;E&gt; Freeze for <a class=\"struct\" href=\"gear_backend_sandbox/env/struct.SandboxEnvironment.html\" title=\"struct gear_backend_sandbox::env::SandboxEnvironment\">SandboxEnvironment</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as <a class=\"trait\" href=\"gear_core/env/trait.Ext.html\" title=\"trait gear_core::env::Ext\">Ext</a>&gt;::<a class=\"associatedtype\" href=\"gear_core/env/trait.Ext.html#associatedtype.Error\" title=\"type gear_core::env::Ext::Error\">Error</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["gear_backend_sandbox::env::SandboxEnvironment"]},{"text":"impl&lt;E&gt; Freeze for <a class=\"enum\" href=\"gear_backend_sandbox/funcs/enum.FuncError.html\" title=\"enum gear_backend_sandbox::funcs::FuncError\">FuncError</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Freeze,&nbsp;</span>","synthetic":true,"types":["gear_backend_sandbox::funcs::FuncError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_backend_sandbox/memory/struct.MemoryWrap.html\" title=\"struct gear_backend_sandbox::memory::MemoryWrap\">MemoryWrap</a>","synthetic":true,"types":["gear_backend_sandbox::memory::MemoryWrap"]}];
implementors["gear_common"] = [{"text":"impl Freeze for <a class=\"enum\" href=\"gear_common/lazy_pages/enum.Error.html\" title=\"enum gear_common::lazy_pages::Error\">Error</a>","synthetic":true,"types":["gear_common::lazy_pages::Error"]},{"text":"impl&lt;T, Error, OutputError, Callbacks, KeyGen&gt; Freeze for <a class=\"struct\" href=\"gear_common/storage/struct.MailboxImpl.html\" title=\"struct gear_common::storage::MailboxImpl\">MailboxImpl</a>&lt;T, Error, OutputError, Callbacks, KeyGen&gt;","synthetic":true,"types":["gear_common::storage::complex::mailbox::MailboxImpl"]},{"text":"impl&lt;T, OutputError, KeyGen&gt; Freeze for <a class=\"struct\" href=\"gear_common/storage/struct.QueueImpl.html\" title=\"struct gear_common::storage::QueueImpl\">QueueImpl</a>&lt;T, OutputError, KeyGen&gt;","synthetic":true,"types":["gear_common::storage::complex::queue::QueueImpl"]},{"text":"impl&lt;T, VS&gt; Freeze for <a class=\"struct\" href=\"gear_common/storage/struct.CounterImpl.html\" title=\"struct gear_common::storage::CounterImpl\">CounterImpl</a>&lt;T, VS&gt;","synthetic":true,"types":["gear_common::storage::complicated::counter::CounterImpl"]},{"text":"impl&lt;Key, Value, Error, HVS, TVS, MS, Callbacks&gt; Freeze for <a class=\"struct\" href=\"gear_common/storage/struct.DequeueImpl.html\" title=\"struct gear_common::storage::DequeueImpl\">DequeueImpl</a>&lt;Key, Value, Error, HVS, TVS, MS, Callbacks&gt;","synthetic":true,"types":["gear_common::storage::complicated::dequeue::DequeueImpl"]},{"text":"impl&lt;K, V&gt; Freeze for <a class=\"struct\" href=\"gear_common/storage/struct.LinkedNode.html\" title=\"struct gear_common::storage::LinkedNode\">LinkedNode</a>&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Freeze,&nbsp;</span>","synthetic":true,"types":["gear_common::storage::complicated::dequeue::LinkedNode"]},{"text":"impl&lt;Key, Value, Error, HVS, TVS, MS, Callbacks&gt; Freeze for <a class=\"struct\" href=\"gear_common/storage/struct.DequeueDrainIter.html\" title=\"struct gear_common::storage::DequeueDrainIter\">DequeueDrainIter</a>&lt;Key, Value, Error, HVS, TVS, MS, Callbacks&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Key: Freeze,&nbsp;</span>","synthetic":true,"types":["gear_common::storage::complicated::dequeue::DequeueDrainIter"]},{"text":"impl&lt;Key, Value, Error, HVS, TVS, MS&gt; Freeze for <a class=\"struct\" href=\"gear_common/storage/struct.DequeueIter.html\" title=\"struct gear_common::storage::DequeueIter\">DequeueIter</a>&lt;Key, Value, Error, HVS, TVS, MS&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Key: Freeze,&nbsp;</span>","synthetic":true,"types":["gear_common::storage::complicated::dequeue::DequeueIter"]},{"text":"impl&lt;T, VS&gt; Freeze for <a class=\"struct\" href=\"gear_common/storage/struct.LimiterImpl.html\" title=\"struct gear_common::storage::LimiterImpl\">LimiterImpl</a>&lt;T, VS&gt;","synthetic":true,"types":["gear_common::storage::complicated::limiter::LimiterImpl"]},{"text":"impl&lt;VS&gt; Freeze for <a class=\"struct\" href=\"gear_common/storage/struct.TogglerImpl.html\" title=\"struct gear_common::storage::TogglerImpl\">TogglerImpl</a>&lt;VS&gt;","synthetic":true,"types":["gear_common::storage::complicated::toggler::TogglerImpl"]},{"text":"impl&lt;K, V, I&gt; Freeze for <a class=\"struct\" href=\"gear_common/storage/struct.KeyValueIteratorWrap.html\" title=\"struct gear_common::storage::KeyValueIteratorWrap\">KeyValueIteratorWrap</a>&lt;K, V, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Freeze,&nbsp;</span>","synthetic":true,"types":["gear_common::storage::primitives::iterable::KeyValueIteratorWrap"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"gear_common/storage/struct.MailboxKeyGen.html\" title=\"struct gear_common::storage::MailboxKeyGen\">MailboxKeyGen</a>&lt;T&gt;","synthetic":true,"types":["gear_common::storage::primitives::key::MailboxKeyGen"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_common/storage/struct.QueueKeyGen.html\" title=\"struct gear_common::storage::QueueKeyGen\">QueueKeyGen</a>","synthetic":true,"types":["gear_common::storage::primitives::key::QueueKeyGen"]},{"text":"impl Freeze for <a class=\"enum\" href=\"gear_common/code_storage/enum.Error.html\" title=\"enum gear_common::code_storage::Error\">Error</a>","synthetic":true,"types":["gear_common::code_storage::Error"]},{"text":"impl Freeze for <a class=\"enum\" href=\"gear_common/enum.Program.html\" title=\"enum gear_common::Program\">Program</a>","synthetic":true,"types":["gear_common::Program"]},{"text":"impl Freeze for <a class=\"enum\" href=\"gear_common/enum.ProgramError.html\" title=\"enum gear_common::ProgramError\">ProgramError</a>","synthetic":true,"types":["gear_common::ProgramError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_common/struct.ActiveProgram.html\" title=\"struct gear_common::ActiveProgram\">ActiveProgram</a>","synthetic":true,"types":["gear_common::ActiveProgram"]},{"text":"impl Freeze for <a class=\"enum\" href=\"gear_common/enum.ProgramState.html\" title=\"enum gear_common::ProgramState\">ProgramState</a>","synthetic":true,"types":["gear_common::ProgramState"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_common/struct.CodeMetadata.html\" title=\"struct gear_common::CodeMetadata\">CodeMetadata</a>","synthetic":true,"types":["gear_common::CodeMetadata"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_common/struct.PageIsNotAllocatedErr.html\" title=\"struct gear_common::PageIsNotAllocatedErr\">PageIsNotAllocatedErr</a>","synthetic":true,"types":["gear_common::PageIsNotAllocatedErr"]}];
implementors["gear_core"] = [{"text":"impl Freeze for <a class=\"enum\" href=\"gear_core/code/enum.CodeError.html\" title=\"enum gear_core::code::CodeError\">CodeError</a>","synthetic":true,"types":["gear_core::code::CodeError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/code/struct.Code.html\" title=\"struct gear_core::code::Code\">Code</a>","synthetic":true,"types":["gear_core::code::Code"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/code/struct.CodeAndId.html\" title=\"struct gear_core::code::CodeAndId\">CodeAndId</a>","synthetic":true,"types":["gear_core::code::CodeAndId"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/code/struct.InstrumentedCode.html\" title=\"struct gear_core::code::InstrumentedCode\">InstrumentedCode</a>","synthetic":true,"types":["gear_core::code::InstrumentedCode"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/code/struct.InstrumentedCodeAndId.html\" title=\"struct gear_core::code::InstrumentedCodeAndId\">InstrumentedCodeAndId</a>","synthetic":true,"types":["gear_core::code::InstrumentedCodeAndId"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/costs/struct.HostFnWeights.html\" title=\"struct gear_core::costs::HostFnWeights\">HostFnWeights</a>","synthetic":true,"types":["gear_core::costs::HostFnWeights"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/costs/struct.RuntimeToken.html\" title=\"struct gear_core::costs::RuntimeToken\">RuntimeToken</a>","synthetic":true,"types":["gear_core::costs::RuntimeToken"]},{"text":"impl Freeze for <a class=\"enum\" href=\"gear_core/costs/enum.RuntimeCosts.html\" title=\"enum gear_core::costs::RuntimeCosts\">RuntimeCosts</a>","synthetic":true,"types":["gear_core::costs::RuntimeCosts"]},{"text":"impl Freeze for <a class=\"enum\" href=\"gear_core/env/enum.PageAction.html\" title=\"enum gear_core::env::PageAction\">PageAction</a>","synthetic":true,"types":["gear_core::env::PageAction"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/env/struct.ExtCarrierWithError.html\" title=\"struct gear_core::env::ExtCarrierWithError\">ExtCarrierWithError</a>","synthetic":true,"types":["gear_core::env::ExtCarrierWithError"]},{"text":"impl&lt;E&gt; Freeze for <a class=\"struct\" href=\"gear_core/env/struct.ExtCarrier.html\" title=\"struct gear_core::env::ExtCarrier\">ExtCarrier</a>&lt;E&gt;","synthetic":true,"types":["gear_core::env::ExtCarrier"]},{"text":"impl&lt;E&gt; Freeze for <a class=\"struct\" href=\"gear_core/env/struct.ClonedExtCarrier.html\" title=\"struct gear_core::env::ClonedExtCarrier\">ClonedExtCarrier</a>&lt;E&gt;","synthetic":true,"types":["gear_core::env::ClonedExtCarrier"]},{"text":"impl Freeze for <a class=\"enum\" href=\"gear_core/gas/enum.ChargeResult.html\" title=\"enum gear_core::gas::ChargeResult\">ChargeResult</a>","synthetic":true,"types":["gear_core::gas::ChargeResult"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/gas/struct.GasCounter.html\" title=\"struct gear_core::gas::GasCounter\">GasCounter</a>","synthetic":true,"types":["gear_core::gas::GasCounter"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/gas/struct.GasAmount.html\" title=\"struct gear_core::gas::GasAmount\">GasAmount</a>","synthetic":true,"types":["gear_core::gas::GasAmount"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/gas/struct.ValueCounter.html\" title=\"struct gear_core::gas::ValueCounter\">ValueCounter</a>","synthetic":true,"types":["gear_core::gas::ValueCounter"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/gas/struct.GasAllowanceCounter.html\" title=\"struct gear_core::gas::GasAllowanceCounter\">GasAllowanceCounter</a>","synthetic":true,"types":["gear_core::gas::GasAllowanceCounter"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/ids/struct.CodeId.html\" title=\"struct gear_core::ids::CodeId\">CodeId</a>","synthetic":true,"types":["gear_core::ids::CodeId"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/ids/struct.MessageId.html\" title=\"struct gear_core::ids::MessageId\">MessageId</a>","synthetic":true,"types":["gear_core::ids::MessageId"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/ids/struct.ProgramId.html\" title=\"struct gear_core::ids::ProgramId\">ProgramId</a>","synthetic":true,"types":["gear_core::ids::ProgramId"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/memory/struct.PageBuf.html\" title=\"struct gear_core::memory::PageBuf\">PageBuf</a>","synthetic":true,"types":["gear_core::memory::PageBuf"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/memory/struct.PageNumber.html\" title=\"struct gear_core::memory::PageNumber\">PageNumber</a>","synthetic":true,"types":["gear_core::memory::PageNumber"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/memory/struct.WasmPageNumber.html\" title=\"struct gear_core::memory::WasmPageNumber\">WasmPageNumber</a>","synthetic":true,"types":["gear_core::memory::WasmPageNumber"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/memory/struct.AllocationsContext.html\" title=\"struct gear_core::memory::AllocationsContext\">AllocationsContext</a>","synthetic":true,"types":["gear_core::memory::AllocationsContext"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/message/struct.Message.html\" title=\"struct gear_core::message::Message\">Message</a>","synthetic":true,"types":["gear_core::message::common::Message"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/message/struct.Dispatch.html\" title=\"struct gear_core::message::Dispatch\">Dispatch</a>","synthetic":true,"types":["gear_core::message::common::Dispatch"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/message/struct.ContextSettings.html\" title=\"struct gear_core::message::ContextSettings\">ContextSettings</a>","synthetic":true,"types":["gear_core::message::context::ContextSettings"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/message/struct.ContextOutcome.html\" title=\"struct gear_core::message::ContextOutcome\">ContextOutcome</a>","synthetic":true,"types":["gear_core::message::context::ContextOutcome"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/message/struct.ContextStore.html\" title=\"struct gear_core::message::ContextStore\">ContextStore</a>","synthetic":true,"types":["gear_core::message::context::ContextStore"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/message/struct.MessageContext.html\" title=\"struct gear_core::message::MessageContext\">MessageContext</a>","synthetic":true,"types":["gear_core::message::context::MessageContext"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/message/struct.HandleMessage.html\" title=\"struct gear_core::message::HandleMessage\">HandleMessage</a>","synthetic":true,"types":["gear_core::message::handle::HandleMessage"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/message/struct.HandlePacket.html\" title=\"struct gear_core::message::HandlePacket\">HandlePacket</a>","synthetic":true,"types":["gear_core::message::handle::HandlePacket"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/message/struct.IncomingMessage.html\" title=\"struct gear_core::message::IncomingMessage\">IncomingMessage</a>","synthetic":true,"types":["gear_core::message::incoming::IncomingMessage"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/message/struct.IncomingDispatch.html\" title=\"struct gear_core::message::IncomingDispatch\">IncomingDispatch</a>","synthetic":true,"types":["gear_core::message::incoming::IncomingDispatch"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/message/struct.InitMessage.html\" title=\"struct gear_core::message::InitMessage\">InitMessage</a>","synthetic":true,"types":["gear_core::message::init::InitMessage"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/message/struct.InitPacket.html\" title=\"struct gear_core::message::InitPacket\">InitPacket</a>","synthetic":true,"types":["gear_core::message::init::InitPacket"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/message/struct.ReplyMessage.html\" title=\"struct gear_core::message::ReplyMessage\">ReplyMessage</a>","synthetic":true,"types":["gear_core::message::reply::ReplyMessage"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/message/struct.ReplyPacket.html\" title=\"struct gear_core::message::ReplyPacket\">ReplyPacket</a>","synthetic":true,"types":["gear_core::message::reply::ReplyPacket"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/message/struct.StoredMessage.html\" title=\"struct gear_core::message::StoredMessage\">StoredMessage</a>","synthetic":true,"types":["gear_core::message::stored::StoredMessage"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/message/struct.StoredDispatch.html\" title=\"struct gear_core::message::StoredDispatch\">StoredDispatch</a>","synthetic":true,"types":["gear_core::message::stored::StoredDispatch"]},{"text":"impl Freeze for <a class=\"enum\" href=\"gear_core/message/enum.DispatchKind.html\" title=\"enum gear_core::message::DispatchKind\">DispatchKind</a>","synthetic":true,"types":["gear_core::message::DispatchKind"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core/program/struct.Program.html\" title=\"struct gear_core::program::Program\">Program</a>","synthetic":true,"types":["gear_core::program::Program"]}];
implementors["gear_core_processor"] = [{"text":"impl Freeze for <a class=\"enum\" href=\"gear_core_processor/common/enum.DispatchResultKind.html\" title=\"enum gear_core_processor::common::DispatchResultKind\">DispatchResultKind</a>","synthetic":true,"types":["gear_core_processor::common::DispatchResultKind"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core_processor/common/struct.DispatchResult.html\" title=\"struct gear_core_processor::common::DispatchResult\">DispatchResult</a>","synthetic":true,"types":["gear_core_processor::common::DispatchResult"]},{"text":"impl Freeze for <a class=\"enum\" href=\"gear_core_processor/common/enum.DispatchOutcome.html\" title=\"enum gear_core_processor::common::DispatchOutcome\">DispatchOutcome</a>","synthetic":true,"types":["gear_core_processor::common::DispatchOutcome"]},{"text":"impl Freeze for <a class=\"enum\" href=\"gear_core_processor/common/enum.JournalNote.html\" title=\"enum gear_core_processor::common::JournalNote\">JournalNote</a>","synthetic":true,"types":["gear_core_processor::common::JournalNote"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core_processor/common/struct.ExecutionError.html\" title=\"struct gear_core_processor::common::ExecutionError\">ExecutionError</a>","synthetic":true,"types":["gear_core_processor::common::ExecutionError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"gear_core_processor/common/enum.ExecutionErrorReason.html\" title=\"enum gear_core_processor::common::ExecutionErrorReason\">ExecutionErrorReason</a>","synthetic":true,"types":["gear_core_processor::common::ExecutionErrorReason"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core_processor/common/struct.ExecutableActor.html\" title=\"struct gear_core_processor::common::ExecutableActor\">ExecutableActor</a>","synthetic":true,"types":["gear_core_processor::common::ExecutableActor"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core_processor/common/struct.ExecutionContext.html\" title=\"struct gear_core_processor::common::ExecutionContext\">ExecutionContext</a>","synthetic":true,"types":["gear_core_processor::common::ExecutionContext"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core_processor/common/struct.State.html\" title=\"struct gear_core_processor::common::State\">State</a>","synthetic":true,"types":["gear_core_processor::common::State"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core_processor/configs/struct.BlockInfo.html\" title=\"struct gear_core_processor::configs::BlockInfo\">BlockInfo</a>","synthetic":true,"types":["gear_core_processor::configs::BlockInfo"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core_processor/configs/struct.AllocationsConfig.html\" title=\"struct gear_core_processor::configs::AllocationsConfig\">AllocationsConfig</a>","synthetic":true,"types":["gear_core_processor::configs::AllocationsConfig"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core_processor/configs/struct.ExecutionSettings.html\" title=\"struct gear_core_processor::configs::ExecutionSettings\">ExecutionSettings</a>","synthetic":true,"types":["gear_core_processor::configs::ExecutionSettings"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_core_processor/struct.Ext.html\" title=\"struct gear_core_processor::Ext\">Ext</a>","synthetic":true,"types":["gear_core_processor::ext::Ext"]}];
implementors["gear_lazy_pages"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"gear_lazy_pages/struct.GetReleasedPageError.html\" title=\"struct gear_lazy_pages::GetReleasedPageError\">GetReleasedPageError</a>","synthetic":true,"types":["gear_lazy_pages::GetReleasedPageError"]}];
implementors["gear_wasm_builder"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"gear_wasm_builder/optimize/struct.OptimizationResult.html\" title=\"struct gear_wasm_builder::optimize::OptimizationResult\">OptimizationResult</a>","synthetic":true,"types":["gear_wasm_builder::optimize::OptimizationResult"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gear_wasm_builder/struct.WasmBuilder.html\" title=\"struct gear_wasm_builder::WasmBuilder\">WasmBuilder</a>","synthetic":true,"types":["gear_wasm_builder::WasmBuilder"]}];
implementors["gstd"] = [{"text":"impl Freeze for <a class=\"enum\" href=\"gstd/errors/enum.ContractError.html\" title=\"enum gstd::errors::ContractError\">ContractError</a>","synthetic":true,"types":["gstd::common::errors::ContractError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gstd/struct.ActorId.html\" title=\"struct gstd::ActorId\">ActorId</a>","synthetic":true,"types":["gstd::common::primitives::ActorId"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gstd/struct.MessageId.html\" title=\"struct gstd::MessageId\">MessageId</a>","synthetic":true,"types":["gstd::common::primitives::MessageId"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gstd/struct.CodeHash.html\" title=\"struct gstd::CodeHash\">CodeHash</a>","synthetic":true,"types":["gstd::common::primitives::CodeHash"]},{"text":"impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"gstd/lock/mutex/struct.Mutex.html\" title=\"struct gstd::lock::mutex::Mutex\">Mutex</a>&lt;T&gt;","synthetic":true,"types":["gstd::lock::mutex::Mutex"]},{"text":"impl&lt;'a, T&gt; Freeze for <a class=\"struct\" href=\"gstd/lock/mutex/struct.MutexGuard.html\" title=\"struct gstd::lock::mutex::MutexGuard\">MutexGuard</a>&lt;'a, T&gt;","synthetic":true,"types":["gstd::lock::mutex::MutexGuard"]},{"text":"impl&lt;'a, T&gt; Freeze for <a class=\"struct\" href=\"gstd/lock/mutex/struct.MutexLockFuture.html\" title=\"struct gstd::lock::mutex::MutexLockFuture\">MutexLockFuture</a>&lt;'a, T&gt;","synthetic":true,"types":["gstd::lock::mutex::MutexLockFuture"]},{"text":"impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"gstd/lock/rwlock/struct.RwLock.html\" title=\"struct gstd::lock::rwlock::RwLock\">RwLock</a>&lt;T&gt;","synthetic":true,"types":["gstd::lock::rwlock::RwLock"]},{"text":"impl&lt;'a, T&gt; Freeze for <a class=\"struct\" href=\"gstd/lock/rwlock/struct.RwLockReadGuard.html\" title=\"struct gstd::lock::rwlock::RwLockReadGuard\">RwLockReadGuard</a>&lt;'a, T&gt;","synthetic":true,"types":["gstd::lock::rwlock::RwLockReadGuard"]},{"text":"impl&lt;'a, T&gt; Freeze for <a class=\"struct\" href=\"gstd/lock/rwlock/struct.RwLockWriteGuard.html\" title=\"struct gstd::lock::rwlock::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'a, T&gt;","synthetic":true,"types":["gstd::lock::rwlock::RwLockWriteGuard"]},{"text":"impl&lt;'a, T&gt; Freeze for <a class=\"struct\" href=\"gstd/lock/rwlock/struct.RwLockReadFuture.html\" title=\"struct gstd::lock::rwlock::RwLockReadFuture\">RwLockReadFuture</a>&lt;'a, T&gt;","synthetic":true,"types":["gstd::lock::rwlock::RwLockReadFuture"]},{"text":"impl&lt;'a, T&gt; Freeze for <a class=\"struct\" href=\"gstd/lock/rwlock/struct.RwLockWriteFuture.html\" title=\"struct gstd::lock::rwlock::RwLockWriteFuture\">RwLockWriteFuture</a>&lt;'a, T&gt;","synthetic":true,"types":["gstd::lock::rwlock::RwLockWriteFuture"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"gstd/msg/struct.CodecMessageFuture.html\" title=\"struct gstd::msg::CodecMessageFuture\">CodecMessageFuture</a>&lt;T&gt;","synthetic":true,"types":["gstd::msg::async::CodecMessageFuture"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gstd/msg/struct.MessageFuture.html\" title=\"struct gstd::msg::MessageFuture\">MessageFuture</a>","synthetic":true,"types":["gstd::msg::async::MessageFuture"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gstd/msg/struct.MessageHandle.html\" title=\"struct gstd::msg::MessageHandle\">MessageHandle</a>","synthetic":true,"types":["gstd::msg::basic::MessageHandle"]}];
implementors["gtest"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"gtest/struct.CoreLog.html\" title=\"struct gtest::CoreLog\">CoreLog</a>","synthetic":true,"types":["gtest::log::CoreLog"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gtest/struct.Log.html\" title=\"struct gtest::Log\">Log</a>","synthetic":true,"types":["gtest::log::Log"]},{"text":"impl Freeze for <a class=\"struct\" href=\"gtest/struct.RunResult.html\" title=\"struct gtest::RunResult\">RunResult</a>","synthetic":true,"types":["gtest::log::RunResult"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"gtest/struct.Program.html\" title=\"struct gtest::Program\">Program</a>&lt;'a&gt;","synthetic":true,"types":["gtest::program::Program"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"gtest/struct.System.html\" title=\"struct gtest::System\">System</a>","synthetic":true,"types":["gtest::system::System"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()