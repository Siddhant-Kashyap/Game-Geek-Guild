import { useNavigate } from "react-router-dom";
import GameCard from "./GameCard";
const SoloGamesPage = () => {
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate('/tetris')
    }
    
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <div className="font-honk text-6xl  inset-0  flex justify-center ">
          Gamer-Geek Guild
        </div>

        <div className="flex justify-evenly">
          <div className="grid mt-40 grid-cols-3 gap-4 ">
            <GameCard name={"Tetris"} onClick={handleClick} />
            <GameCard name={"Racing"} />
            <GameCard name={"Tic-Tac-Toe"} />
            <GameCard name={"Horror"} />
            <GameCard name={"Quiz"} />
            <GameCard name={"Coding"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SoloGamesPage;
