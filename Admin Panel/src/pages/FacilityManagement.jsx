import React, { useEffect, useState } from "react";
import { 
  Container, 
  Card, 
  CardContent, 
  Typography, 
  CardMedia, 
  Box,
  IconButton
} from "@mui/material";
import { FaPlus, FaEdit, FaTrash, FaSpinner } from "react-icons/fa";
import AddFacilityModal from "../components/Facility Management/AddFacilityModal";
import EditFacilityModal from "../components/Facility Management/EditFacilityModal";
import { getFacilities, addFacility, updateFacility, deleteFacility } from "../services/facilities";

export default function FacilityManagement() {
  const [facilities, setFacilities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState(null);

  const token = import.meta.env.VITE_TEMP_ADMIN_TOKEN;

  // Fetch Facilities
  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        const data = await getFacilities(token);
        setFacilities(data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch facilities");
      } finally {
        setLoading(false);
      }
    };
    fetchFacilities();
  }, []);

  // Add Facility
  const handleAddFacility = async (formData) => {
    try {
      const newFacility = await addFacility(formData, token);
      setFacilities((prev) => [...prev, newFacility]);
      setIsAddOpen(false);
    } catch (err) {
      console.error(err);
      alert("Error adding facility");
    }
  };

  // Update Facility
  const handleUpdateFacility = async (id, formData) => {
    try {
      const updated = await updateFacility(id, formData, token);
      setFacilities((prev) =>
        prev.map((facility) => (facility._id === id ? updated : facility))
      );
      setIsEditOpen(false);
      setSelectedFacility(null);
    } catch (err) {
      console.error(err);
      alert("Error updating facility");
    }
  };

  // Delete Facility
  const handleDeleteFacility = async (id) => {
    if (!confirm("Are you sure you want to delete this facility?")) return;
    try {
      await deleteFacility(id, token);
      setFacilities((prev) => prev.filter((facility) => facility._id !== id));
    } catch (err) {
      console.error(err);
      alert("Error deleting facility");
    }
  };

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center">
        <FaSpinner className="animate-spin text-4xl text-[#2c5e6e]" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-red-600 font-medium">{error}</div>
    );
  }

  return (
    <Container sx={{ py: 8 }}>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-light tracking-wide text-center uppercase">Our Facilities</h1>
        <button
          onClick={() => setIsAddOpen(true)}
          className="bg-[#2c5e6e] text-white px-6 py-3 rounded-lg hover:bg-[#244c58] flex items-center gap-2 text-lg"
        >
          <FaPlus /> Add Facility
        </button>
      </div>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12">
        {facilities.map((facility) => (
          <Card 
            key={facility._id} 
            sx={{ 
              height: "100%", 
              display: "flex", 
              flexDirection: "column", 
              borderRadius: "20px", 
              boxShadow: 3,
              position: "relative"
            }}
          >
            {facility.image && (
              <CardMedia
                component="img"
                image={facility.image}
                alt={facility.title}
                sx={{ 
                  borderTopLeftRadius: "20px", 
                  borderTopRightRadius: "20px", 
                  height: 250, 
                  objectFit: "cover" 
                }}
              />
            )}
            
            {/* Status Badge */}
            {!facility.isActive && (
              <Box
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  bgcolor: "error.main",
                  color: "white",
                  px: 1,
                  py: 0.5,
                  borderRadius: 1,
                  fontSize: "0.75rem"
                }}
              >
                Inactive
              </Box>
            )}

            <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
              <Typography gutterBottom variant="h5" component="h2">
                {facility.title}
              </Typography>
              {facility.subtitle && (
                <Typography variant="subtitle2" sx={{ color: "gray", mb: 1 }}>
                  {facility.subtitle}
                </Typography>
              )}
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {facility.description}
              </Typography>
              
              <Typography variant="caption" color="text.secondary">
                Path: {facility.path} | Order: {facility.order}
              </Typography>
            </CardContent>

            {/* Action Buttons */}
            <Box sx={{ p: 2, display: "flex", gap: 1, justifyContent: "center" }}>
              <IconButton
                onClick={() => {
                  setSelectedFacility(facility);
                  setIsEditOpen(true);
                }}
                sx={{ 
                  color: "primary.main",
                  "&:hover": { bgcolor: "primary.light", color: "white" }
                }}
              >
                <FaEdit />
              </IconButton>
              <IconButton
                onClick={() => handleDeleteFacility(facility._id)}
                sx={{ 
                  color: "error.main",
                  "&:hover": { bgcolor: "error.light", color: "white" }
                }}
              >
                <FaTrash />
              </IconButton>
            </Box>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {facilities.length === 0 && (
        <div className="text-center py-12">
          <Typography variant="h6" color="text.secondary">
            No facilities found. Add your first facility to get started.
          </Typography>
        </div>
      )}

      {/* Modals */}
      <AddFacilityModal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onSave={handleAddFacility}
      />
      
      {selectedFacility && (
        <EditFacilityModal
          isOpen={isEditOpen}
          onClose={() => setIsEditOpen(false)}
          onSave={(formData) => handleUpdateFacility(selectedFacility._id, formData)}
          facility={selectedFacility}
        />
      )}
    </Container>
  );
}

