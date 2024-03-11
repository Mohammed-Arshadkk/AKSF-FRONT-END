import React, { useState } from 'react';

function UserProfile() {
    const [username, setUsername] = useState('Mohammed Arshad');
    const [email, setEmail] = useState('arshad@gmail.com');
    const [bio, setBio] = useState('Hello World');
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        // Save user data (you can implement your save logic here)
        setIsEditing(false);
        alert('User profile updated successfully!');
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-md mx-auto bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gray-800 px-6 py-4">
                    <h2 className="text-lg font-bold">Profile Image</h2>
                </div>
                <div className="p-6">
                    <img
                     src="https://imgs.search.brave.com/i2aT4hY8YnG9pd31mXegE7NXSniLNUijYzWM1oP-PW0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjgw/Nzg2MDk0L3Bob3Rv/L21hbmNoZXN0ZXIt/dW5pdGVkLWtpbmdk/b20tZGF2aWQtYmVj/a2hhbS1vZi1tYW5j/aGVzdGVyLXVuaXRl/ZC1vbi1hLWNvbW1l/cmNpYWwtc2hvb3Qt/aW4uanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWhWY09FNnJm/SjczM0pJaWlpT3hC/cjJva1pUWHlaeV9w/d0pJcHM1eFAwX1E9" alt="User" className="rounded-full mx-auto mb-4"/>
                </div>
                <div className="bg-gray-800 px-6 py-4">
                    <h2 className="text-lg font-bold">User Profile</h2>
                </div>
                <div className="p-6">
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-400 font-bold mb-2">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            readOnly={!isEditing}
                            onChange={(e) => setUsername(e.target.value)}
                            className="block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-100 placeholder-gray-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-400 font-bold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            readOnly={!isEditing}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-100 placeholder-gray-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="bio" className="block text-gray-400 font-bold mb-2">Bio</label>
                        <textarea
                            id="bio"
                            rows="4"
                            value={bio}
                            readOnly={!isEditing}
                            onChange={(e) => setBio(e.target.value)}
                            className="block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-100 placeholder-gray-400"
                        />
                    </div>
                    <div className="flex justify-end">
                        {!isEditing && (
                            <button onClick={handleEdit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Edit
                            </button>
                        )}
                        {isEditing && (
                            <button onClick={handleSave} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Save
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
