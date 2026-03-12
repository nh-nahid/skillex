import { LoginForm } from "./_components/login-form";

const LoginPage = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-black via-slate-900 to-black">

      {/* Background glow */}
      <div className="absolute top-[-200px] left-[-200px] h-[400px] w-[400px] rounded-full bg-indigo-600/20 blur-3xl"></div>
      <div className="absolute bottom-[-200px] right-[-200px] h-[400px] w-[400px] rounded-full bg-violet-600/20 blur-3xl"></div>

      {/* Content */}
      <div className="container flex justify-center px-4">
        <LoginForm />
      </div>

    </div>
  );
};

export default LoginPage;