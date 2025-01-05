/* eslint-disable react/prop-types */
import { BiEdit } from "react-icons/bi";
import { BsTrash2 } from "react-icons/bs";

const MyVisaCard = ({ visa, openUpdateModal, onDelete }) => {
  const {
    Country_image,
    Country_name,
    Visa_type,
    Processing_time,
    Fee,
    Application_method,
    Validity,
  } = visa;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl row-span-full h-full dark:bg-neutral border dark:border-neutral">
        <figure className="px-10 py-5 bg-blue-50 dark:bg-base-100">
          <img
            src={Country_image}
            alt={`${Country_name} flag`}
            className="rounded-xl h-32  object-cover"
          />
        </figure>
        <div className="card-body items-center flex flex-col  text-center flex-grow pt-2 ">
          <h2 className="card-title">{Country_name}</h2>
          <div className=" flex flex-col flex-grow text-left w-full space-y-2">
          <p>
              <strong>Visa Type:</strong>   {Visa_type}
            </p>
            <p>
              <strong>Processing Time:</strong> {Processing_time}
            </p>
            <p>
              <strong>Fee:</strong> {Fee}
            </p>
            <p>
              <strong>Validity:</strong> {Validity}
            </p>
            <p>
              <strong>Application Method:</strong> {Application_method}
            </p>
          </div>
          <div className="card-actions justify-between w-full mt-4">
            <button
              className="btn btn-outline btn-primary btn-sm"
              onClick={() => openUpdateModal(visa)}
            >
              <BiEdit className="mr-2 h-4 w-4" /> Update
            </button>
            <button
              className="btn btn-outline btn-error btn-sm"
              onClick={() => onDelete(visa?._id)}
            >
              <BsTrash2 className="mr-2 h-4 w-4" /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyVisaCard;
