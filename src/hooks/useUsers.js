import { useState, useEffect } from "react";
import {
  fetchPosts,
  createPost,
  updatePost,
  deletePost,
} from "../services/Api";

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetchPosts();
        setPosts(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  const addPost = async (post) => {
    try {
      const response = await createPost(post);
      setPosts((prevPosts) => [...prevPosts, response.data]);
    } catch (err) {
      setError(err);
    }
  };

  const editPost = async (id, updatedPost) => {
    try {
      const response = await updatePost(id, updatedPost);
      setPosts((prevPosts) =>
        prevPosts.map((post) => (post.id === id ? response.data : post))
      );
    } catch (err) {
      setError(err);
    }
  };

  const removePost = async (id) => {
    try {
      await deletePost(id);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } catch (err) {
      setError(err);
    }
  };

  return { posts, loading, error, addPost, editPost, removePost };
};

export default usePosts;
