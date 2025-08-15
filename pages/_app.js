import "@/styles/globals.css";
import { ChatProvider } from "@/components/ChatContext";
import Header from "@/components/Header";
import ChatBox from "@/components/ChatBox";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }){
  const router = useRouter();
  return (
    <ChatProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <AnimatePresence mode="wait">
          <motion.main key={router.asPath} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.2}} className="flex-1">
            <Component {...pageProps} />
          </motion.main>
        </AnimatePresence>
        <ChatBox />
        {/* Minimized wheel icon when minimized (visual on page) */}
        {/* The button is inside ChatBox; this asset is for background parity */}
      </div>
    </ChatProvider>
  );
}
