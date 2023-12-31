import { Link } from "react-router-dom";
import github from "../assets/images/github.png";
import google from "../assets/images/google.png";
import loginImg from "../assets/images/login.jpg";

function Login() {
  return (
    <div className="flex">
      <div className="flex-1  hidden xl:block">
        <img
          className="min-h-screen object-cover"
          src={loginImg}
          alt="Login Img"
        />
      </div>
      <div className="flex-1 bg-slate-100">
        <div className="flex flex-col  justify-center min-h-screen md:w-[600px] w-[350px] sm:w-[450px] mx-auto">
          <h1 className="text-3xl font-semibold">Login</h1>
          <p className="my-3 ">Welcome Back! Please enter your details.</p>
          <form>
            <input
              className="p-2 mb-5 mt-2 w-full outline-none border-none rounded-sm"
              type="email"
              placeholder="Enter your email..."
              name="email"
            />
            <input
              className="p-2 w-full outline-none border-none rounded-sm"
              type="password"
              placeholder="Password..."
              name="password"
            />

            <div className="mt-4 font-semibold underline">
              <Link>Forget Password?</Link>
            </div>

            <input
              className="w-full bg-black text-white py-2 my-4 rounded-sm cursor-pointer hover:space-x-2 hover:tracking-wide transition-all"
              type="submit"
              value="Login"
            />
          </form>
          <div className="flex items-center gap-1 my-2">
            <div className="w-1/2 h-[1px] bg-slate-400"></div>
            <div className="-mt-1">or</div>
            <div className="w-1/2 h-[1px] bg-slate-400"></div>
          </div>
          <div>
            <div className="flex items-center justify-center gap-1 bg-white border border-black rounded-sm p-1 my-5 cursor-pointer hover:tracking-wide transition-all ">
              <img className="w-10" src={google} alt="Google" />
              <p className="text-[18px] font-semibold">Sign In With Google</p>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white border border-black rounded-sm p-1 my-5 cursor-pointer hover:tracking-wide transition-all">
              <img className="w-8" src={github} alt="Github" />
              <span className="text-[18px] font-semibold">
                Sign In With Github
              </span>
            </div>
          </div>

          <p className="text-center">
            New to this website? Please
            <Link className="underline font-bold" to="/member/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
