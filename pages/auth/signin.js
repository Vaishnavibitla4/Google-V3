import React from "react";
import Header from "../../components/Header";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";

export default function SignIn({ providers }) {
  return (
    <>
      <Header />
      <div className="mt-40">
        {providers &&
          Object.values(providers).map((provider) => (
            <div key={provider.name} className="flex flex-col items-center">
              
              <img
                className="w-52 object-cover"
                src="/public/google.png"
                alt="Google logo"
              />

              <p className="text-sm italic my-10 text-center">
                This website is created for learning purposes
              </p>

              <button
                className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500"
                onClick={() =>
                  signIn(provider.id, { callbackUrl: "/" })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers: providers ?? null },
  };
}