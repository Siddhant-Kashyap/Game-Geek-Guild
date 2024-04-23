import Card from "./Card";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../utils/bg.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();
    const handleSoloClick=()=>{
        navigate("/solo-section")
    }
  return (
    <div className="flex flex-col justify-between min-h-screen bg-black -z-20">
      <Navbar />
      <div></div>
      <div className="flex flex-col justify-center items-center flex-1">
        <div
          className="gradient"
          style={{
            "--size": "250px",
            "--speed": "50s",
            "--easing": "cubic-bezier(0.8, 0.2, 0.2, 0.8)",
            width: "var(--size)",
            height: "var(--size)",
            filter: "blur(calc(var(--size) / 5))",
            backgroundImage:
              "linear-gradient(hsl(158, 82%, 57%, 85%), hsl(252, 82%, 57%))",
            animation: "rotate var(--speed) var(--easing) alternate infinite",
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            "@media (min-width: 720px)": {
              "--size": "500px",
            },
          }}
        ></div>
        <div className="flex">
          <div
            onClick={handleSoloClick}
            className="relative text-orange-400 cursor-pointer w-80  -mt-36"
            style={{ zIndex: "100" }}
          >
            <Card play={"Play Solo"}  />
          </div>
          <div
            onClick={() => {
              console.log("Hello");
            }}
            className="relative text-orange-400 cursor-pointer w-80 -mt-36 ml-11"
            style={{ zIndex: "100" }}
          >
            <Card play={"Play Duo"}/>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
