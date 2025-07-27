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
      e.preventDefault();
      fetch("http://127.0.0.1:8081/api/sendEmail", {
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
          setEmailData({});
          window.location.reload();
        })
        .catch((err) => {
          console.error("Error sending email:", err);
          alert("failed to send email, please try again later");
          setEmailData({});
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
      className="flex justify-center items-center min-h-[calc(100vh-4rem)]"
    >
      <div className="text-white border-white h-[30em] w-[30em] ">
        <div>
          <h1 className="text-4xl flex justify-center font-bold">Contact Me</h1>
          <form>
            <div className="flex flex-col space-y-4 p-4">
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={(e) =>
                  setEmailData({ ...emailData, name: e.target.value })
                }
                className="p-2     bg-transparent border-b-1 border-white text-white focus:outline-none focus:border-purple-600"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                onChange={(e) =>
                  setEmailData({ ...emailData, subject: e.target.value })
                }
                className="p-2     bg-transparent border-b-1 border-white text-white focus:outline-none focus:border-purple-600"
                required
              />
              <textarea
                placeholder="Message"
                name="message"
                onChange={(e) =>
                  setEmailData({ ...emailData, message: e.target.value })
                }
                className="p-2     bg-transparent border-b-1 border-white text-white focus:outline-none h-24 focus:border-purple-600"
                required
              ></textarea>
              <button
                type="submit"
                disabled={loading} 
                className={`p-2 rounded-md text-white transition duration-300 cursor-pointer 
                ${loading
                    ? "bg-purple-400 cusror-not-allowed"
                    : "bg-purple-600 hover:bg-purple-400"
                }`}
                onClick={handleSubmit}
              >
                {loading ? <span className="relative after:content-[''] after:inline-block after:animate-[dots_1.5s_steps(1,end)_infinite] cursor-not-allowed"></span> : "Send Email"}
              </button>
            </div>
          </form>
          <p className="flex justify-center">Or</p>
          <div className="flex justify-center space-x-4 mt-4">
            <div className="text-2xl  hover:text-purple-600">
              <Link to="https://www.instagram.com/micomrtn/">
                {" "}
                <FaInstagram />
              </Link>
            </div>
            <div className="text-2xl  hover:text-purple-600">
              <Link to="https://github.com/mico-m31">
                {" "}
                <FaGithub />
              </Link>
            </div>
            <div className="text-2xl  hover:text-purple-600">
              <Link to="https://www.linkedin.com/in/mico-martin-00225628b/">
                {" "}
                <CiLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contacts;
