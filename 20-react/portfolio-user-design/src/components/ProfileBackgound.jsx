import { Briefcase, Star } from "lucide-react";
import React from "react";

const ProfileBackgound = () => {
    return (
        <>
            <div className="flex flex-col gap-10">
                <div>
                    <div className="text-gray-600 font-semibold relative">
                        <div className="flex gap-2 right-0 absolute">
                            Current Role
                            <Briefcase />
                        </div>
                    </div>
                    <div className="bg-gray-200 px-3 py-2 w-fit rounded-full mt-8 text-gray-700 font-bold">
                        Software Engineer
                    </div>
                </div>
                <div className="text-gray-600 font-semibold relative">
                    <div  className="flex gap-2 right-0 absolute">
                        Skills
                        <Star />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileBackgound;
