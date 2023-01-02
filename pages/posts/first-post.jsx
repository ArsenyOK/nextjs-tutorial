import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Container from "../../components/Container/Container";

export default function FirstPost() {
  return (
    <Container>
      <Head>
        <title>First Post</title>
        <meta name="description" content="First Post Chocolate cake" />
        <meta property="og:image" content={"/image/chocolatecake-1.jpg"} />
        <meta name="og:title" content={"Chocolate cake"} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <h2>First Post!</h2>
      <Image
        src="/image/chocolatecake-1.jpg" // Route of the image file
        height={200} // Desired size with correct aspect ratio
        width={200} // Desired size with correct aspect ratio
        alt="Your Name"
      />
      <Link href="/">get back</Link>
    </Container>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
}
