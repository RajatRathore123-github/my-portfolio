import { Fabars, FaTimes } from "react-icons/fa";

export default function Navbar() {
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
      link: "Contact",
    },
  ];
  return (
    <div className="px-4 flex justify-between items-center w-full h-20 text-white bg-black fixed">
      <div>
        <h1 className="text-4xl ml-2">Rajat</h1>
      </div>
      <ul className="flex">
        {links.map(({ id, link }) => {
          return (<li
            key={id}
            className="px-3 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200 "
          >
            {link}
          </li>);
        })}
      </ul>
    </div>
  );
}
