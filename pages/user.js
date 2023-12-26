import React from 'react';
import { useUser } from '../components/UserContext';

const UserProfilePage = () => {
  const { userProfile } = useUser();

  if (!userProfile) {
    if (typeof window !== 'undefined') {
      window.location.href = '/login';
    }
    return null;
  }

  return (
      <div className="container mx-auto mt-10 p-4">
        <h1 className="text-2xl font-semibold mb-4">User Profile</h1>
        <div className="mb-3">
          <strong>First Name:</strong> {userProfile.firstname}
        </div>
        <div className="mb-3">
          <strong>Last Name:</strong> {userProfile.lastname}
        </div>
        <div className="mb-3">
          <strong>Address:</strong> {userProfile.address}
        </div>
      </div>
  );
};

export default UserProfilePage;
