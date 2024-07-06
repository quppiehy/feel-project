"use client";
import Image from "next/image";
import FeelLogo from "../img/FeelLogo.png";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import { useEffect, useState } from "react";

const Login: React.FC = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      window.location.href = "/profile";
    }
  }, [status]);

  return (
    <section className="bg-white min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-auto lg:py-0">
        <a
          href="#"
          className="flex items-center text-2xl font-semibold text-gray-500"
        >
          <Image
            height={60}
            className="object-contain"
            src={FeelLogo}
            alt="Feel Logo"
          ></Image>
          Feel Technology
        </a>
        <div className="w-full bg-white rounded-lg shadow-lg md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 pt-3 space-y-4 md:space-y-6">
            <div className="flex justify-center space-x-4 ">
              <button className="flex items-center justify-center px-4 py-1 bg-white text-black text-sm border border-black rounded-lg hover:bg-purple-500 hover:text-white hover:border-white focus:ring-4 focus:ring-purple-300 min-w-[250px]">
                <Image
                  src="https://www.svgrepo.com/show/355037/google.svg"
                  width={22}
                  height={22}
                  className={"mr-2"}
                  alt="Google Icon"
                />
                Sign in with Google
              </button>
              <button
                type="submit"
                onClick={() => signIn("github", { callbackUrl: "/profile" })}
                className="flex items-center justify-center px-4 py-1 bg-white text-black text-sm border border-black rounded-lg hover:bg-purple-500 hover:text-white hover:border-white focus:ring-4 focus:ring-purple-300  min-w-[250px]"
              >
                <svg
                  className="mr-2 w-9 h-9"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12c0 4.419 2.865 8.167 6.839 9.491.5.091.682-.217.682-.483 0-.238-.009-.868-.013-1.704-2.782.605-3.369-1.342-3.369-1.342-.454-1.156-1.11-1.464-1.11-1.464-.907-.62.069-.608.069-.608 1.002.07 1.529 1.029 1.529 1.029.892 1.529 2.341 1.088 2.91.832.091-.647.349-1.088.635-1.34-2.221-.252-4.555-1.11-4.555-4.941 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.271.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.845a9.564 9.564 0 012.508.337c1.91-1.293 2.75-1.025 2.75-1.025.544 1.379.201 2.397.099 2.65.64.698 1.029 1.591 1.029 2.682 0 3.842-2.336 4.687-4.563 4.935.359.31.678.923.678 1.86 0 1.343-.012 2.423-.012 2.751 0 .268.18.578.688.48C19.137 20.165 22 16.418 22 12c0-5.52-4.48-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
                Sign in with GitHub
              </button>
            </div>
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                OR
              </p>
            </div>
            <form className="space-y-4 md:space-y-5" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-xs text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 sm:p-2"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 sm:p-2"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 sm:p-2"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                onClick={() => signIn("github", { callbackUrl: "/profile" })}
                className="w-full text-white bg-purple-700 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500">
                Don’t have an account yet?{" "}
                <a
                  href="/signup"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
