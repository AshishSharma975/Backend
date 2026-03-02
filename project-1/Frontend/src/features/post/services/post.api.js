import axios from "axios";

export async function getFeed() {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/post/feed",
      {
        withCredentials: true, 
      }
    );

    return response.data;
  } catch (error) {
    console.error("getFeed error:", error);
    throw error;
  }
}