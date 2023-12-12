
const Contact = () => {
  return (
    <div id="contact" className=" pt-20 py-5 min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</h2>
          <p className="py-6 text-xl">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/6e9cd582-622d-41b0-abb5-abd446147af9" method="POST" className="flex flex-col w-full md:w-1/2">
            <label htmlFor="name" className="pb-2">Your Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter Your Name" className="mb-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />

            <label htmlFor="email" className="pb-2">Your Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter Your Email" className="mb-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />

            <label htmlFor="message" className="pb-2">Your Message:</label>
            <textarea id="message" name="message" rows="10" placeholder="Enter Your Message Here" className="mb-4 bg-transparent p-2 border-2 rounded-md text-white focus:outline-none"></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300">Let&apos;s Talk</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
