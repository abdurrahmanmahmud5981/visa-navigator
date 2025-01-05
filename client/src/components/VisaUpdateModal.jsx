/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import AuthContext from "../provider/AuthContext";

const VisaUpdateModal = ({ visa, onClose, onUpdate }) => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    Country_image: visa?.Country_image || "",
    Country_name: visa?.Country_name || "",
    Visa_type: visa?.Visa_type || "",
    Processing_time: visa?.Processing_time || "",
    Required_documents: visa?.Required_documents || [],
    Description: visa?.Description || "",
    Age_restriction: visa?.Age_restriction || "",
    Fee: visa?.Fee || "",
    Validity: visa?.Validity || "",
    Application_method: visa?.Application_method || "",
    Creation_date: new Date().toLocaleDateString("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }),
    User_email: user?.email,
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onClose();
    onUpdate(visa?._id, formData);
  };

  return (
    <div>
      <dialog className="modal modal-open "  >
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Update Visa Information</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Country Image Upload */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Country Image</span>
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
                <span className="label-text">Country Name</span>
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
                <span className="label-text">Visa Type</span>
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
                <span className="label-text">Processing Time</span>
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
                <span className="label-text">Required Documents</span>
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
                <span className="label-text">Minimum Age Requirement</span>
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
                <span className="label-text">Visa Fee</span>
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
                <span className="label-text">Visa Validity</span>
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
                <span className="label-text">Application Method</span>
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

            {/* Button */}
            <div className="modal-action justify-start">
              <button type="submit" className="btn btn-neutral">
                Update Visa
              </button>
              <button type="button" className="btn btn-ghost" onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
        {/* for closing form */}
        <div className="modal-backdrop" onClick={onClose}></div>
      </dialog>
    </div>
  );
};

export default VisaUpdateModal;
