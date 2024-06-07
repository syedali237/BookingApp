import axios from "axios";
import { FormEvent, useState } from "react";
import { Link, Navigate } from "react-router-dom";

export default function LoginPage() : JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [redirect, setRedirect] = useState<boolean>(false);

  async function handleLoginSubmit(event:FormEvent) {
    event.preventDefault();
    try {
      await axios.post('/login' , {email, password} , {withCredentials : true})  
      alert('Login Successful');
      setRedirect(true);
    } catch (error) {
      alert('Check Password or Email')
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
          <input
            type="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            placeholder="your@email.com"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet?
            <Link to={"/register"} className="underline text-black ml-1">
              Register Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}