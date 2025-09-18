import { TypeAnimation } from "react-type-animation";

const Profile = () => {
  return (
    <section className="flex flex-col md:flex-row space-x-10 mb-5">
      <img
        src={"./JP.jpg"}
        alt="profile"
        className="rounded-full w-25 h-25 md:w-45 md:h-45"
      />
      <div className="flex flex-col mt-3 space-y-2">
        <h3 className="text-3xl font-bold font-mono text-wrap">
          John Patrick A. de las Alas
        </h3>
        <TypeAnimation
          sequence={[
            "Full Stack Web Developer",
            1000,
            "Building Web Solutions With Laravel & React",
            1000,
            "Developer of Fast, Modern, and Scalable Apps",
            1000,
            "Passionate About Crafting Digital Experiences",
            1000,
          ]}
          className="text-lg md:text-md font-extrabold bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] mb-10"
          repeat={Infinity}
        />
        <div className="flex space-x-3 text-xs">
          <span className="px-2 py-1 bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xs hover:shadow-md hover:shadow-gray-500 flex flex-col text-center">
            <span className="font-bold text-lg">3+</span>
            <span className="font-mono">Years experience</span>
          </span>
          <span className="px-2 py-1 bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xs hover:shadow-md hover:shadow-gray-500 flex flex-col text-center">
            <span className="font-bold text-lg">10+</span>
            <span className="font-mono">Projects Completed</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Profile;
