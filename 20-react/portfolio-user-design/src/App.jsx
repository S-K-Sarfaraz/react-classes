import React from "react";
import BackgoundImage from "./components/BackgoundImage";
import ProfileImage from "./components/ProfileImage";
import ProfileName from "./components/ProfileName";
import ProfileButton from "./components/ProfileButton";
import ProfileBackgound from "./components/ProfileBackgound";

const App = () => {
    return (
        <div className="bg-gray-950 text-white p-5 h-screen flex justify-center items-center ">
            <div className="m-20 h-[80%] w-[70%] bg-amber-200 rounded-xl">
                <BackgoundImage />
                <div className="m-4">
                    <div className="bg-white rounded-full p-2 absolute top-38">
                        <ProfileImage />
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-800 mt-18">
                            <ProfileName />
                        </div>
                        <ProfileBackgound/>
                    </div>
                        <div className="mt-1.5 flex gap-3">
                            <ProfileButton
                                btnText="Edit Profile"
                                btnColor="bg-gray-800"
                                text="text-gray-200"
                            />
                            <ProfileButton
                                btnText="Settings"
                                btnColor="bg-gray-200"
                                text="text-gray-800"
                            />
                        </div>
                </div>
            </div>
        </div>
    );
};

export default App;
