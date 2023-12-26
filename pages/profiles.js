import React, { useEffect, useState } from "react";
import { useUser } from "../components/UserContext";
import { supabase } from "../utils/supabaseClients";
import { useRouter } from "next/router";

const ProfilesPage = () => {
  const { user } = useUser();
  const [profileData, setProfileData] = useState(null);
  const router = useRouter();

  const navigateToDashboard = () => {
    router.push("/dashboard");
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        if (user) {
          const { data: authData, error: authError } = await supabase
            .from("authentications")
            .select(
              "id, email, phone_number, provider, created_at, last_sign_in_at, app_metadata"
            )
            .eq("id", user.id)
            .single();

          if (authError) {
            console.error("Error fetching authentication data:", authError);
          } else if (authData) {
            setProfileData(authData);
          } else {
            console.error("No authentication data found for the user:", user);
          }
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, [user]);

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">User Profile</h1>
      {user ? (
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <p className="text-xl mb-4">
            <span className="font-semibold">Username:</span> {user.username}
          </p>
          <p className="text-xl mb-4">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p className="text-xl mb-4">
            <span className="font-semibold">Account Creation Date:</span> {user.biography}
          </p>
          <button
            onClick={navigateToDashboard}
            className="bg-blue-500 text-white py-2 px-4 rounded-full mt-4 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
          >
            Go to Dashboard
          </button>
        </div>
      ) : (
        <p className="text-2xl text-center">Not Connected</p>
      )}
    </div>
  );
  
  
  
};

export default ProfilesPage;
