const cloudinary = require('../../../config/cloudinary')
const streamifier = require('streamifier');
const Room = require('../../../schema/rooms.model');
// add rooms
async function addRooms(req, res) {
    try {
        const { roomName, roomType, roomCapacity, roomPrice, roomDescription, roomStatus } = req.body;
        
        let roomImage = '';
        if(req.file){
            try{
                // Upload image to Cloudinary
                let streamUpload = (file) => {
                    return new Promise((resolve, reject) => {
                        const stream = cloudinary.uploader.upload_stream(
                            {
                                folder: 'silver-arcade/rooms',
                            },
                            (error, result) => {
                            if (result) {
                                resolve(result);
                            } else {
                                reject(error);
                            }
                        });
                        streamifier.createReadStream(file.buffer).pipe(stream);
                    });
                }
                const result = await streamUpload(req.file);
                roomImage = result.secure_url; // Get the secure URL of the uploaded image
            }
            catch (error) {
                console.error('Error uploading image:', error);
                return res.status(500).json({ message: 'Error uploading image' });
            }
        }
        
        
        const newRoom = new Room({
            roomName,
            roomType,
            roomCapacity,
            roomPrice,
            roomDescription,
            roomImage,
            roomStatus
        });
        await newRoom.save();
        res.status(201).json({
            success: true,
            message: 'Room added successfully',
            room: newRoom
        });
    } catch (error) {
        console.error('Error adding room:', error);
        res.status(500).json({ message: 'Server error while adding room' });
    }
}

// update room details
async function updateRoomDetails(req, res) {
    try {
        const { roomId } = req.params;
        const { roomName, roomType, roomCapacity, roomPrice, roomDescription, roomStatus } = req.body;
        const room = await Room.findById(roomId);
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }
        room.roomName = roomName || room.roomName;
        room.roomType = roomType || room.roomType;
        room.roomCapacity = roomCapacity || room.roomCapacity;
        room.roomPrice = roomPrice || room.roomPrice;
        room.roomDescription = roomDescription || room.roomDescription;
        room.roomStatus = roomStatus || room.roomStatus;
        if (req.file) {
            try {
                // Upload new image to Cloudinary
                let streamUpload = (file) => {
                    return new Promise((resolve, reject) => {
                        const stream = cloudinary.uploader.upload_stream(
                            {
                                folder: 'silver-arcade/rooms',
                            },
                            (error, result) => {
                            if (result) {
                                resolve(result);
                            } else {
                                reject(error);
                            }
                        });
                        streamifier.createReadStream(file.buffer).pipe(stream);
                    });
                }
                const result = await streamUpload(req.file);
                room.roomImage = result.secure_url; // Update the room image URL
            } catch (error) {
                console.error('Error uploading image:', error);
                return res.status(500).json({ message: 'Error uploading image' });
            }
        }
        await room.save();
        res.status(200).json({
            success: true,
            message: 'Room updated successfully',
            room
        });
    } catch (error) {
        console.error('Error updating room:', error);
        res.status(500).json({ message: 'Server error while updating room' });
    }
}

// get all rooms
async function getRooms(req, res) {
    try {
        const rooms = await Room.find({});
        res.status(200).json({
            success: true,
            message: 'Rooms retrieved successfully',
            rooms
        });
    } catch (error) {
        console.error('Error retrieving rooms:', error);
        res.status(500).json({ message: 'Server error while retrieving rooms' });
    }
}

// delete room by id
async function deleteRoom(req, res) {
    try {
        const { roomId } = req.params;
        const room = await Room.findByIdAndDelete(roomId);
        
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }
        
        res.status(200).json({
            success: true,
            message: 'Room deleted successfully',
            room
        });
    } catch (error) {
        console.error('Error deleting room:', error);
        res.status(500).json({ message: 'Server error while deleting room' });
    }
}

// get room by id
async function getRoomById(req, res) {
    try {
        const { roomId } = req.params;
        const room = await Room.findById(roomId);
        
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }
        
        res.status(200).json({
            success: true,
            message: 'Room retrieved successfully',
            room
        });
    } catch (error) {
        console.error('Error retrieving room:', error);
        res.status(500).json({ message: 'Server error while retrieving room' });
    }
}

module.exports = {
    addRooms,
    updateRoomDetails,
    getRooms,
    deleteRoom,
    getRoomById
};
