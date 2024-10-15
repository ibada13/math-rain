
export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-around items-center">
      <div className="bg-red-400 text-6xl">hello there</div>
      <div className="bg-amber-400 flex justify-center items-center">
        <button className="text-4xl uppercase"><a href="/game">start</a></button>
      </div>
    </div>
  );
}
