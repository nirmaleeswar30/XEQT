import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Extend the L.Icon.Default type to include _getIconUrl
declare module 'leaflet' {
  namespace Icon {
    interface Default {
      _getIconUrl?: string;
    }
  }
}

// Fix for default marker icon in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Define the form data interface
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  // Two locations: Tamil Nadu and California
  const tamilNaduPosition: [number, number] = [11.1271, 78.6569]; // Tamil Nadu coordinates
  const californiaPosition: [number, number] = [36.7783, -119.4179]; // California coordinates

  // World map center and zoom level to show both locations
  const worldMapCenter: [number, number] = [20, 0]; // Center of the world map
  const worldMapZoom: number = 3; // Zoom level to see the world

  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Construct email body
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}

${formData.message}
    `;

    // Create mailto link with form data
    const mailtoLink = `mailto:accounts@xeqtpro.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(emailBody)}`;

    // Open email client
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen pt-16 relative">
      {/* World Map Background Container */}
      <div className="absolute inset-0 z-0">
        <MapContainer
          center={worldMapCenter}
          zoom={worldMapZoom}
          style={{ height: '100%', width: '100%' }}
          zoomControl={true}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Tamil Nadu Marker */}
          <Marker position={tamilNaduPosition}>
            <Popup>
              <b>XEQT Tamil Nadu</b>
              <br />
              South Indian Office
            </Popup>
          </Marker>

          {/* California Marker */}
          <Marker position={californiaPosition}>
            <Popup>
              <b>XEQT California</b>
              <br />
              Silicon Valley Office
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="flex justify-center items-center min-h-screen relative z-10">
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 w-full max-w-md mx-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-900 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;