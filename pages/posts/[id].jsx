import React from "react";
import Container from "../../components/Container/Container";
import { getAlltodos } from "../../components/requests";

const Post = ({ todoItemData }) => {
  return (
    <Container>
      {todoItemData.title}
      <br />
      {todoItemData.id}
      <br />
      completed: {todoItemData.completed}
    </Container>
  );
};

export default Post;

const getTodoPaths = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=50"
  );
  const todosData = await res.json();

  return todosData.map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });
};

export async function getStaticPaths() {
  const paths = await getTodoPaths();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const todoItemData = getAlltodos(params.id);
  return {
    props: {
      todoItemData,
    },
  };
}
