const Donated = (data) => {
  const { Price, Title, Link2, Card_bg, Text_bg, Category_bg, Category } =
    data.data;
  //   console.log(Price);
  return (
    <div>
      <div
        className="card md:card-side bg-base-100 shadow-xl h-full lg:h-[200px]"
        style={{ backgroundColor: Card_bg }}
      >
        <figure>
          <img className="h-fit" src={Link2} alt="No internet" />
        </figure>
        <div className="card-body text-sm">
          <h2
            className="card-title w-fit"
            style={{ backgroundColor: Category_bg, color: Text_bg }}
          >
            {Category}
          </h2>
          <h2 className="card-title ">{Title}</h2>
          <p style={{ color: Text_bg }}>$ {Price}</p>
          <div className="card-actions ">
            <button
              className="btn text-sada lg:text-sada btn-sm md:btn-sm lg:btn "
              style={{ backgroundColor: Text_bg }}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donated;
