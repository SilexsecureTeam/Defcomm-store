// Redesigned Profile Page with Editable State Handling
import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { MdCameraAlt, MdEdit, MdSave, MdSecurity } from "react-icons/md";
import { FaLock, FaSpinner } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { AuthContext } from "../context/AuthContext";
import { maskPhone, maskEmail } from "../utils/formmaters";
import ProfileField from "../Components/store/ProfileField";
export default function Profile() {
  const { profileMutation } = useAuth();
  const { authDetails } = useContext(AuthContext);
  const user = authDetails?.user;

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [developerName, setDeveloperName] = useState("");
  const [website, setWebsite] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");
  const [showEmail, setShowEmail] = useState(true);
  const [showPhone, setShowPhone] = useState(true);
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    if (user) {
      setFullName(user.name || "");
      setEmail(user.email || "");
      setPhone(user.phone || "");
      setAddress(user.address || "");
      setDeveloperName(user.developer_display_name || "");
      setWebsite(user.website || "");
      setPreviewImage(
        user?.avatar ? `${import.meta.env.VITE_BASE_URL}${user.avatar}` : ""
      );
    }
  }, [user]);

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("name", fullName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("gender", gender);
    formData.append("dob", dob);
    formData.append("enable_2fa", 1);
    if (profileImage) formData.append("avatar", profileImage);

    await profileMutation.mutateAsync(formData);
    setIsEditing(false);
  };

  return (
    <motion.div className="bg-white rounded-2xl shadow-md p-6 space-y-8">
      <div className="flex items-center gap-4">
        <div className="relative w-24 h-24 min-w-24">
          {/* Avatar Image */}
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#759719] shadow-md">
            {previewImage ? (
              <img
                src={previewImage}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <MdCameraAlt size={40} className="text-gray-500" />
              </div>
            )}
          </div>

          {/* Camera Icon */}
          <label className="absolute bottom-0 right-0 bg-[#36460A] p-2 rounded-full cursor-pointer z-20 shadow-md hover:bg-[#2e360c] transition">
            <MdCameraAlt className="text-white" size={16} />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setProfileImage(file);
                  setPreviewImage(URL.createObjectURL(file));
                  setIsEditing(true);
                }
              }}
            />
          </label>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#101500]">{fullName}</h2>
          <p className="text-sm text-gray-500">
            {showEmail ? email : maskEmail(email)}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <ProfileField
          label="Full Name"
          value={fullName}
          onChange={setFullName}
          isEditing={isEditing}
        />
        <ProfileField
          label="Email"
          value={showEmail ? email : maskEmail(email)}
          icon={<FaLock size={14} />}
          isReadOnly
          toggleVisibility={() => setShowEmail(!showEmail)}
        />
        <ProfileField
          label="Phone"
          value={showPhone ? phone : maskPhone(phone)}
          onChange={setPhone}
          isEditing={isEditing}
          toggleVisibility={() => setShowPhone(!showPhone)}
        />
        <ProfileField
          label="Address"
          value={address}
          onChange={setAddress}
          isEditing={isEditing}
        />
        <ProfileField
          label="Date of Birth"
          type="date"
          value={dob}
          onChange={setDob}
          isEditing={isEditing}
        />
        <ProfileField
          label="Gender"
          value={gender}
          onChange={setGender}
          isEditing={isEditing}
          type="select"
          options={["Male", "Female"]}
        />
      </div>

      <div className="flex items-center justify-between border-t pt-4">
        <span className="text-gray-600 font-medium flex items-center gap-2">
          <MdSecurity size={16} /> Two-Factor Authentication (2FA)
        </span>
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
          Enabled
        </span>
      </div>

      <div className="flex gap-3 pt-4">
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="cursor-pointer bg-[#759719] text-white px-6 py-2 rounded hover:bg-[#101500] transition"
          >
            <MdEdit className="inline mr-1" /> Edit
          </button>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300 transition"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={profileMutation.isPending}
              className="cursor-pointer bg-[#759719] text-white px-6 py-2 rounded hover:bg-[#101500] transition flex items-center gap-2"
            >
              {profileMutation.isPending ? (
                <FaSpinner className="animate-spin" />
              ) : (
                <MdSave size={18} />
              )}
              {profileMutation.isPending ? "Saving..." : "Save"}
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
}
