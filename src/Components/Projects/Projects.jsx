import autos from "../../../assets/Projects/autos.jpg";
import unistayhub from "../../../assets/Projects/unistayhub.jpg";
import jobswift from "../../../assets/Projects/jobswift.jpg";
import { TbLivePhoto } from "react-icons/tb";
import { FaRegFileCode } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      photoRef: autos,
      codeLink: 'https://github.com/rakiburrahman307/Assignment-10',
      liveLink: 'https://6533dbc842df062c581574d2--cool-gecko-ec8121.netlify.app/',
    },
    {
      id: 2,
      photoRef: unistayhub,
      codeLink: 'https://github.com/rakiburrahman307/Assignment-12',
      liveLink: 'https://relaxed-puffpuff-31caad.netlify.app/',
    },
    {
      id: 3,
      photoRef: jobswift,
      codeLink: 'https://github.com/rakiburrahman307/Assignment-11',
      liveLink: 'https://curious-starburst-d1ee83.netlify.app/',
    },
  ];

  return (
    <div name="projects" className="pt-20 bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</h2>
          <p className="py-6 text-xl">Check out some of my projects</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {projects.map(({ id, photoRef, codeLink, liveLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={photoRef} alt="" className="rounded-md duration-200 hover:scale-105 w-full" />
              <div className="flex items-center justify-center mt-4">
                <a
                  className="group duration-200 hover:scale-105 hover:font-bold"
                  href={liveLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="flex justify-evenly items-center gap-2 w-1/2 px-6 py-3 m-2">
                    <span>
                      <TbLivePhoto className="text-red-400 group-hover:text-red-600" />
                    </span>
                    Live
                  </button>
                </a>
                <a
                  className="group duration-200 hover:scale-105 hover:font-bold"
                  href={codeLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="flex justify-evenly items-center gap-2 w-1/2 px-6 py-3 m-2">
                    <span>
                      <FaRegFileCode className="text-green-400 group-hover:text-green-600" />
                    </span>
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
