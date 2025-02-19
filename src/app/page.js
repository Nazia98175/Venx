import Login from "./components/auth/Login";
import { LoginIllustration } from "./components/common/illustrationSvgs";

export default function Home() {
  return (
    <>
      <div className=" grid lg:grid-cols-2 min-h-screen bg-white">
        <div className=" items-center max-w-full min-h-screen lg:flex hidden justify-center ">
          <LoginIllustration className="" />
        </div>
        <Login />
      </div>
    </>
  );
}
