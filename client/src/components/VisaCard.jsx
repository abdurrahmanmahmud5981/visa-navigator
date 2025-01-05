/* eslint-disable react/prop-types */
import { Bounce, Fade, Flip, Hinge } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const VisaCard = ({ visa }) => {
  const {
    _id,
    Country_image,
    Country_name,
    Visa_type,
    Processing_time,
    Fee,
    Validity,
    Application_method,
  } = visa;
  return (
    <>
      <div className=" card relative bg-white dark:bg-base-100 shadow-xl border dark:textarea-bordered dark:text-base-content ">
        <figure className="m-4 rounded-xl border dark:border-neutral">
          <img
            src={Country_image}
            alt={Country_name}
            className=" w-full h-48 object-cover"
          />
        </figure>
        <div className="card-body justify-between gap-0 px-0 pt-0 pb-4">
          <h2 className="card-title sm:text-2xl px-4 py-2 ">{Country_name}</h2>
          <div className="flex flex-col flex-grow  px-4">
            <p className=" ">
              <strong>Visa Type : </strong> {Visa_type}
            </p>
            <p className=" ">
              <strong>Processing Time :</strong> {Processing_time}
            </p>
            <p className=" ">
              <strong>Fee :</strong> ${Fee}
            </p>
            <p className=" ">
              <strong>Validity :</strong> {Validity}
            </p>
            <p className=" ">
              <strong>Application Method :</strong> {Application_method}
            </p>
          </div>
          <div className="card-actions px-4 ">
            <Link to={`/single-details/${_id}`}>
              <button className="btn btn-neutral dark:btn-outline dark:hover:text-white dark:hover:bg-neutral mt-3">
                {" "}
                See Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisaCard;
