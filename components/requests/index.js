export const getAlltodos = async (todoId) => {
  if (todoId) {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId}`
    );
    const todosData = await res.json();

    return todosData;
  } else {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=50"
    );
    const todosData = await res.json();

    return todosData.map((item) => {
      return {
        params: {
          id: item.id,
        },
      };
    });
  }
};
