import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";


function Contacts() {
  const [emailData, setEmailData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailData.name || !emailData.subject || !emailData.message) {
      alert("Please fill in all fields.");
      return;
    } else {
      setLoading(true);
      const data = {
        name: emailData.name,
        subject: emailData.subject,
        message: emailData.message,
      };
      
      fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log("email sent successfully", result);
          console.log("email data", data);
          alert("Email sent successfully!");
          setEmailData({ name: "", subject: "", message: "" });
        })
        .catch((err) => {
          console.error("Error sending email:", err);
          alert("failed to send email, please try again later");
          setEmailData({ name: "", subject: "", message: "" });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
     <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
    <div className="flex justify-center items-center min-h-[calc(100vh-4rem)] p-4">
      <div className="text-white bg-purple-800/20 rounded-md border-2 border-purple-600 w-full max-w-6xl min-h-[500px] p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row shadow-xl shadow-purple-900/100">
        <div className="flex flex-col justify-center items-center lg:w-1/2 space-y-4 sm:space-y-6 lg:border-r border-purple-600 lg:pr-6 mb-6 lg:mb-0">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">Contact Me</h1>
          <p className="text-center text-gray-300 px-2 sm:px-4 text-sm sm:text-base">
            Feel free to reach out via the form or my socials below
          </p>

          <div className="flex justify-center space-x-4 sm:space-x-6 text-2xl sm:text-3xl">
            <Link
              to="https://www.instagram.com/micomrtn/"
              className="hover:text-purple-400 transition-colors duration-200"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://github.com/mico-m31"
              className="hover:text-purple-400 transition-colors duration-200"
            >
              <FaGithub />
            </Link>
            <Link
              to="https://www.linkedin.com/in/mico-martin-00225628b/"
              className="hover:text-purple-400 transition-colors duration-200"
            >
              <CiLinkedin />
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 lg:pl-6 flex flex-col justify-center">
          <div className="flex flex-col space-y-4 sm:space-y-6">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={emailData.name}
              onChange={(e) =>
                setEmailData({ ...emailData, name: e.target.value })
              }
              className="p-2 sm:p-3 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-purple-400 transition-colors duration-200 text-sm sm:text-base"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              value={emailData.subject}
              onChange={(e) =>
                setEmailData({ ...emailData, subject: e.target.value })
              }
              className="p-2 sm:p-3 bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-purple-400 transition-colors duration-200 text-sm sm:text-base"
              required
            />
            <textarea
              placeholder="Message"
              name="message"
              value={emailData.message}
              onChange={(e) =>
                setEmailData({ ...emailData, message: e.target.value })
              }
              className="p-2 sm:p-3 bg-transparent border-b-2 border-white text-white focus:outline-none h-20 sm:h-24 focus:border-purple-400 transition-colors duration-200 resize-none text-sm sm:text-base"
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              onClick={handleSubmit}
              className={`p-2 sm:p-3 rounded-md text-white transition duration-300 cursor-pointer text-sm sm:text-base font-medium
                ${
                  loading
                    ? "bg-purple-400 cursor-not-allowed"
                    : "bg-purple-600 hover:bg-purple-500 active:bg-purple-700"
                }`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Email"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
}

export default Contacts;