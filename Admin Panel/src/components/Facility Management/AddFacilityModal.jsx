import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Box, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { addFacility } from "../../services/facilities";

export default function AddFacilityModal({ isOpen, onClose, onSave }) {
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
    if (!image) newErrors.image = "Image is required";
    
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
      const newFacility = await addFacility(submitData, token);
      if (onSave) {
        onSave(newFacility);
      }
      handleClose();
    } catch (error) {
      console.error("Error adding facility:", error);
      alert("Error adding facility");
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
          Add New Facility
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
              id="facility-image"
              type="file"
              onChange={handleImageChange}
            />
            <label htmlFor="facility-image">
              <Button variant="outlined" component="span">
                Upload Image *
              </Button>
            </label>
            {image && (
              <Box mt={1}>
                <small>Selected: {image.name}</small>
              </Box>
            )}
            {errors.image && (
              <Box mt={1}>
                <small style={{ color: 'red' }}>{errors.image}</small>
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
          Add Facility
        </Button>
      </DialogActions>
    </Dialog>
  );
}
