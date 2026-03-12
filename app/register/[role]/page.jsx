import { SignupForm } from "../_components/signup-form";

const RegisterPage = ({ params: { role } }) => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-black via-slate-900 to-black px-4">

      {/* Background glow blobs */}
      <div className="absolute top-[-200px] left-[-200px] h-[400px] w-[400px] rounded-full bg-indigo-600/20 blur-3xl"></div>
      <div className="absolute bottom-[-200px] right-[-200px] h-[400px] w-[400px] rounded-full bg-violet-600/20 blur-3xl"></div>

      {/* Glassmorphic card */}
      <div className="relative w-full max-w-md bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl">
        <SignupForm role={role} />
      </div>
    </div>
  );
};

export default RegisterPage;