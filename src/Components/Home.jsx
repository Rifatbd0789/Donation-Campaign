const Home = () => {
  return (
    <div
      className="hero bg-no-repeat w-full h-[600px] bg-cover"
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
  );
};

export default Home;
