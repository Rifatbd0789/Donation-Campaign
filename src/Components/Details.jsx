import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const datas = useLoaderData();
  const idobj = useParams();
  const idweb = parseInt(idobj.id);
  const clicked = datas.find((data) => data.id === idweb);
  const { Title, Link, Price, Description } = clicked;
  console.log(clicked);
  return (
    <div>
      <div className="mx-auto my-5 w-4/6 ">
        <img src={Link} alt="" />
        <div className="bg-[#0B0B0B80] h-[80px] w-4/6 absolute top-[460px]">
          <button className="bg-lal btn border-none ml-10 mt-4 text-sada hover:text-kala">
            Donate $ {Price}
          </button>
        </div>
      </div>
      <div className="mx-auto my-5 w-5/6">
        <p className="font-bold">{Title}</p>
        <p>{Description}</p>
      </div>
    </div>
  );
};

export default Details;
