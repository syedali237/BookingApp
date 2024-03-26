import axios from "axios";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() : JSX.Element {

  const [name, setName] = useState<string>('');
  const [email ,setEmail] = useState<string>('');
  const [password ,setPassword] = useState<string>('');
  async function registerUser(event : FormEvent){
    let url: string = "http://localhost:4000/test";
    try {
      const response = axios.get(url);
      console.log(response);
      event.preventDefault();
    } catch (error) {
      console.log(error);
    }
  }

    return (
      <div className="mt-4 grow flex items-center justify-around">
        <div className="mb-64">
          <h1 className="text-4xl text-center">Register</h1>
          <form className="max-w-md mx-auto" onSubmit={registerUser}>
            <input
              type="text"
              placeholder="John Wick"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
            <button className="primary">Register</button>
            <div className="text-center py-2 text-gray-500">
              Already a Member?
              <Link to={"/login"} className="underline text-black ml-1">
                Login Now
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
}