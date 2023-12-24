import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { useUser } from '../components/UserContext';
import { supabase } from '../utils/supabaseClients';
import { useRouter } from 'next/router';

const ProfilesPage = () => {
  const { user } = useUser();
  const [profileData, setProfileData] = useState(null);
  const router = useRouter();

  const navigateToDashboard = () => {
    router.push('/dashboard');
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        if (user) {
          const { data: authData, error: authError } = await supabase
            .from('authentications')
            .select('id, email, phone_number, provider, created_at, last_sign_in_at, app_metadata')
            .eq('id', user.id)
            .single();

          if (authError) {
            console.error('Error fetching authentication data:', authError);
          } else if (authData) {
            setProfileData(authData);
          } else {
            console.error('No authentication data found for the user:', user);
          }
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, [user]);

  return (
    <Layout title="User Profile" description="View your profile information">
      <div className="container mx-auto mt-10 p-4">
        <h1 className="text-2xl font-semibold mb-4">User Profile</h1>
        {user ? (
          <>
            <p>Username: {user.user_metadata.full_name}</p>
            <p>Email: {user.email}</p>
            <p>Account Creation Date: {user.created_at}</p>
            <p>User ID: {user.id}</p>
            <button
              onClick={navigateToDashboard}
              className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
            >
              Go to Dashboard
            </button>
          </>
        ) : (
          <p>Not Connected</p>
        )}
      </div>
    </Layout>
  );
};

export default ProfilesPage;
