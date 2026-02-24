import React, { useEffect } from "react";
import PostCard from "../components/PostCard";
import { usePost } from "../hooks/usepost";

const Feed = () => {
  const { feed, handleGetFeed, loading } = usePost();

  useEffect(() => {
    handleGetFeed();
  }, []);
  console.log("FEED:", feed);

  return (
    <main style={{ backgroundColor: "#fafafa", minHeight: "100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        feed.map((post) => (
          <PostCard key={post._id || post.id} post={post} />
        ))
      )}
    </main>
  );
};

export default Feed;