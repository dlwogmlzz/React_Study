import { useFetch } from './useFetch';

const baseUrl = 'https://jsonplaceholder.typicode.com';

function App() {
  // const {data, fetchUrl} = useFetch(baseUrl, "users");
  const { data: userData } = useFetch(baseUrl, "users");
  const { data: postData } = useFetch(baseUrl, "posts");
  const { data: todoData } = useFetch(baseUrl, "todos");

  return (
    <div>
      <h1>USERS</h1>
      {/* <button onClick={() => fetchUrl("users")}>Users</button>
      <button onClick={() => fetchUrl("posts")}>Posts</button>
      <button onClick={() => fetchUrl("todos")}>Todos</button> */}
      {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
      <h1>POSTS</h1>
      {postData && <pre>{JSON.stringify(postData[0], null, 2)}</pre>}
      <h1>TODOS</h1>
      {todoData && <pre>{JSON.stringify(todoData[0], null, 2)}</pre>}
    </div>
  );
}

export default App;

