import Link from "next/link";
import Head from "next/head";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h2>First Post!</h2>
      <img
        src="https://www.thespruceeats.com/thmb/FhHcgQni8lgV0griUeDJMTAszxI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chocolate_hero1-d62e5444a8734f8d8fe91f5631d51ca5.jpg" // Route of the image file
        alt="Chocolate Cake"
        style={{
          width: 200,
          height: "auto",
        }}
      />
      <Link href="/">get back</Link>
    </>
  );
}
