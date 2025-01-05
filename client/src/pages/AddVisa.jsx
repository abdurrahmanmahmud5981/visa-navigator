import { useContext, useState } from "react";
import AuthContext from "../provider/AuthContext";

//
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddVisa = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    Country_image: "",
    Country_name: "",
    Visa_type: "",
    Processing_time: "",
    Required_documents: [],
    Description: "",
    Age_restriction: "",
    Fee: "",
    Validity: "",
    Application_method: "",
    Creation_date: new Date().toLocaleDateString("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }),
    User_email: user?.email,
  });

  // Visa types
  const visaTypes = [
    "Tourist Visa",
    "Student Visa",
    "Official Visa",
    "Business Visa",
    "Work Visa",
  ];

  // Required documents
  const documentOptions = [
    "Valid Passport",
    "Visa Application Form",
    "Recent Passport-sized Photograph",
    "Proof of Financial Means",
    "Travel Itinerary",
    "Invitation Letter",
  ];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        Required_documents: checked
          ? [...prev.Required_documents, value]
          : prev.Required_documents.filter((doc) => doc !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://visa-navigatore-server.vercel.app/addVisa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Visa Added Successfully!",
            text: "Your visa has been added.",
            icon: "success",
          });
          setFormData({
            Country_image: "",
            Country_name: "",
            Visa_type: "",
            Processing_time: "",
            Required_documents: [],
            Description: "",
            Age_restriction: "",
            Fee: "",
            Validity: "",
            Application_method: "",
            Creation_date: new Date().toLocaleDateString("en-CA", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }),
            User_email: user?.email,
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "An error occurred while adding the visa.",
          icon: "error",
        });
      });
  };

  return (
    <>
      <Helmet>
        <title>Add New Visa - Visa Navigator</title>
        <meta
          name="description"
          content="Add a new visa to your visa navigator account."
        />
        <meta property="og:title" content="Add New Visa - Visa Navigator" />
        <meta
          property="og:description"
          content="Add a new visa to your visa navigator account."
        />
        <meta property="og:site_name" content="Visa Navigator" />
      </Helmet>
      <div className="min-h-screen dark:bg-neutralpt-10 sm:p-8 rounded-xl">
        <div className="max-w-2xl mx-auto bg-white dark:bg-neutral shadow-2xl rounded-xl  p-8">
          <h2 className="text-3xl font-bold text-center  mb-6">Add New Visa</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Country Image Upload */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Country Image (Upload to ImgBB)
                  <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="url"
                name="Country_image"
                placeholder="Valid Country Image URL "
                value={formData.Country_image}
                onChange={handleChange}
                className="input  input-bordered border-neutral  w-full"
                required
              />
            </div>

            {/* Country Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Country Name<span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                name="Country_name"
                value={formData.Country_name}
                onChange={handleChange}
                placeholder="Enter Country Name"
                className="input input-bordered border-neutral  w-full"
                required
              />
            </div>

            {/* Visa Type Dropdown */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Visa Type<span className="text-red-500">*</span>
                </span>
              </label>
              <select
                name="Visa_type"
                value={formData.Visa_type}
                onChange={handleChange}
                className="select select-bordered border-neutral w-full"
                required
              >
                <option value="">Select Visa Type</option>
                {visaTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Processing Time */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Processing Time<span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                name="Processing_time"
                value={formData.Processing_time}
                onChange={handleChange}
                placeholder=" e.g., 5-7 business days"
                className="input input-bordered border-neutral  w-full"
                required
              />
            </div>

            {/* Required Documents */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Required Documents<span className="text-red-500">*</span>
                </span>
              </label>
              <div className="grid sm:grid-cols-2 gap-2">
                {documentOptions.map((doc) => (
                  <label key={doc} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="Required_documents"
                      value={doc}
                      checked={formData.Required_documents.includes(doc)}
                      onChange={handleChange}
                      className="checkbox border-neutral dark:border-base-content"
                    />
                    <span>{doc}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="Description"
                value={formData.Description}
                onChange={handleChange}
                placeholder="Provide detailed visa information"
                className="textarea textarea-bordered border-neutral w-full h-24"
                required
              />
            </div>

            {/* Age Restriction */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Minimum Age Requirement<span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="number"
                name="Age_restriction"
                value={formData.Age_restriction}
                onChange={handleChange}
                placeholder="Minimum age for visa"
                min="0"
                max="100"
                className="input input-bordered border-neutral  w-full"
                required
              />
            </div>

            {/* Fee */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Visa Fee<span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="number"
                name="Fee"
                value={formData.Fee}
                onChange={handleChange}
                placeholder="Visa processing fee"
                min="0"
                className="input input-bordered border-neutral w-full"
                required
              />
            </div>

            {/* Validity */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Visa Validity<span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                name="Validity"
                value={formData.Validity}
                onChange={handleChange}
                placeholder="e.g., 1 year from issue date"
                className="input input-bordered border-neutral w-full"
                required
              />
            </div>

            {/* Application Method */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Application Method<span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                name="Application_method"
                value={formData.Application_method}
                onChange={handleChange}
                placeholder="Online/Offline/Embassy"
                className="input input-bordered border-neutral w-full"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-neutral w-full dark:bg-base-100  transition duration-300"
              >
                Add Visa
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddVisa;
