import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Container from "../../components/Container/Container";
import { getAlltodos } from "../../components/requests";

export default function FirstPost({ todosData }) {
  return (
    <Container>
      {/* <Head>
        <title>{postData.title}</title>
        <meta name="description" content={`First Post ${postData.title}`} />
        <meta property="og:image" content={"/image/chocolatecake-1.jpg"} />
        <meta name="og:title" content={"Chocolate cake"} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head> */}
      {/* <h3>№{`${postData.id}`}</h3>
      <h2>{postData.title}</h2> */}
      {/* <Image
        src="/image/chocolatecake-1.jpg"
        height={200}
        width={200}
        alt="Your Name"
      /> */}
      <Link href="/">get back</Link>
      {todosData &&
        todosData.length > 0 &&
        todosData.map((item, index) => {
          return (
            <div key={index + item.title}>
              <h4>
                {item.id + ": "}
                {item.title}
              </h4>
              <h5>Completed: {item.completed ? "Yes" : "No"}</h5>
            </div>
          );
        })}
    </Container>
  );
}

export async function getStaticProps() {
  const todosData = await getAlltodos();

  return {
    props: {
      todosData,
    },
  };
}
