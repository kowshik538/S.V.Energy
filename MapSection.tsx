import React from 'react';

const MapSection: React.FC = () => {
  return (
    <div className="h-96 rounded-lg overflow-hidden shadow-md">
      <iframe 
        title="Google Maps Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.123456789!2d77.6033!3d14.6819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1a7f8c1234567%3A0xabcdef1234567890!2sRajuroad%2C%20Anantapur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1610000000000!5m2!1sen!2sin" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={true} 
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapSection;