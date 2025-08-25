import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Box, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { addFacility, updateFacility } from "../../services/facilities";

const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

export default function EditFacilityModal({ isOpen, onClose, onSave, facility }) {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    path: "",
    order: 0,
    isActive: true
  });
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (facility) {
      setFormData({
        title: facility.title || "",
        subtitle: facility.subtitle || "",
        description: facility.description || "",
        path: facility.path || "",
        order: facility.order || 0,
        isActive: facility.isActive !== undefined ? facility.isActive : true
      });
    }
  }, [facility]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    if (!formData.path.trim()) newErrors.path = "Path is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    const token = import.meta.env.VITE_TEMP_ADMIN_TOKEN;
    const submitData = new FormData();
    submitData.append('title', formData.title);
    submitData.append('subtitle', formData.subtitle);
    submitData.append('description', formData.description);
    submitData.append('path', formData.path);
    submitData.append('order', formData.order);
    submitData.append('isActive', formData.isActive);
    if (image) {
      submitData.append('image', image);
    }

    try {
      const updatedFacility = await updateFacility(facility._id, submitData, token);
      if (onSave) {
        onSave(updatedFacility);
      }
      handleClose();
    } catch (error) {
      console.error("Error updating facility:", error);
      alert("Error updating facility");
    }
  };

  const handleClose = () => {
    setFormData({
      title: "",
      subtitle: "",
      description: "",
      path: "",
      order: 0,
      isActive: true
    });
    setImage(null);
    setErrors({});
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          Edit Facility
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2} mt={2}>
          <TextField
            label="Title *"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            error={!!errors.title}
            helperText={errors.title}
            fullWidth
          />
          
          <TextField
            label="Subtitle"
            name="subtitle"
            value={formData.subtitle}
            onChange={handleInputChange}
            fullWidth
          />
          
          <TextField
            label="Description *"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            error={!!errors.description}
            helperText={errors.description}
            multiline
            rows={3}
            fullWidth
          />
          
          <TextField
            label="Path *"
            name="path"
            value={formData.path}
            onChange={handleInputChange}
            error={!!errors.path}
            helperText={errors.path}
            fullWidth
          />
          
          <TextField
            label="Order"
            name="order"
            type="number"
            value={formData.order}
            onChange={handleInputChange}
            fullWidth
          />
          
          <Box>
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="edit-facility-image"
              type="file"
              onChange={handleImageChange}
            />
            <label htmlFor="edit-facility-image">
              <Button variant="outlined" component="span">
                {image ? "Change Image" : "Upload New Image"}
              </Button>
            </label>
            {image && (
              <Box mt={1}>
                <small>Selected: {image.name}</small>
              </Box>
            )}
            {facility?.image && !image && (
              <Box mt={1}>
                <small>Current image will be kept</small>
              </Box>
            )}
          </Box>
          
          <Box display="flex" alignItems="center">
            <input
              type="checkbox"
              id="isActive"
              name="isActive"
              checked={formData.isActive}
              onChange={handleInputChange}
            />
            <label htmlFor="isActive" style={{ marginLeft: '8px' }}>
              Active
            </label>
          </Box>
        </Box>
      </DialogContent>
      
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Update Facility
        </Button>
      </DialogActions>
    </Dialog>
  );
}
