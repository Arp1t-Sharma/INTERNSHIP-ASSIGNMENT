import Link from "next/link";
import { useRouter } from "next/router";

export default function Header(){
  const { pathname } = useRouter();
  return (
    <header className="header-clouds">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-lg font-semibold">Home Page - Chat</div>
        <nav className="flex gap-2">
          <Link href="/" className={`nav-link ${pathname==="/"?"bg-white":""}`}>Home</Link>
          <Link href="/second" className={`nav-link ${pathname!=="/"?"bg-white":""}`}>2nd Page</Link>
        </nav>
      </div>
    </header>
  );
}
