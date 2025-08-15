import { createContext, useContext, useState, useMemo } from "react";
const ChatContext = createContext(null);

export function ChatProvider({ children }){
  const [messages, setMessages] = useState([
    { id: 1, role: "assistant", text: "Here are your matches for the day!" },
    { id: 2, role: "user", text: "Hey Felix, thanks! Which ones fit best?" },
    { id: 3, role: "assistant", text: "Definitely! Based on your resume..." },
  ]);
  const [input, setInput] = useState("");
  const [minimized, setMinimized] = useState(false);
  const value = useMemo(()=>({messages, setMessages, input, setInput, minimized, setMinimized}),[messages,input,minimized]);
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}
export function useChat(){ const v = useContext(ChatContext); if(!v) throw new Error("useChat outside"); return v; }
