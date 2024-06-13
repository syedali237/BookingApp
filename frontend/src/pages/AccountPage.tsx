import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Navigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";


export default function AccountPage() : JSX.Element {
  const { user, ready, setUser } = useContext(UserContext);
  let { subpage } = useParams();

  if (subpage === undefined) {
    subpage = "profile";
  }

  async function logOut() {
    try {
        await axios.post('/logout', {} , { withCredentials: true });
        setUser(null); // Reset the user state
      } catch (error) {
        console.error("Error logging out:", error);
      }
  }

  if (!ready) {
    return <div>Loading...</div>;
  }

  if (ready && !user) {
    return <Navigate to={"/login"} />;
  }

  console.log(subpage);

  function linkClasses(type: string | null = null): string {
    let classes = "py-2 px-6";
    if (type === subpage || (subpage === undefined && type === "profile")) {
      classes += " bg-primary text-white rounded-full";
    }
    return classes;
  }

  return (
    <div>
      <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
        <Link className={linkClasses("profile")} to={"/account"}>
          Profile
        </Link>
        <Link className={linkClasses("bookings")} to={"/account/bookings"}>
          Bookings
        </Link>
        <Link className={linkClasses("places")} to={"/account/places"}>
          Accomodations
        </Link>
      </nav>
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user?.name} ({user?.email})
          <button onClick={logOut} className="primary max-w-sm mt-2">Logout</button>
        </div>
      )}
    </div>
  );
}