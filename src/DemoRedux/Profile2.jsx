import axios from "axios";
import { useEffect, useState } from "react";
import { http, TOKEN } from "../utils/setting";
import { useNavigate } from "react-router-dom";

const Profile2 = () => {
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();
  const getProfileAPI = async () => {
    try {
      // const res = await axios({
      //   url: "https://apistore.cybersoft.edu.vn/api/Users/getProfile",
      //   method: "POST",
      //   headers: {
      //     Authorization: localStorage.getItem(TOKEN),
      //   },
      // });
      const res = await http.post("/api/Users/getProfile");
      console.log(res.data.content);
      setProfile(res.data.content);
    } catch (err) {
      console.log(err);
      //thất bại thì sẽ chuyển bại
      alert("Đăng nhập để vào profile");
      navigate("/loginWithFormik");
    }
  };
  useEffect(() => {
    getProfileAPI();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          User Profile
        </h2>
        <div className="space-y-4">
          {/* Email */}
          <div className="flex justify-between">
            <span className="text-gray-700 font-bold">Email:</span>
            <span className="text-gray-600">{profile.email}</span>
          </div>
          {/* Name */}
          <div className="flex justify-between">
            <span className="text-gray-700 font-bold">Name:</span>
            <span className="text-gray-600">{profile.name}</span>
          </div>
          {/* Gender */}
          <div className="flex justify-between">
            <span className="text-gray-700 font-bold">Gender:</span>
            <span className="text-gray-600">{profile.gender ? "Nam" : "Nữ"}</span>
          </div>
          {/* Phone */}
          <div className="flex justify-between">
            <span className="text-gray-700 font-bold">Phone:</span>
            <span className="text-gray-600">{profile.phone}</span>
          </div>
        </div>
        {/* Edit Button */}
        <div className="mt-6 flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile2;
