import Button from "@/components/Home/Button";
import Link from "next/link";
const Home = () => {
  return (
    <div className="flex flex-col text-white md:flex-row h-screen">
      <div className="flex-1 m-5 mt-36  md:m-16">
        <h1 className="text-7xl font-light md:text-8xl tracking-tight">
          Master the <br />
          <span>Keyboard with Lightning</span> Speed
        </h1>
        <div className="pt-72">
          <Link
            href="#"
            className="m-4 flex text-4xl font-thin underline underline-offset-8 tracking-wider"
          >
            Welcome to Shiftype
          </Link>
        </div>
      </div>
      <div className="flex-2 p-10 mr-12">
        <Button text="Start Typing" />
      </div>
      <div className="opacity-20">
        <div>E</div>
        <div>S</div>
        <div>C</div>
        <div>A</div>
        <div>P</div>
        <div>E</div>
        <div>F</div>
        <div>R</div>
        <div>O</div>
        <div>M</div>
        <div>T</div>
        <div>H</div>
        <div>E</div>
        <div>W</div>
        <div>O</div>
        <div>R</div>
        <div>L</div>
        <div>D</div>
        <div>O</div>
        <div>F</div>
        <div>D</div>
        <div>I</div>
        <div>S</div>
        <div>T</div>
        <div>R</div>
        <div>A</div>
        <div>C</div>
        <div>T</div>
        <div>I</div>
        <div>O</div>
        <div>N</div>
      </div>
    </div>
  );
};

export default Home;
