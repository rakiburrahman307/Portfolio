import { Link } from 'react-scroll';
import heroImg from '../../../assets/image/heroImg.jpg';
import { MdArrowRightAlt } from 'react-icons/md';
import { FaDownload } from "react-icons/fa";

const Home = () => {
  return (
    <div name="home" className="min-h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white pt-32">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row h-full px-4 items-center">
        <div className="flex flex-col justify-center h-full md:w-2/4">
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-4 md:mb-2 text-left">Hello I&apos;m a <br />Junior Web Developer</h2>
          <p className="text-gray-500 mb-6 max-w-md">Hey there! I&apos;m Rakibur Rahman, a Junior Web Developer with a passion for turning ideas into reality through code. I love the details and enjoy solving problems in the dynamic world of web development. Let&apos;s create something amazing together!</p>
          <div className='flex items-center gap-3'>
            <Link
              smooth
              duration={500}
              to="projects"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer transition-transform transform hover:scale-105"
            >
              Project
              <span className="group-hover:rotate-90 duration-300">
                <MdArrowRightAlt size={25} />
              </span>
            </Link>

            <a
              href="/19203203037.pdf"
              download='true'
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer transition-transform transform hover:scale-105"
            >
              Resume <FaDownload className="ml-2 duration-300" />
            </a>
          </div>
        </div>
        <div className="w-full md:w-2/5">
          <img src={heroImg} alt="photo" className="rounded-2xl mx-auto md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;