import graphVis from "../assets/projects/graph-vis.png";
import codeEditor from "../assets/projects/code-editor.png";
import cnn_classify from "../assets/projects/cnn_classify.png"
import florida_verginica from "../assets/projects/Florida_verginica_metric.png"
 
export default function Projects() {
  const projects = [
    {
      id: 1,
      src: graphVis,
      github: "https://github.com/RajatRathore123-github/Graph-Visualizer",
      demo: "https://rajatrathore123-github.github.io/Graph-Visualizer/",
      about: "Graph Visualizer"
    },
    {
      id: 2,
      src: codeEditor,
      github: "https://github.com/RajatRathore123-github/Editor-Studio",
      demo: "https://editor-studio-server.onrender.com",
      about: "Realtime Code Editor"
    },
    {
      id: 3,
      src: cnn_classify,
      github: "https://github.com/RajatRathore123-github/Chest_Cancer_Classification",
      about: "Chest Cancer Classifier"
    },
    {
      id: 4,
      src: florida_verginica,
      github: "https://github.com/RajatRathore123-github/Monitoring-AI-Models-for-Bias-and-Fairness-with-Segmentation",
      about: "Monitoring AI Models"
    },
  ];

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, github, demo, about }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt="Project"
                  className="rounded-md duration-200 hover:scale-105"
                />

                <div className="flex items-center justify-center">
                  <p>{about}</p>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href={demo} target="_blank">Demo</a>
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href={github} target="_blank">Code</a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
