import "@/styles/globals.css";
import { ChatProvider } from "@/components/ChatContext";
import Header from "@/components/Header";
import ChatBox from "@/components/ChatBox";

export default function App({ Component, pageProps }) {
  return (
    <ChatProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        {/* Persistent ChatBox always mounted */}
        <ChatBox />
      </div>
    </ChatProvider>
  );
}
