import Head from "next/head";
import Image from "next/image";
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.co" />
        <title>Start Shipping Faster | Start Builder </title>
        <meta name="description" content="The Future of Software Development" />
      </Head>

      {/* this is the nav */}
      <nav id="navbar">
        <div className="flex justify-between w-full items-center p-2 bg-gray-800 fixed top-0 z-10">
          <a href="#" className="mr-3" />
          <ul className="flex text-s text-gray-400">
            <li className="mr-6">
              <a className="hover:text-gray-50" href="#">
                Roadmap
              </a>
            </li>
            <li className="mr-6">
              <a className="hover:text-gray-50" href="#">
                Team
              </a>
            </li>
            <li className="mr-6">
              <a
                className="hover:text-gray-50"
                href="https://twitter.com/startabuild"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* this is the hero section*/}
      <div id="marketinghero" className="text-left p-8 mt-14">
        <div className="mb-10">
          <h1 className="text-gray-900 text-4xl md:text-6xl font-bold w-full">
            Edit your Business Logic and Connect your Favorite 3rd Parties
          </h1>
        </div>
        <h2 className="text-xl md:text-2xl text-gray-800">
          <b>Start</b> is a WYSIWYG editor for product teams who want to
          experiment faster.
        </h2>
      </div>

      {/* email signup*/}

      <div className="flex flex-col items-center">
        <div className="text-gray-900 mb-10 p-10 max-w-3xl w-3/4 shadow-lg">
          <p className="text-xl font-bold mb-2">Join the Waiting list</p>
          <p>Sign up to be one of the first using Start.</p>
          <form className="mt-8 w-full flex">
            <input
              className="border rounded-tl rounded-bl border-gray-100 w-full px
                -4 py-2 text-gray-900"
              placeholder="Your Email Here"
              type="email"
              required
            />
            <button
              type="submit"
              className="bg-start-green-dark text-gray-900 px-4 py-2 font-medium
                sm:text-lg rounded-tr rounded-br"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/*footer section*/}
      <footer>
        <div className="w-full bg-gray-900">
          <div className="flex flex-col p-2 leading-8 text-gray-400">
            <ul>
              <li>
                <a href="#">Roadmap</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="https://twitter.com/startabuild">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
