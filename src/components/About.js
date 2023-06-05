export default function About() {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white
        "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
          <p className="text-xl mt-20">
            Hi ✌, this is Rajat Rathore pursuing my Bachelor's Of Technology in Mechanical Engineering from Harcourt Butler Technical University,Kanpur.
            I am a self taught Programmer and an enthusiastic Full Stack Web Developer. 
          </p>
          <br />
          <p className="text-xl">
            I love to collaborate on opensource projects and solve complex problems. I am a continuos learner and always try to learn new things.
            Beyond this I am a music lover and try to explore the unexplored.
          </p>
        </div>
      </div>
    </div>
  );
}
