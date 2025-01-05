import { useLoaderData } from "react-router-dom";
import VisaCard from "../components/VisaCard";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { FiFilter } from "react-icons/fi";
import Loader from "../components/Loader";

const AllVisas = () => {
  const initialVisasData = useLoaderData();
  const [loader, setLoader] = useState(true);
  const [visas, setVisas] = useState([]);
  const [filteredVisas, setFilteredVisas] = useState([]);
  const [selectedVisaType, setSelectedVisaType] = useState("");
  const visaTypes = [
    "Tourist Visa",
    "Student Visa",
    "Official Visa",
    "Business Visa",
    "Work Visa",
  ];

  useEffect(() => {
    if (initialVisasData) {
      setVisas(initialVisasData);
      setFilteredVisas(initialVisasData);
      setLoader(false);
    }
  }, [initialVisasData]);

  // Filter visas based on selected type
  const handleFilterChange = (type) => {
    setSelectedVisaType(type);

    // If no type selected
    if (!type) {
      setFilteredVisas(visas);
      return;
    }

    const filtered = visas.filter(
      (visa) => visa.Visa_type.toLowerCase() === type.toLowerCase()
    );
    setFilteredVisas(filtered);
  };

  return (
    <div>
      <Helmet>
        <title>All Visas - Visa Navigator</title>
        <meta
          name="description"
          content="Discover all the best visas across the globe. Apply for visas easily."
        />
        <meta property="og:title" content="All Visas - Visa Navigator" />
        <meta
          property="og:description"
          content="Discover all the best visas across the globe. Apply for visas easily."
        />
      </Helmet>
      <h2 className="text-3xl text-center font-bold py-7">All Visas</h2>

      <div className="mb-6 flex ">
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 flex items-center gap-2"
          >
            <FiFilter size={20} />
            {selectedVisaType ? selectedVisaType : "Filter Visa Types"}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* Option to clear filter */}
            <li key="clear">
              <a onClick={() => handleFilterChange("")}>All Visa Types</a>
            </li>

            {/* Dynamically generate visa type options */}
            {visaTypes.map((type) => (
              <li key={type}>
                <a onClick={() => handleFilterChange(type)}>{type}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="">
        {loader ? (
          <Loader />
        ) : filteredVisas?.length === 0 ? (
          <div className="text-center text-gray-500 text-3xl font-extrabold min-h-[300px] w-full grid place-items-center border">
            No visas found.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVisas?.map((visa) => (
              <VisaCard key={visa._id} visa={visa} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllVisas;
