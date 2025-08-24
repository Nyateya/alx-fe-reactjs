import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from "./components/PostsComponent.jsx";
import React,{ useState } from "react";

const queryClient = new QueryClient();

function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
      <button onClick={() => setShowPosts(!showPosts)}>
        {showPosts ? "Hide Posts" : "Show Posts"}
      </button>
      {showPosts && <PostsComponent />}
      <p>Click the button to toggle posts visibility.</p>
    </QueryClientProvider>
  );
}
export default App;