import rajatImage from "../assets/images/RajatRathore.png";
import {AiOutlineArrowRight} from "react-icons/ai"

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
            Deserunt amet mollit amet aute consequat qui anim velit anim do anim
            ad exercitation magna. Quis esse proident Lorem aliquip
            reprehenderit ad dolor labore laboris reprehenderit veniam. Eu minim
            eu laborum in sint quis labore ea. Irure aliqua ea cillum aliqua et
            et nostrud non dolore pariatur id aliqua laborum. Ea anim ullamco
            exercitation nostrud magna tempor deserunt ea in est laborum.
          </p>
          <button className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">Resume
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
