import React, { useState } from "react";
import { aboutApi } from "../../services/aboutApi";

const ContentBlock = ({
  _id,
  title,
  imageUrl,
  alt,
  description,
  descriptionLabel,
  rows,
  onDelete,
  onUpdate
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);
  const [isLoading, setIsLoading] = useState(false);

  const token = import.meta.env.VITE_TEMP_ADMIN_TOKEN;

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this content block?")) {
      setIsLoading(true);
      try {
        await aboutApi.deleteContentBlock(_id, token);
        onDelete(_id);
      } catch (error) {
        console.error("Error deleting content block:", error);
        alert("Failed to delete content block");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      await aboutApi.updateContentBlock(_id, { description: editedDescription }, token);
      setIsEditing(false);
      onUpdate(_id, { description: editedDescription });
    } catch (error) {
      console.error("Error updating content block:", error);
      alert("Failed to update content block");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setEditedDescription(description);
    setIsEditing(false);
  };

  return (
    <div className="border border-gray-300 p-4 rounded-lg relative">
      <div className="absolute top-2 right-2 flex space-x-2">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-blue-600 text-white p-1 rounded text-xs hover:bg-blue-700 transition-colors"
          disabled={isLoading}
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white p-1 rounded text-xs hover:bg-red-700 transition-colors"
          disabled={isLoading}
        >
          Delete
        </button>
      </div>

      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">Image</label>
          <div className="mt-1 flex items-center">
            {imageUrl ? (
              <img
                alt={alt}
                className="w-40 h-20 object-cover rounded-md mr-4"
                src={imageUrl}
              />
            ) : (
              <div className="w-40 h-20 bg-gray-200 rounded-md mr-4 flex items-center justify-center text-gray-500 text-sm">
                No Image
              </div>
            )}
            <input
              className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              type="file"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">
            {descriptionLabel}
          </label>
          {isEditing ? (
            <>
              <textarea
                className="w-full mt-1 p-2 border border-gray-300 rounded-md outline-0"
                rows={rows}
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              />
              <div className="flex space-x-2 mt-2">
                <button
                  onClick={handleUpdate}
                  className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors"
                  disabled={isLoading}
                >
                  {isLoading ? "Saving..." : "Save"}
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700 transition-colors"
                  disabled={isLoading}
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <p className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-50">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentBlock;