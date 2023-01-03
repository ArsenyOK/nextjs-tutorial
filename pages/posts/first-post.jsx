import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Container from "../../components/Container/Container";
import { getFirstPost } from "../../components/requests";

export default function FirstPost({ postData }) {
  console.log(postData, "postData");
  return (
    <Container>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={`First Post ${postData.title}`} />
        <meta property="og:image" content={"/image/chocolatecake-1.jpg"} />
        <meta name="og:title" content={"Chocolate cake"} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <h3>№{`${postData.id}`}</h3>
      <h2>{postData.title}</h2>
      <Image
        src="/image/chocolatecake-1.jpg"
        height={200}
        width={200}
        alt="Your Name"
      />
      <Link href="/">get back</Link>
    </Container>
  );
}

export async function getStaticProps() {
  const postData = await getFirstPost();

  return {
    props: {
      postData,
    },
  };
}
