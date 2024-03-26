import { Routes , Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import IndexPage from "../pages/IndexPage";
import Layout from "./Layout";
import RegisterPage from "../pages/RegisterPage";

function App(): JSX.Element  {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
