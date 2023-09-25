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
          backgroundImage:
            "url(https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR3m0yTFd50ROlPOwOU0nP3BmP0Nc8OK4Ep-1S2aZLD3DiEpJg4MI0du990)",
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
              className="input w-full max-w-xs text-kala"
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
