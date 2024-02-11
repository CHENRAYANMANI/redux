import AddPostForm from "./features/counter/AddPostForm";
import Counter from "./features/counter/Counter";
import Hello from "./features/counter/Hello";
import PostList from "./features/counter/PostList";

function App() {
  return (
    <div>
      <Counter />
      <AddPostForm />
      <PostList />
      <Hello />
    </div>
  );
}

export default App;
