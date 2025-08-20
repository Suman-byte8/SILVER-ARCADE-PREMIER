import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccommodationForm from "../components/Reservation/AccommodationForm";
import RestaurantForm from "../components/Reservation/RestaurantForm";
import MeetingWeddingForm from "../components/Reservation/MeetingWeddingForm";
import InfoPanel from "../components/Reservation/InfoPanel";
import ReservationSidebar from "../components/Reservation/ReservationSidebar";
import LoadingScreen from "../components/Reservation/LoadingScreen";

export default function ReservationPage() {
  const [activeSection, setActiveSection] = useState("accommodation");
  const [isLoading, setIsLoading] = useState(false);
  const [bookingData, setBookingData] = useState(null);
  const navigate = useNavigate();

  const handleBookingSubmit = async (formData) => {
    setIsLoading(true);
    
    // Create a clean, serializable copy using a deep clone approach
    const cleanData = {};
    
    // Deep clone function that handles circular references and non-serializable objects
    const deepClone = (obj) => {
      if (obj === null || typeof obj !== 'object') {
        return obj;
      }
      
      if (obj instanceof Date) {
        return obj.toISOString();
      }
      
      if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
      }
      
      if (typeof obj === 'object') {
        // Skip DOM elements and other non-serializable objects
        if (obj.nodeType || obj instanceof Element || obj instanceof Window || 
            obj.constructor?.name === 'SyntheticEvent' || typeof obj === 'function') {
          return undefined;
        }
        
        const cloned = {};
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            const clonedValue = deepClone(value);
            if (clonedValue !== undefined) {
              cloned[key] = clonedValue;
            }
          }
        }
        return cloned;
      }
      
      return obj;
    };
    
    // Clean the form data
    Object.keys(formData).forEach(key => {
      const cleanedValue = deepClone(formData[key]);
      if (cleanedValue !== undefined) {
        cleanData[key] = cleanedValue;
      }
    });
    
    // Simulate booking process
    setTimeout(() => {
      setIsLoading(false);
      navigate('/booking-confirmation', { state: { bookingData: cleanData } });
    }, 2500);
  };

  const renderActiveForm = () => {
    switch (activeSection) {
      case "accommodation":
        return <AccommodationForm onSubmit={handleBookingSubmit} />;
      case "restaurant":
        return <RestaurantForm onSubmit={handleBookingSubmit} />;
      case "meeting":
        return <MeetingWeddingForm onSubmit={handleBookingSubmit} />;
      default:
        return <AccommodationForm onSubmit={handleBookingSubmit} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {isLoading && <LoadingScreen message="We're reserving your room..." />}
      
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <ReservationSidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Left Content */}
          <div className="flex-1">
            {renderActiveForm()}
          </div>

          {/* Right Information Panel */}
          <InfoPanel />
        </div>
      </div>
    </div>
  );
}

