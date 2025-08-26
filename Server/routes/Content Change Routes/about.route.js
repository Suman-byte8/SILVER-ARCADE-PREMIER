const express = require('express');
const aboutController = require('../../controllers/Dynamic Content/About Page Controller/about.controller.js');

// Mock middleware for demonstration. Replace with your actual middleware.
const upload = require('../../middlewares/uploadMiddleware.js');
const { protect, authorize } = require('../../middlewares/authMiddleware.js');

const router = express.Router();

// --- About Page Route ---

router.get('/', protect, aboutController.getAboutPage);

// --- About Us Section ---

router.put('/admin/update-about-us', protect, authorize('admin'), upload.single('headerImage'), aboutController.updateAboutUsSection);

// --- Content Blocks ---
// Full CRUD for content blocks. Restricted to admins.
router.post('/admin/content-blocks', protect, authorize('admin'), upload.single('image'), aboutController.addContentBlock);
router.put('/admin/content-blocks/:id', protect, authorize('admin'), upload.single('image'), aboutController.updateContentBlock);
router.delete('/admin/content-blocks/:id', protect, authorize('admin'), aboutController.deleteContentBlock);

// --- Amenities ---
// Full CRUD for amenities. Restricted to admins.
router.post('/admin/amenities', protect, authorize('admin'), upload.single('image'), aboutController.addAmenity);
router.put('/admin/amenities/:id', protect, authorize('admin'), upload.single('image'), aboutController.updateAmenity);
router.delete('/admin/amenities/:id', protect, authorize('admin'), aboutController.deleteAmenity);

// --- Services ---
// Full CRUD for services. Restricted to admins.
router.post('/admin/services', protect, authorize('admin'), upload.single('image'), aboutController.addService);
router.put('/admin/services/:id', protect, authorize('admin'), upload.single('image'), aboutController.updateService);
router.delete('/admin/services/:id', protect, authorize('admin'), aboutController.deleteService);

module.exports = router;
