const router = require('express').Router();
const { protect, authorize } = require('../../middlewares/authMiddleware');
const upload = require('../../middlewares/uploadMiddleware');


// routes for hero banner
const { getHeroBanner, addHeroBanner, updateHeroBanner, deleteHeroBanner } = require('../../controllers/Dynamic Content/Home Page Controller/heroBanner.controller');
// get hero banner (accessible to both admin and user)
router.get('/hero-banner', protect, getHeroBanner);
// add hero banner (admin only)
router.post('/add-hero-banner', protect, authorize('admin'), upload.single('image'), addHeroBanner);
// update hero banner (admin only)
router.put('/update-hero-banner/:id', protect, authorize('admin'), upload.single('image'), updateHeroBanner);
// delete hero banner (admin only)
router.delete('/delete-hero-banner/:id', protect, authorize('admin'), deleteHeroBanner);


// routes for curated offers
const { addOffers, updateOffers, deleteOffers, getOffers } = require('../../controllers/Dynamic Content/Home Page Controller/curatedOffer.controller');
 // Add Curated Offers
router.post('/add-curated-offer', protect, authorize('admin'), upload.single('image'), addOffers);
// Update Curated Offers
router.put('/update-curated-offer/:id', protect, authorize('admin'), upload.single('image'), updateOffers);
// Delete Curated Offers
router.delete('/delete-curated-offer/:id', protect, authorize('admin'), deleteOffers);
// Get Curated Offers
router.get('/get-curated-offers', protect, getOffers);

// routes for footer links
const { addFooterLinks, getFooterLinks, updateFooterLink, deleteFooterLink } = require('../../controllers/Dynamic Content/Home Page Controller/footer.controller');
// Add Footer Links
router.post('/add-footer-link', protect, authorize('admin'), addFooterLinks);
// Get Footer Links
router.get('/get-footer-links', protect, getFooterLinks);
// Update Footer Link
router.put('/update-footer-link/:id', protect, authorize('admin'), updateFooterLink);
// Delete Footer Link
router.delete('/delete-footer-link/:id', protect, authorize('admin'), deleteFooterLink);

// routes for membership block
const { addMembershipBlock, updateMembershipBlock, deleteMembershipBlock, getMembershipBlocks } = require('../../controllers/Dynamic Content/Home Page Controller/membershipBlock.controller');
// Add Membership Block
router.post('/add-membership-block', protect, authorize('admin'), upload.single('image'), addMembershipBlock);
// Update Membership Block
router.put('/update-membership-block/:id', protect, authorize('admin'), upload.single('image'), updateMembershipBlock);
// Delete Membership Block
router.delete('/delete-membership-block/:id', protect, authorize('admin'), deleteMembershipBlock);
// Get Membership Blocks
router.get('/get-membership-blocks', protect, getMembershipBlocks);


// routes for nav links
const { addNavLink, updateNavLink, deleteNavLink, getNavLinks } = require('../../controllers/Dynamic Content/Home Page Controller/navLinks.controller');
// Add Nav Link
router.post('/add-nav-link', protect, authorize('admin'), addNavLink);
// Update Nav Link
router.put('/update-nav-link/:id', protect, authorize('admin'), updateNavLink);
// Delete Nav Link
router.delete('/delete-nav-link/:id', protect, authorize('admin'), deleteNavLink);
// Get Nav Links
router.get('/get-nav-links', protect, getNavLinks);

// routes for distinctive features
const { addDistinctive, getDistinctives, updateDistinctive, deleteDistinctive } = require('../../controllers/Dynamic Content/Home Page Controller/distinctive.controller');

// Create
router.post("/add-distinctive", protect, authorize("admin"), upload.array("images"), addDistinctive);

// Get all
router.get("/distinctives", protect, getDistinctives);

// Update
router.put("/distinctive/:id", protect, authorize("admin"), updateDistinctive);

// Delete
router.delete("/distinctive/:id", protect, authorize("admin"), deleteDistinctive);

module.exports = router;