import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddOffer from "../components/OfferManagement/AddOffer";
import { addOffer } from "../services/offers";

const AddOfferPage = () => {
  const navigate = useNavigate();
  const token = import.meta.env.VITE_TEMP_ADMIN_TOKEN;

  const handleSave = async (formData) => {
    try {
      await addOffer(formData, token);
      navigate("/offer-management"); // Navigate back to offer management after saving
    } catch (error) {
      console.error("Error adding offer:", error);
    }
  };

  const handleCancel = () => {
    navigate("/offer-management"); // Navigate back to offer management on cancel
  };

  return (
    <div className="p-8">
      <AddOffer
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default AddOfferPage;
