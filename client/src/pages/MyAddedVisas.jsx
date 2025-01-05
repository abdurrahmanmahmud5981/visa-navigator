import { useState, useEffect, useContext } from "react";

import AuthContext from "../provider/AuthContext";
import MyVisaCard from "../components/MyVisaCard";
import VisaUpdateModal from "../components/VisaUpdateModal";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import Loader from "../components/Loader";

const MyAddedVisas = () => {
  const { user } = useContext(AuthContext);
  const [visas, setVisas] = useState([]);
  const [selectedVisa, setSelectedVisa] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    fetch(`https://visa-navigatore-server.vercel.app/my-added-visas/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setVisas(data);
        setLoader(false);
      })
      .catch((error) => {
        toast.error(
          "Error fetching visas: Failed to fetch visas",
          error.message
        );
        setLoader(false);
      });
  }, [user]);

  const handleUpdateVisa = async (visaId, updatedData) => {
    try {
      await fetch(`https://visa-navigatore-server.vercel.app/update-visa/${visaId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.modifiedCount) {
            Swal.fire(
              "Visa Updated!",
              "Visa information updated successfully",
              "success"
            );
            setVisas((prevVisas) =>
              prevVisas.map((visa) =>
                visa._id === visaId ? { ...visa, ...updatedData } : visa
              )
            );
          }
        });
    } catch (error) {
      Swal.fire("Error Updating Visa Info", error.message, "error");
    }
  };

  const handleDeleteVisa = (visaId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result?.isConfirmed) {
        fetch(`https://visa-navigatore-server.vercel.app/delete-visa/${visaId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Visa Deleted!",
                "Visa deleted successfully",
                "success"
              );
              setVisas((prevVisas) =>
                prevVisas?.filter((visa) => visa?._id !== visaId)
              );
            }
          })
          .catch((err) => {
            Swal.fire("Error Deleting visa", err?.message, "error");
          });
      }
    });
  };

  const openUpdateModal = (visa) => {
    setSelectedVisa(visa);
    setIsUpdateModalOpen(true);
  };

  return (
    <div className=" mx-auto py-8 sm:p-4">
      <Helmet>
        <title>My Added Visas | Visa Navigator</title>
        <meta
          name="description"
          content="My Visa Portal - My added visas page"
        />
        <meta property="og:title" content="My Added Visas | My Visa Portal" />
      </Helmet>
      <h1 className="text-3xl font-bold mb-6 text-center">My Added Visas</h1>

      {loader ? (
        <Loader />
      ) : visas?.length === 0 ? (
        <div className="alert alert-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>No visas added yet.</span>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visas?.map((visa) => (
            <MyVisaCard
              key={visa._id}
              visa={visa}
              openUpdateModal={openUpdateModal}
              onDelete={handleDeleteVisa}
            />
          ))}
        </div>
      )}

      {selectedVisa && isUpdateModalOpen && (
        <VisaUpdateModal
          isOpen={isUpdateModalOpen}
          onClose={() => setIsUpdateModalOpen(false)}
          visa={selectedVisa}
          onUpdate={handleUpdateVisa}
        />
      )}
    </div>
  );
};

export default MyAddedVisas;
