import React from "react";
import RoutesComponent from "./routes";
import "./features/shared/global.scss";
import { AuthProvider } from "./features/auth/auth.context";
const App = () => {
  <AuthProvider>
    return <RoutesComponent />;
  </AuthProvider>;
};

export default App;
