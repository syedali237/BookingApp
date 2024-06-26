import { Routes , Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import IndexPage from "../pages/IndexPage";
import Layout from "./Layout";
import RegisterPage from "../pages/RegisterPage";
import axios from "axios";
import { UserContextProvider } from "../context/UserContext";
import AccountPage from "../pages/AccountPage";

axios.defaults.baseURL = 'http://localhost:4000';

function App(): JSX.Element  {
  return (
    <UserContextProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/account/:subpage?" element={<AccountPage />} />
      </Route>
    </Routes>
    </UserContextProvider>
  );
}

export default App;
