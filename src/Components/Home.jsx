import { useLoaderData } from "react-router-dom";
import Showalldata from "./Showalldata";

const Home = () => {
  const datas = useLoaderData();
  return (
    <div>
      {/* banner section */}
      <div
        className="hero bg-no-repeat w-full h-[500px] bg-cover"
        style={{
          backgroundImage: "url(https://i.ibb.co/N2fV3DG/Rectangle-4288.png)",
        }}
      >
        <div className="hero-overlay bg-sada bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold text-kala">
              I Grow By Helping People In Need
            </h1>
            <input
              type="text"
              placeholder="Search here"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn bg-lal text-sada">Search</button>
          </div>
        </div>
      </div>
      {/* Data section */}
      <div className="grid grid-cols-4 gap-4 mx-10 mt-5">
        {datas.map((data, idx) => (
          <Showalldata key={idx} data={data}></Showalldata>
        ))}
      </div>
    </div>
  );
};

export default Home;
