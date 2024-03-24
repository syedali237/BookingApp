export default function LoginPage() : JSX.Element {
    return (
      <div className="mt-4 grow flex items-center justify-around">
        <div className="mb-64">
          <h1 className="text-4xl text-center">Login</h1>
          <form className="max-w-md mx-auto ">
            <input type="email" placeholder="your@email.com" />
            <input type="password" placeholder="password" />
            <button className="primary">Login</button>
            <div>Don't have an account yet?</div>
          </form>
        </div>
      </div>
    );
}