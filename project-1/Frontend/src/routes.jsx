import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./features/auth/pages/login";
import Register from "./features/auth/pages/register";
import Feed from "./features/post/pages/Feed";
import CreatePost from "./features/post/pages/CreatePost";
const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;