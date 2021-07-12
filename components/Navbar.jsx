import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => (
  <nav className="flex justify-center w-full sticky top-0 z-50 border-b border-gray-100 bg-white">
    <div className="flex max-w-screen-md w-full px-3 py-2">
      <ul className="flex w-full">
        <li className="navlink px-1">
          <Link href="/">
            <a className={useRouter().pathname == "/" ? "nava" : "navaactive"}>
              Home
            </a>
          </Link>
        </li>
        <li className="navlink px-1">
          <Link href="/playground">
            <a
              className={
                useRouter().pathname == "/playground" ? "nava" : "navaactive"
              }
            >
              Playground
            </a>
          </Link>
        </li>
        <li className="navlink px-1">
          <Link href="/about">
            <a
              className={
                useRouter().pathname == "/about" ? "nava" : "navaactive"
              }
            >
              About
            </a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
export default Navbar;
