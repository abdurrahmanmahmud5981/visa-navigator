/* eslint-disable react/prop-types */
const ApplicationModal = ({
  applicationData,
  handleInputChange,
  handleCloseModal,
  handleApplyVisa,
}) => {
  return (
    <div>
      <div className="modal modal-open">
        <div className="modal-box rounded-lg sm:w-96">
          <h2 className="text-xl font-bold mb-4">Visa Application</h2>
          <form className="">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                defaultValue={applicationData?.Applicant_email}
                className="input input-bordered"
                required
                readOnly
              />
            </div>
            {/*  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                placeholder="first name"
                name="Applicant_first_name"
                defaultValue={applicationData?.Applicant_first_name}
                onChange={handleInputChange}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                placeholder="last name"
                name="Applicant_last_name"
                defaultValue={applicationData?.Applicant_last_name}
                onChange={handleInputChange}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Application Date</span>
              </label>
              <input
                type="date"
                defaultValue={applicationData?.Apply_date}
                className="input input-bordered"
                required
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Fee</span>
              </label>
              <input
                className="input input-bordered"
                type="number"
                value={applicationData?.Fee}
                readOnly
              />
            </div>
            <div className="modal-action justify-start ">
              <button
                type="submit"
                onClick={handleApplyVisa}
                className="btn btn-neutral"
              >
                Apply
              </button>
              <button className="btn" onClick={handleCloseModal}>
                Cancel
              </button>
            </div>
          </form>
        </div>
        <div className="modal-backdrop" onClick={handleCloseModal}></div>
      </div>
    </div>
  );
};

export default ApplicationModal;
