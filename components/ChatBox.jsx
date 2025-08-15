import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useChat } from "./ChatContext";

export default function ChatBox() {
  const { pathname } = useRouter();
  const { messages, setMessages, input, setInput, minimized, setMinimized } = useChat();

  const mode = pathname === "/" ? "home" : "docked";
  const isMin = minimized && mode === "docked";

  const variants = {
    home: { width: "min(1100px, 92vw)", height: 280, bottom: 24, left: "50%", x: "-50%", right: "auto", borderRadius: 24 },
    docked: { width: 440, height: 560, bottom: 24, right: 24, left: "auto", x: 0, borderRadius: 22 },
    minimized: { width: 70, height: 70, bottom: 24, right: 24, borderRadius: 999 }
  };

  function send(e) {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages(prev => [...prev, { id: Date.now(), role: "user", text: input.trim() }]);
    setInput("");
  }

  return (
    <motion.div
      className="fixed z-50"
      layout
      variants={variants}
      animate={isMin ? "minimized" : mode}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
      style={{ boxShadow: "0 30px 70px rgba(0,0,0,0.15)" }}
    >
      <div className="bg-white rounded-xl shadow-lg h-full w-full flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b bg-white/80 backdrop-blur">
          <div className="font-medium">Chat</div>
          {mode === "docked" && (
            <button
              className="icon-btn bg-white shadow"
              onClick={() => setMinimized(!minimized)}
              aria-label={isMin ? "Expand" : "Minimize"}
            >
              {isMin ? "Open" : "—"}
            </button>
          )}
        </div>

        {/* Body */}
        <AnimatePresence mode="wait">
          {!isMin && (
            <motion.div
              key={mode}
              className="flex-1 flex flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {/* Messages */}
              <div className="flex-1 overflow-auto p-4 space-y-3 bg-white">
                {messages.map(m => (
                  <div
                    key={m.id}
                    className={`max-w-[88%] px-4 py-2 rounded-2xl ${
                      m.role === "user" ? "bg-blue-100 self-end" : "bg-gray-100"
                    }`}
                  >
                    <div className="text-[14px] leading-relaxed text-gray-800">{m.text}</div>
                  </div>
                ))}
              </div>

              {/* Footer with dropdowns + controls */}
              <form
                onSubmit={send}
                className="bg-blue-50 border-t px-3 py-3 relative z-50"
              >
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 items-center">
                  <select className="select">
                    <option value="">Select Option 1</option>
                    <option>Option 1</option>
                  </select>
                  <select className="select">
                    <option value="">Select Option 2</option>
                    <option>Option 2</option>
                  </select>
                  <select className="select">
                    <option value="">Select Option 3</option>
                    <option>Option 3</option>
                  </select>
                  <select className="select">
                    <option value="">Select Option 4</option>
                    <option>Option 4</option>
                  </select>
                  <div className="flex items-center gap-2">
                    <input
                      value={input}
                      onChange={e => setInput(e.target.value)}
                      placeholder="Please type your message"
                      className="flex-1 border rounded-xl px-3 py-2 text-sm bg-white"
                    />
                    <button type="button" className="icon-btn bg-white shadow">🎙️</button>
                    <button type="submit" className="send-btn">Send</button>
                  </div>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
