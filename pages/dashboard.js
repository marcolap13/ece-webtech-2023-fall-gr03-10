// UserDetails.js

import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { useUser } from '../components/UserContext';
import { supabase } from '../utils/supabaseClients';

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState({});
  const [showForm, setShowForm] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      fetchUserDetails();
    }
  }, [user]);

  const fetchUserDetails = async () => {
    try {
      const { data, error } = await supabase
        .from('user_details')
        .select(
          'user_id, username, first_name, last_name, address, phone_number, gender, profile_picture, language'
        )
        .eq('user_id', user.id)
        .single();

      if (error) {
        console.error('Error fetching user details:', error);
      } else {
        setUserDetails({ ...data, user_id: user.id });
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handleInputChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const submitUserDetails = async () => {
    try {
      if (userDetails.id) {
        const { data, error } = await supabase
          .from('user_details')
          .update(userDetails)
          .match({ id: userDetails.id });

        if (error) {
          console.error('Error:', error);
          alert('An error occurred while processing your request.');
        } else {
          setUserDetails(data ? data[0] : userDetails);
          setShowForm(false);
          alert('User details updated successfully!');
        }
      } else {
        const { data, error } = await supabase
          .from('user_details')
          .upsert([userDetails], { onConflict: ['user_id'] });

        if (error) {
          console.error('Error:', error);
          alert('An error occurred while processing your request.');
        } else {
          setUserDetails(data ? data[0] : userDetails);
          setShowForm(false);
          alert('User details inserted successfully!');
        }
      }
    } catch (error) {
      console.error('Error during user details update:', error);
    }
  };

  return (
    <Layout title="User Details" description="View and update user details">
      <div className="p-4">
        <h1 className="text-2xl text-center font-bold mb-4">User Details</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          {showForm ? 'Hide Form' : 'Edit User Details'}
        </button>
        {showForm && Object.keys(userDetails).length > 0 && (
          <div className="max-w-lg mx-auto my-4 p-4 border rounded shadow-sm">
            <input
              className="w-full p-2 border rounded my-2"
              type="text"
              name="username"
              placeholder="Username"
              value={userDetails ? userDetails.username || '' : ''}
              onChange={handleInputChange}
            />

            <input
              className="w-full p-2 border rounded my-2"
              type="text"
              name="first_name"
              placeholder="First Name"
              value={userDetails ? userDetails.first_name || '' : ''}
              onChange={handleInputChange}
            />

            <input
              className="w-full p-2 border rounded my-2"
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={userDetails ? userDetails.last_name || '' : ''}
              onChange={handleInputChange}
            />

            <input
              className="w-full p-2 border rounded my-2"
              type="text"
              name="address"
              placeholder="Address"
              value={userDetails ? userDetails.address || '' : ''}
              onChange={handleInputChange}
            />

            <input
              className="w-full p-2 border rounded my-2"
              type="text"
              name="phone_number"
              placeholder="Phone Number"
              value={userDetails ? userDetails.phone_number || '' : ''}
              onChange={handleInputChange}
            />

            <select
              className="w-full p-2 border rounded my-2"
              name="gender"
              value={userDetails ? userDetails.gender || '' : ''}
              onChange={handleInputChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <input
              className="w-full p-2 border rounded my-2"
              type="text"
              name="profile_picture"
              placeholder="Profile Picture"
              value={userDetails ? userDetails.profile_picture || '' : ''}
              onChange={handleInputChange}
            />

            <select
              className="w-full p-2 border rounded my-2"
              name="language"
              value={userDetails ? userDetails.language || '' : ''}
              onChange={handleInputChange}
            >
              <option value="English">English</option>
              <option value="French">French</option>
            </select>

            <button
              onClick={submitUserDetails}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full mt-4"
            >
              Update User Details
            </button>
          </div>
        )}
        <div className="max-w-lg mx-auto my-4 p-4 border rounded shadow-sm">
          {Object.keys(userDetails).length > 0 && (
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="py-2 font-semibold">User ID:</td>
                  <td>{userDetails?.user_id}</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Username:</td>
                  <td>{userDetails?.username || ''}</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">First Name:</td>
                  <td>{userDetails?.first_name || ''}</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Last Name:</td>
                  <td>{userDetails?.last_name || ''}</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Address:</td>
                  <td>{userDetails?.address || ''}</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Phone Number:</td>
                  <td>{userDetails?.phone_number || ''}</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Gender:</td>
                  <td>{userDetails?.gender || ''}</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Profile Picture:</td>
                  <td>{userDetails?.profile_picture || ''}</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Language:</td>
                  <td>{userDetails?.language || ''}</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default UserDetails;
