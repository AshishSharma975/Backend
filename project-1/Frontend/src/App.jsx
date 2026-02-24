import React from "react";
import RoutesComponent from "./routes";
import "./features/shared/global.scss";
import { AuthProvider } from "./features/auth/auth.context";
import { PostContextProvider } from "./features/post/Post.context";

const App = () => {
  return (
    <AuthProvider>
      <PostContextProvider>
      <RoutesComponent />
      </PostContextProvider>
    </AuthProvider>
  );
};

export default App;