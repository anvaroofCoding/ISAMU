import img from "../../public/5.png";
import img1 from "../../public/7.png";

export default function Home() {
  return (
    <div className="p-5 h-screen">
      <div className="w-full h-full bg-white/40 border rounded-2xl dark:bg-black flex">
        <div className="w-1/6  roboto flex justify-center items-center h-full">
          <h1 className="transform -rotate-90 text-8xl text-center homemade flex w-full dark:text-white text-black">
            Isamu
          </h1>
        </div>
        <div className="w-5/6 border relative flex justify-center items-center">
          <img src={img1} alt="" className="absolute right-90 bottom-30 w-30" />
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
