import { useState } from "react";
import { BiListUl, BiXCircle } from "react-icons/bi";
import { Link } from "react-scroll";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Experience",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];
  return (
    <div className="px-4 flex justify-between items-center w-full h-20 text-white bg-black fixed">
      <div>
        <h1 className="text-4xl ml-2">My Portfolio</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className="px-3 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200 "
            >
              <Link activeClass="active" to={link} smooth={true} duration={500}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => {
          setNav(!nav);
        }}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <BiXCircle size={30} /> : <BiListUl size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  activeClass="active"
                  to={link}
                  smooth={true}
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
