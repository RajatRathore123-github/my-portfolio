import {
  AiFillMail,
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

export default function Socials() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <AiFillLinkedin size={30} />
        </>
      ),
      href: "http://linkedin.com/in/rajat-rathore-b66040229/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <AiOutlineGithub size={30} />
        </>
      ),
      href: "http://github.com/RajatRathore123-github",
    },
    {
      id: 3,
      child: (
        <>
          Mail <AiFillMail size={30} />
        </>
      ),
      href: "mailto:rajat12350iam@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Twitter <AiFillTwitterCircle size={30} />
        </>
      ),
      href: "http://twitter.com/rajat12350iam",
      style: "rounded-br-md",
    },
  ];
  return (
    <div className="hidden md:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style }) => {
            return (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-[-10px] hover:rounded-md duration-300" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              rel="noreferrer"
              target="_blank"
            >
              {child}
            </a>
          </li>);
        })}
      </ul>
    </div>
  );
}
