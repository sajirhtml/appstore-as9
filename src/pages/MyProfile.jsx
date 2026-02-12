import { use, useState } from "react";
import { toast } from "react-toastify";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AuthContext } from "../provider/AuthProvider";

const MyProfile = () => {
  const { user, updatedUser } = use(AuthContext);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    updatedUser({
      displayName: displayName,
      photoURL: photoURL,
    });
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header>
        <Navbar></Navbar>
      </header>
      <section className="flex flex-col">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row gap-8">
            {user?.photoURL && (
              <img
                src={user.photoURL}
                className="max-w-sm rounded-lg shadow-2xl"
                alt="User profile"
              />
            )}
            <div>
              <h1 className="text-5xl font-bold">
                {user?.displayName || "User"}
              </h1>
              <ul className="py-6 list-disc list-inside wrap-anywhere">
                <li>Email: {user?.email}</li>
                <li>Photo URL: {user?.photoURL}</li>
                <li>UID: {user?.uid}</li>
                {user?.metadata && (
                  <>
                    <li>Last Login: {user.metadata.lastSignInTime}</li>
                    <li>Account Creation time: {user.metadata.creationTime}</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-screen flex justify-center items-center bg-base-200">
        <div className="card bg-base-100 shadow-xl p-6 w-full max-w-md mb-10">
              <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
              <form onSubmit={handleUpdateProfile} className="space-y-4">
                <input
                  type="text"
                  placeholder="New Display Name"
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="input input-bordered w-full"
                />
                <input
                  type="url"
                  placeholder="New PhotoURL"
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="input input-bordered w-full"
                />
                <button type="submit" className="btn btn-primary w-full">
                  Save Changes
                </button>
              </form>
            </div>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MyProfile;
