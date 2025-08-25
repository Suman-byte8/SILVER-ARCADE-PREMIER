const Facility = require('../../../schema/Client Content Models/Our Facilities/facilities.model');
const { uploadToCloudinary } = require('../../../config/cloudinary');

// Get all facilities
async function getFacilities(req, res) {
  try {
    const facilities = await Facility.find().sort({ order: 1 });
    res.status(200).json({
      success: true,
      facilities
    });
  } catch (error) {
    console.error('Error fetching facilities:', error);
    res.status(500).json({ message: 'Server error while fetching facilities' });
  }
}

// Get facility by ID
async function getFacilityById(req, res) {
  try {
    const facility = await Facility.findById(req.params.id);
    if (!facility) {
      return res.status(404).json({ message: 'Facility not found' });
    }
    res.status(200).json({
      success: true,
      facility
    });
  } catch (error) {
    console.error('Error fetching facility:', error);
    res.status(500).json({ message: 'Server error while fetching facility' });
  }
}

// Create new facility
async function createFacility(req, res) {
  try {
    const { title, subtitle, description, path, order, isActive } = req.body;
    
    let imageUrl = '';
    if (req.file) {
      const uploadResult = await uploadToCloudinary(req.file);
      imageUrl = uploadResult.secure_url;
    }

    const facility = new Facility({
      title,
      subtitle,
      description,
      path,
      order: order || 0,
      isActive: isActive !== undefined ? isActive : true,
      image: imageUrl
    });

    await facility.save();

    res.status(201).json({
      success: true,
      message: 'Facility created successfully',
      facility
    });
  } catch (error) {
    console.error('Error creating facility:', error);
    res.status(500).json({ message: 'Server error while creating facility' });
  }
}

// Update facility
async function updateFacility(req, res) {
  try {
    const { title, subtitle, description, path, order, isActive } = req.body;
    
    let updateData = {
      title,
      subtitle,
      description,
      path,
      order,
      isActive
    };

    if (req.file) {
      const uploadResult = await uploadToCloudinary(req.file);
      updateData.image = uploadResult.secure_url;
    }

    const facility = await Facility.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!facility) {
      return res.status(404).json({ message: 'Facility not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Facility updated successfully',
      facility
    });
  } catch (error) {
    console.error('Error updating facility:', error);
    res.status(500).json({ message: 'Server error while updating facility' });
  }
}

// Delete facility
async function deleteFacility(req, res) {
  try {
    const facility = await Facility.findByIdAndDelete(req.params.id);
    
    if (!facility) {
      return res.status(404).json({ message: 'Facility not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Facility deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting facility:', error);
    res.status(500).json({ message: 'Server error while deleting facility' });
  }
}

module.exports = {
  getFacilities,
  getFacilityById,
  createFacility,
  updateFacility,
  deleteFacility
};
