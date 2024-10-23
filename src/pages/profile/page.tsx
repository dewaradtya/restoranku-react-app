import React from "react";
import { FaCalendar, FaCrown, FaEdit, FaMapPin, FaPhone } from "react-icons/fa";

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main Street, Anytown, USA",
    memberSince: "January 2024",
    profileImage: "/person.jpg",
    role: "Premium Member",
  };

  return (
    <div className="container mx-auto py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center border-b pb-4">
          <h1 className="text-3xl font-bold">Profile Saya</h1>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded flex items-center">
            <FaEdit className="w-4 h-4 mr-2" /> Edit Profile
          </button>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mt-6">
          <div className="w-32 h-32">
            <img
              src={user.profileImage}
              alt={user.name}
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>
            <div className="mt-2 flex items-center bg-yellow-200 text-yellow-600 w-full sm:w-1/3 px-4 py-1 rounded-lg shadow-md">
              <FaCrown className="mr-2 h-5 w-5" />
              <span className="font-semibold">{user.role}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <InfoItem icon={FaPhone} label="Phone" value={user.phone} />
              <InfoItem icon={FaMapPin} label="Address" value={user.address} />
              <InfoItem
                icon={FaCalendar}
                label="Member Since"
                value={user.memberSince}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-3">
    <div className="bg-gray-100 text-gray-500 hover:bg-green-200  hover:text-green-600 p-2 rounded-full">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  </div>
);

export default Profile;
