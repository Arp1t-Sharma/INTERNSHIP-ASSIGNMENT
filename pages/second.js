import Head from "next/head";
export default function Second(){
  return (
    <>
      <Head><title>2nd Page</title></Head>
      <section className="max-w-7xl mx-auto px-6">
        <div className="card p-6 mt-8">
          <p>Here are your matches for the day!</p>
          <div className="h-96" />
        </div>
      </section>
    </>
  );
}
