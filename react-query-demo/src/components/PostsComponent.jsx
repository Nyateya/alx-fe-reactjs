import React from "react";
import { useQuery } from "react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

function PostsComponent() {
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery(
    "posts",
    fetchPosts,
    {
      staleTime: 1000 * 60, // keep data fresh for 1 min
      cacheTime: 1000 * 60 * 5, // keep cache for 5 mins
      refetchOnWindowFocus: false, // 👈 prevents auto-refetch on tab focus
      keepPreviousData: true, // 👈 keep old data while fetching new
    }
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch}>
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
