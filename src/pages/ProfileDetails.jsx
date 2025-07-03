import { useLocation, useParams } from "react-router-dom";

const ProfileDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const profile = location.state;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4 text-purple-700">Profile Details</h1>
      {profile ? (
        <div className="bg-white p-6 rounded-xl shadow-xl max-w-md mx-auto">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-40 h-40 rounded-full mb-4 mx-auto shadow-lg border"
          />
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Age:</strong> {profile.age}</p>
          <p><strong>Location:</strong> {profile.location}</p>
          <p><strong>Member ID:</strong> {id}</p>
          {/* Add more fields if needed */}
        </div>
      ) : (
        <p className="text-red-500 text-center">No profile data found. Try accessing from dashboard.</p>
      )}
    </div>
  );
};

export default ProfileDetails;
