import { useContext, useEffect, useState } from "react";

import { BiSearch } from "react-icons/bi";
import Swal from "sweetalert2";
import AuthContext from "../provider/AuthContext";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import Loader from "../components/Loader";

const MyVisaApplications = () => {
  const { user } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);

    fetch(`https://visa-navigatore-server.vercel.app/visa-applications/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setApplications(data);
        setFilteredApplications(data);
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error(
          "Error fetching applications: Failed to fetch applications",
          err
        );
        setIsLoading(false);
      });
  }, [user]);

  // Search functionality
  const handleSearch = (e) => {
    const filtered = applications.filter((app) =>
      app?.Country_name?.toLowerCase().includes(e.toLowerCase())
    );
    setFilteredApplications(filtered);
  };

  // Cancel application handler
  const handleCancelApplication = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://visa-navigatore-server.vercel.app/visa-applications/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data?.deletedCount > 0) {
              Swal.fire(
                " Cancelled",
                `Application for ${
                  applications.find((app) => app._id === id)?.Country_name
                } visa cancelled`,
                "success"
              );
              const updatedApplications = applications.filter(
                (app) => app._id !== id
              );
              setApplications(updatedApplications);
              setFilteredApplications(updatedApplications);
            }
          })
          .catch((err) => {
            Swal.fire(
              "Error Cancelling Visa Application",
              err?.message,
              "error"
            );
          });
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>My Visa Applications | Visa Navigator</title>
        <meta
          name="description"
          content="My Visa App is a visa management application where users can apply for and manage their visas."
        />
        <meta
          property="og:title"
          content="My Visa Applications | Visa Navigator"
        />
        <meta
          property="og:description"
          content="My Visa App is a visa management application where users can apply for and manage their visas."
        />
      </Helmet>
      <div className="mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          My Visa Applications
        </h1>

        {/* Search Section */}
        <div className="flex mb-6">
          <div className="join w-full">
            <input
              type="text"
              placeholder="Search by country..."
              className="input input-bordered focus:border-none focus:outline-2 join-item w-full"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                handleSearch(e.target.value);
              }}
            />
            <button
              className="btn btn-primary join-item"
              onClick={() => handleSearch(searchTerm)}
            >
              <BiSearch size={20} />
            </button>
          </div>
        </div>

        {/* Conditional Rendering for Loader and Content */}
        {isLoading ? (
          <Loader />
        ) : filteredApplications.length === 0 ? (
          <div className="text-center text-gray-500">
            No visa applications found.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApplications.map((application) => (
              <div
                key={application._id}
                className="card bg-base-100 dark:bg-neutral border dark:border-neutral shadow-xl hover:shadow-2xl transition-shadow"
              >
                <figure className="px-8 py-8 bg-blue-50 dark:bg-base-100">
                  <img
                    src={application?.Country_image}
                    alt={application.country}
                    className="rounded-xl h-40 object-cover"
                  />
                </figure>
                <div className="card-body p-4 sm:p-8">
                  <h2 className="card-title">
                    {application?.Country_name} - {application?.Visa_type}
                  </h2>
                  <div className="space-y-2 flex-grow">
                    <p>
                      <strong>Processing Time:</strong>{" "}
                      {application?.Processing_time}
                    </p>
                    <p>
                      <strong>Fee:</strong> ${application?.Fee}
                    </p>
                    <p>
                      <strong>Validity:</strong> {application?.Validity}
                    </p>
                    <p>
                      <strong>Application Method:</strong>{" "}
                      {application?.Application_method}
                    </p>
                    <p>
                      <strong>Applied Date:</strong> {application?.Apply_date}
                    </p>
                    <p>
                      <strong>Applicant:</strong>{" "}
                      {` ${application?.Applicant_first_name} ${application?.Applicant_last_name}`}
                    </p>
                    <p className="">
                      <strong>Email:</strong>{" "}
                      <span className="text-xs">
                        {application?.Applicant_email}
                      </span>
                    </p>
                  </div>
                  <div className="card-actions justify-end mt-4">
                    <button
                      className="btn btn-error btn-sm"
                      onClick={() => handleCancelApplication(application._id)}
                    >
                      Cancel Application
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MyVisaApplications;
