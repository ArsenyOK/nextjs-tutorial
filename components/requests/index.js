export const getFirstPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const postData = await res.json();

  return postData;
};
