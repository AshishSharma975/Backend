import { getFeed } from "../services/post.api";
import { useContext, useState } from "react";
import { PostContext } from "../Post.context";

export const usePost = () => {
  const context = useContext(PostContext);

  const [loading, setLoading] = useState(false);
  const [feed, setFeed] = useState([]);
  const [post, setPost] = useState(null);

  const handleGetFeed = async () => {
    try {
      setLoading(true);
      const data = await getFeed();
      setFeed(data?.posts || []);
    } catch (err) {
      console.error("getFeed error:", err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, feed, post, handleGetFeed };
};