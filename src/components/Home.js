import rajatImage from "../assets/images/RajatRathore.png";
import {AiOutlineArrowRight} from "react-icons/ai"
import Resume from "../assets/resume/Resume.pdf"

export default function Home() {
  return (
    <div
      name="Home"
      className="pt-24 h-screen w-full bg-gradient-to-b from-black to-gray-800 py-8"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white ">I'm a Full Stack Web Developer</h2>
          <p className="text-gray-500 py-2">
          I am a self-taught programmer with a passion for solving complex problems. I have a strong understanding of computer science fundamentals and software developement.
          I am also a highly motivated and results-oriented individual who is always looking for new challenges.
          If you are looking for a programmer who can think outside the box and come up with creative solutions to your problems, then I am the person for you. I am confident that I can make a significant contribution to your team and help you achieve your goals
          </p>
          <button className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"><a href={Resume} download>Resume</a>
          <span className="group-hover:rotate-90 duration-300 ml-1">
          <AiOutlineArrowRight/>
            </span>
            </button>
        </div>
        <div>
          <img
            src={rajatImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          ></img>
        </div>
      </div>
    </div>
  );
}
