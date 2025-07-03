import React, { useEffect, useState } from "react";
import { Pencil, Save, X, LogOut } from "lucide-react";

const MyProfile = () => {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    city: "",
    gender: "",
    bio: "",
    profileImage: null,
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [error, setError] = useState("");

  const token = JSON.parse(localStorage.getItem("user"))?.token;

  useEffect(() => {
    const fetchProfile = async () => {
      if (!token) {
        window.location.href = "/login";
        return;
      }

      try {
        const res = await fetch("http://localhost:5000/api/users/my-profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch profile");

        const data = await res.json();
        setUser(data);
        setFormData({
          fullName: data.fullName || "",
          email: data.email || "",
          city: data.city || "",
          gender: data.gender || "",
          bio: data.bio || "",
          profileImage: null,
        });
        setPreviewImage(null);
      } catch (err) {
        console.error("Error fetching profile:", err.message);
        setError("Unable to fetch profile. Please log in again.");
      }
    };

    fetchProfile();
  }, [token]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "profileImage") {
      const file = files[0];
      setFormData((prev) => ({ ...prev, profileImage: file }));
      if (file) {
        setPreviewImage(URL.createObjectURL(file));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = async () => {
    setError("");
    const form = new FormData();

    for (const key in formData) {
      if (formData[key]) {
        form.append(key, formData[key]);
      }
    }

    try {
      const res = await fetch("http://localhost:5000/api/users/update-profile", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: form,
      });

      const updated = await res.json();

      if (!res.ok) {
        throw new Error(updated.message || "Failed to update profile");
      }

      // Proper image URL handling
      setUser((prevUser) => ({
        ...prevUser,
        ...updated,
        profileImage:
          updated.profileImage?.startsWith("http") || updated.profileImage?.startsWith("/")
            ? updated.profileImage
            : `/uploads/profile/${updated.profileImage}`,
      }));

      setEditing(false);
      setPreviewImage(null);
    } catch (err) {
      console.error("Update error:", err.message);
      setError("Update failed. Please try again.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="text-center text-gray-600 text-lg font-medium">
          {error || "Loading profile..."}
        </div>
      </div>
    );
  }

  // Image preview or fallback with cache-busting
 const imageUrl = previewImage
  ? previewImage
  : user.profileImage
  ? user.profileImage.startsWith("http")
    ? user.profileImage
    : `http://localhost:5000${user.profileImage}`
  : "https://via.placeholder.com/150";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-10 relative">
        <button
          onClick={handleLogout}
          className="absolute top-6 right-6 flex items-center gap-2 text-sm text-red-600 hover:text-red-800"
        >
          <LogOut size={16} /> Logout
        </button>

        <div className="flex flex-col items-center mb-6">
          <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-purple-300 shadow-md mb-4">
            <img
              src={imageUrl}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold text-purple-700">
            {editing ? "Edit Your Profile ✍️" : "My Profile 💖"}
          </h1>
        </div>

        {error && (
          <div className="text-red-600 text-sm text-center mb-4">{error}</div>
        )}

        {editing ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                disabled
                className="w-full px-4 py-2 rounded-lg border border-purple-300 bg-gray-100 text-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-400"
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Profile Image</label>
              <input
                type="file"
                name="profileImage"
                accept="image/*"
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-purple-300"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Bio</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-400 resize-none"
              ></textarea>
            </div>
            <div className="md:col-span-2 flex justify-end gap-4 mt-4">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-purple-700 transition"
              >
                <Save size={18} /> Save
              </button>
              <button
                onClick={() => {
                  setEditing(false);
                  setPreviewImage(null);
                }}
                className="flex items-center gap-2 bg-gray-400 text-white px-5 py-2 rounded-full shadow-md hover:bg-gray-500 transition"
              >
                <X size={18} /> Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-800">
            <p><strong>👤 Name:</strong> {user.fullName}</p>
            <p><strong>📧 Email:</strong> {user.email}</p>
            <p><strong>🏙️ City:</strong> {user.city || "Not provided"}</p>
            <p><strong>⚧ Gender:</strong> {user.gender || "Not specified"}</p>
            <div className="md:col-span-2">
              <p><strong>📝 Bio:</strong> {user.bio || "No bio available"}</p>
            </div>

            <div className="md:col-span-2 flex justify-end mt-6">
              <button
                onClick={() => setEditing(true)}
                className="flex items-center gap-2 bg-purple-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-purple-700 transition"
              >
                <Pencil size={18} /> Edit Profile
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
