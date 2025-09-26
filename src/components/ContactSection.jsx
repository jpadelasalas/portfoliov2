import { motion } from "framer-motion";
import { socialLinks } from "../data/PortfolioData";
import { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const ContactSection = () => {
  // Email form
  const form = useRef();

  // Function to send email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        form.current,
        "your_public_key"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message was sent successfully.",
          });
        },
        (error) => {
          console.error("Error:", error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to send your message. Please try again later.",
          });
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 25,
        damping: 15,
        delay: 0.2,
        duration: 0.5,
      }}
      className="px-2 py-1 my-2 flex flex-col md:flex-row space-y-5 max-h-[60vh]"
    >
      {/* Left Section */}
      <div className="w-full flex flex-col space-y-1">
        <h2 className="font-bold text-xl">Get in Touch: </h2>
        {/* Social icons - Desktop */}
        <div className="flex items-center space-x-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + (index + 1) * 0.2, duration: 0.8 }}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              <link.icon className="w-5 h-5" />
            </motion.a>
          ))}

          {/* CV */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.6,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-blue-700 font-bold hover:from-blue-700 hover:to-black hover:text-white transition-all duration-500"
          >
            <a href="/#" download>
              Download CV
            </a>
          </motion.button>
        </div>
      </div>

      {/* Right Section */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col space-y-4 p-4 bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-lg shadow-gray-900/70 shadow-md hover:shadow-lg hover:shadow-gray-600/40 transition w-full h-auto "
      >
        <h2 className="font-bold text-lg">Send a message</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-2 rounded bg-gray-700 text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-2 rounded bg-gray-700 text-white"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="p-2 rounded bg-gray-700 text-white"
        />
        <button
          type="submit"
          className="rounded px-4 py-2 bg-gradient-to-r from-gray-400 to-gray-100 text-blue-700 font-bold hover:from-blue-700 hover:to-black hover:text-white transition-all duration-500"
        >
          Send
        </button>
      </form>
    </motion.section>
  );
};

export default ContactSection;
