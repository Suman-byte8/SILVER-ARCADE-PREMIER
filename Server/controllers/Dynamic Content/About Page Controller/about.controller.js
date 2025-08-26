import AboutPage from '../../../schema/Client Content Models/About/about.model.js';

// Note: Error handling is basic. In a production environment, you might want more sophisticated logging or error handling.

/**
 * @description Get the entire About Page content. If it doesn't exist, create it with default values.
 * @route GET /api/about
 * @access Public
 */
export const getAboutPage = async (req, res) => {
  try {
    let aboutPage = await AboutPage.findOne();
    if (!aboutPage) {
      aboutPage = await AboutPage.create({
        aboutUsSection: {
          title: 'About Us',
          description: 'Welcome to our about page!',
        },
      });
    }
    res.status(200).json(aboutPage);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching About Page content', error: error.message });
  }
};

// --- About Us Section Controllers ---

/**
 * @description Update the About Us section.
 * @route PUT /api/about/about-us
 * @access Private/Admin
 */
export const updateAboutUsSection = async (req, res) => {
  try {
    const { title, description } = req.body;
    const aboutPage = await AboutPage.findOne();
    if (!aboutPage) {
      return res.status(404).json({ message: 'About Page not found' });
    }

    if (title) aboutPage.aboutUsSection.title = title;
    if (description) aboutPage.aboutUsSection.description = description;

    if (req.file) {
      // TODO: Delete old image from Cloudinary if it exists
      aboutPage.aboutUsSection.headerImage = {
        url: req.file.path,
        public_id: req.file.filename,
      };
    }

    await aboutPage.save();
    res.status(200).json(aboutPage.aboutUsSection);
  } catch (error) {
    res.status(500).json({ message: 'Error updating About Us section', error: error.message });
  }
};

// --- Generic CRUD Functions for Sub-documents ---

const addItem = (itemName) => async (req, res) => {
  const { title, description } = req.body;
  const section = `${itemName.toLowerCase()}s`; // e.g., contentBlocks, amenities, services

  try {
    // Validate required fields
    if (!title || !description) {
      return res.status(400).json({ 
        message: `Missing required fields for ${itemName}`,
        required: ['title', 'description']
      });
    }

    // Find or create AboutPage document
    let aboutPage = await AboutPage.findOne();
    if (!aboutPage) {
      aboutPage = await AboutPage.create({
        aboutUsSection: {
          title: 'About Us',
          description: 'Welcome to our about page!',
        },
        contentBlocks: [],
        amenities: [],
        services: []
      });
    }

    // Ensure the section array exists and is properly initialized
    if (!aboutPage[section]) {
      aboutPage[section] = [];
    }

    const newItem = { title, description };
    if (req.file) {
      newItem.image = {
        url: req.file.path,
        public_id: req.file.filename,
      };
    }

    console.log('Adding new item:', newItem);
    
    // Ensure the section array exists
    if (!aboutPage[section]) {
      aboutPage[section] = [];
    }
    
    // Push the new item to the array and save the document
    aboutPage[section].push(newItem);
    await aboutPage.save();
    
    console.log('About Page after addition:', aboutPage);
    
    // Return the newly added item directly from the saved document
    const savedItem = aboutPage[section][aboutPage[section].length - 1];
    res.status(201).json(savedItem);
  } catch (error) {
    console.error(`Error adding ${itemName}:`, error);
    res.status(500).json({ 
      message: `Error adding ${itemName}`,
      error: error.message,
      details: error.stack 
    });
  }
};

const updateItem = (itemName) => async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const section = `${itemName.toLowerCase()}s`;

  try {
    const aboutPage = await AboutPage.findOne();
    if (!aboutPage) {
      return res.status(404).json({ message: 'About Page not found' });
    }

    const item = aboutPage[section].id(id);
    if (!item) {
      return res.status(404).json({ message: `${itemName} not found` });
    }

    if (title) item.title = title;
    if (description) item.description = description;

    if (req.file) {
      // TODO: Delete old image from Cloudinary
      item.image = {
        url: req.file.path,
        public_id: req.file.filename,
      };
    }

    await aboutPage.save();
    res.status(200).json(item);
  } catch (error) {
    console.error(`Error updating ${itemName}:`, error);
    res.status(500).json({ 
      message: `Error updating ${itemName}`,
      error: error.message,
      details: error.stack 
    });
  }
};

const deleteItem = (itemName) => async (req, res) => {
  const { id } = req.params;
  const section = `${itemName.toLowerCase()}s`;

  try {
    const aboutPage = await AboutPage.findOne();
    if (!aboutPage) {
      return res.status(404).json({ message: 'About Page not found' });
    }

    const item = aboutPage[section].id(id);
    if (!item) {
      return res.status(404).json({ message: `${itemName} not found` });
    }

    // TODO: Delete image from Cloudinary if it exists

    item.remove();
    await aboutPage.save();
    res.status(200).json({ message: `${itemName} deleted successfully` });
  } catch (error) {
    console.error(`Error deleting ${itemName}:`, error);
    res.status(500).json({ 
      message: `Error deleting ${itemName}`,
      error: error.message,
      details: error.stack 
    });
  }
};

// --- Content Block Controllers ---
export const addContentBlock = addItem('ContentBlock');
export const updateContentBlock = updateItem('ContentBlock');
export const deleteContentBlock = deleteItem('ContentBlock');

// --- Amenity Controllers ---
export const addAmenity = addItem('Amenity');
export const updateAmenity = updateItem('Amenity');
export const deleteAmenity = deleteItem('Amenity');

// --- Service Controllers ---
export const addService = addItem('Service');
export const updateService = updateItem('Service');
export const deleteService = deleteItem('Service');