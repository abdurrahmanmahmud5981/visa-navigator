import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AuthContext from "../provider/AuthContext";
import ApplicationModal from "../components/ApplicationModal";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const SingleDetails = () => {
  const { user } = useContext(AuthContext);
  const visa = useLoaderData();

  const {
    Country_image,
    Country_name,
    Visa_type,
    Processing_time,
    Required_documents,
    Description,
    Age_restriction,
    Fee,
    Validity,
    Application_method,
  } = visa || {};
  const [applicationData, setApplicationData] = useState({
    Country_name: Country_name,
    Country_image: Country_image,
    Visa_type: Visa_type,
    Processing_time: Processing_time,
    Fee: Fee,
    Validity: Validity,
    Application_method: Application_method,
    Applicant_email: user?.email,
    Applicant_first_name: "",
    Applicant_last_name: "",
    Apply_date: new Date().toLocaleDateString("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }),
  });
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationData({
      ...applicationData,
      [name]: value,
    });
  };

  const handleApplyVisa = (e) => {
    e.preventDefault();
    if (
      !applicationData.Applicant_first_name ||
      !applicationData.Applicant_last_name
    ) {
      toast.error("Please fill in both first name and last name");
      return;
    }
    fetch("https://visa-navigatore-server.vercel.app/visa-application", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(applicationData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire(
            "Submited",
            "Application submitted successfully",
            "success"
          );
          setIsApplyModalOpen(false);
          setApplicationData({
            ...applicationData,
            Applicant_first_name: "",
            Applicant_last_name: "",
          });
        }
      })
      .catch((err) => {
        Swal.fire(
          "Oops!",
          "An error occurred while submitting the application",
          "error"
        );
      });
  };

  const handleCloseModal = () => {
    setApplicationData({
      ...applicationData,
      Applicant_first_name: "",
      Applicant_last_name: "",
    });
    setIsApplyModalOpen(false);
  };
  return (
    <div className=" mx-auto py-6 sm:p-4 ">
      <h2 className="sm:text-4xl font-bold text-center my-5 card-title justify-center text-3xl">
        Visa Details
      </h2>

      <div className="card  mx-auto border max-w-screen-sm relative">
        <figure className="!justify-start sm:absolute right-3  sm:right-2  sm:w-32 sm:m-7 border-b-8 sm:border-none ">
          <img
            src={Country_image}
            alt={`${Country_name} flag`}
            className=" w-full h-auto shadow sm:rounded-xl sm:border-4 overflow-hidden"
          />
        </figure>
        <div className="card-body px-3 pt-4
         sm:px-7 sm:pt-8">
          <h3 className="sm:text-2xl font-bold card-title">
            {Country_name} - {Visa_type}
          </h3>
          <div>
            <div className=" space-y-2 sm:space-y-4">
              <div>
                <h3 className="font-semibold">Visa Type</h3>
                <p>{Visa_type}</p>
              </div>
              <div>
                <h3 className="font-semibold">Processing Time</h3>
                <p>{Processing_time}</p>
              </div>
              <div>
                <h3 className="font-semibold">Required Documents</h3>
                <ul className="list-disc list-inside">
                  {Required_documents.map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Description</h3>
                <p>{Description}</p>
              </div>
              <div>
                <h3 className="font-semibold">Age Restriction</h3>
                <p>{Age_restriction}</p>
              </div>
              <div>
                <h3 className="font-semibold">Fee</h3>
                <p>${Fee}</p>
              </div>
              <div>
                <h3 className="font-semibold">Validity</h3>
                <p>{Validity}</p>
              </div>
              <div>
                <h3 className="font-semibold">Application Method</h3>
                <p>{Application_method}</p>
              </div>

              {/* Apply for Visa Button */}
              <div>
                <button
                  onClick={() => setIsApplyModalOpen(true)}
                  className="w-full btn btn-neutral"
                >
                  Apply for Visa
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
      {isApplyModalOpen && (
        <ApplicationModal
          applicationData={applicationData}
          handleInputChange={handleInputChange}
          handleCloseModal={handleCloseModal}
          handleApplyVisa={handleApplyVisa}
        />
      )}
    </div>
  );
};

export default SingleDetails;
