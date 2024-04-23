const GameCard = (props) => {
  return (
    <div
    className="py-8 px-6 w-80 max-w-md bg-purple-400 bg-opacity-30 rounded-lg shadow-purpleshade backdrop-blur-sm backdrop-filter cursor-pointer "
    onClick={props.onClick}>
    <h1 className="text-2xl font-kodemono text-center text-yellow-400 mb-5">{props.name}</h1>
    <p className="text-lg text-center text-white mb-8">{props.detail}</p>
  </div>
  )
}

export default GameCard