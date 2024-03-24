import { Routes , Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import IndexPage from "../pages/IndexPage";
import Layout from "./Layout";

function App(): JSX.Element  {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
