import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() : JSX.Element {
    return (
      <div className="p-4 flex flex-col min-h-screen">
        <Navbar />
        <Outlet />
      </div>
    );
}