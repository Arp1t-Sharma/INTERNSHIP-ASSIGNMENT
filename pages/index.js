import Head from "next/head";
export default function Home(){
  return (
    <>
      <Head><title>Home Page - Chat</title></Head>
      <section className="max-w-6xl mx-auto px-6">
        <div className="card p-6 mt-8">
          <p className="text-gray-700">
            As you can see, all of these were posted just over a few days ago and they fit your strengths perfectly...
          </p>
        </div>
        <div className="card p-6 mt-6 min-h-[360px]">
          <p className="text-gray-800 font-medium mb-2">Some content to scroll...</p>
          <div className="h-72" />
        </div>
      </section>
    </>
  );
}
