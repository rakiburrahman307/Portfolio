import html from "../../../assets/icons/html.png";
import css from "../../../assets/icons/css.png";
import js from "../../../assets/icons/js.png";
import teaildwin from "../../../assets/icons/taildwin.png";
import reactJs from "../../../assets/icons/react.png";
import nodeJs from "../../../assets/icons/nodeJs.png";
import express from "../../../assets/icons/express.png";
import mongoDb from "../../../assets/icons/mongoDb.png";
import gitHub from "../../../assets/icons/github.png";

const Experiences = () => {
  const technologies = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: js,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: reactJs,
      title: 'React',
      style: 'shadow-blue-500',
    },
    {
      id: 5,
      src: teaildwin,
      title: 'TailWind CSS',
      style: 'shadow-sky-400',
    },
    {
      id: 6,
      src: nodeJs,
      title: 'Node Js',
      style: 'shadow-green-600',
    },
    {
      id: 7,
      src: express,
      title: 'Express',
      style: 'shadow-white',
    },
    {
      id: 8,
      src: mongoDb,
      title: 'Mongo DB',
      style: 'shadow-green-500',
    },
    {
      id: 9,
      src: gitHub,
      title: 'GitHub',
      style: 'shadow-white',
    },
  ];

  return (
    <div name="experience" className=" pt-20 pb-20 bg-gradient-to-b from-gray-800 to-black w-full min-h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">Experiences</h2>
          <p className="py-6 text-xl">These are the technologies I have worked with</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-4 md:px-0">
          {technologies.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt={title} className="w-20 mx-auto mb-4" />
              <p className="mt-2">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
