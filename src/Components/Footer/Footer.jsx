import { FaGithub, FaLinkedin } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-800 to-black text-white p-8 text-center">
      <div className="flex flex-col items-center">
        <p className="text-lg font-semibold">&copy; 2023 Rakibur Rahman. All rights reserved.</p>
        <p className="mt-2 text-sm">Crafted with <span role="img" aria-label="heart">❤️</span> using React</p>
        <div className="flex gap-4 mt-4">
          <a href="https://www.linkedin.com/in/rakibur-rahman-14b33a2a4/" target="_blank" rel="noopener noreferrer" className="text-white flex items-center hover:underline">
          <FaLinkedin className="mr-1" /> 
            LinkedIn
          </a>
          <a href="https://github.com/rakiburrahman307" target="_blank" rel="noopener noreferrer" className="text-white hover:underline flex items-center">
            <FaGithub className="mr-1" /> 
            GitHub
          </a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
