const Qualifications = () => {
    return (
        <div name="qualifications" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-20">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">Qualifications</h2>
                </div>

                {/* School Qualification */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-4">High School</h3>
                    <p className="text-xl mb-4">
                        I completed my high school education with a focus on mathematics and science. It was during this time that I discovered my passion for problem-solving and logical thinking, sparking my interest in pursuing a career in technology.
                    </p>
                </div>
                {/* College Qualification */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-4">College</h3>
                    <p className="text-xl mb-4">
                        My college journey was a pivotal period of academic and personal growth. I pursued Computer Engineering at Chandpur polytechnic institute, where I honed my skills in Computer. The dynamic learning environment and exposure to cutting-edge technologies fueled my passion for technology and innovation.
                    </p>

                </div>

                {/* University Graduation */}
                <div className="pb-8">
                    <h3 className="text-2xl font-bold mb-4">University Graduation</h3>
                    <p className="text-xl mb-4">
                        I graduated from Bangladesh university of business and technology with a degree in Computer Engineering in cse. During my university years, I delved deep into web development, expanding my knowledge of frontend and backend technologies. This journey equipped me with the skills needed to create robust and innovative web solutions.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Qualifications;
