import AvatarStack from "./AvatarStack";
import InputEmail from "./InputEmail";
import { IoBookOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";

const LeftSplit = () => {
    return (
        <div className="sm:w-full md:w-1/2 w-full h-full flex flex-col md:gap-3 lg:gap-5 sm:gap-3 gap-3 justify-start items-start md:px-20 sm:px-10 px-5 md:py-24 sm:py-12 py-6 pb-7">
            <div className="flex text-5xl justify-center items-center gap-5 mb-2">
                <IoBookOutline className="text-blue-500" />
                <h1 className="font-extrabold ">CivilPrep</h1>
            </div>

            <AvatarStack numberProfile={1000} />
            <h1 className="sm:text-4xl md:text-5xl lg:text-6xl   text-4xl font-semibold my-3 md:my-6">
                Hello world, I don't have something to say
            </h1>
            <p className="text-lg text-gray-500 mb-2">
                Whereas recognition of the inherent dignity
            </p>
            <div className="w-full flex flex-col items-start">
                <InputEmail />
            </div>
            <div className="flex flex-col justify-start items-start gap-4 w-full mt-12">
                <h1 className="text-3xl font-bold mb-2">Features</h1>
                <ul className="w-full flex flex-col lg:gap-6 md:gap-4 gap-3">
                    <li className="w-full flex gap-3">
                        <div className="w-auto flex justify-center items-start float-start gap-3">
                            {/* Unique icon for Design */}
                            <span className="bg-pink-100 rounded-full p-2">
                                <svg className="text-pink-500" width="28" height="28" fill="none" viewBox="0 0 24 24">
                                    <rect x="3" y="3" width="7" height="7" rx="2" fill="currentColor" />
                                    <rect x="14" y="3" width="7" height="7" rx="2" fill="currentColor" opacity="0.5" />
                                    <rect x="3" y="14" width="7" height="7" rx="2" fill="currentColor" opacity="0.5" />
                                    <rect x="14" y="14" width="7" height="7" rx="2" fill="currentColor" />
                                </svg>
                            </span>
                        </div>
                        <div className="flex flex-col text-start justify-center items-start">
                            <h1 className="text-2xl font-semibold">Modern Design</h1>
                            <p className="text-gray-500">
                                Clean, intuitive, and responsive interface for a seamless study experience across all devices.
                            </p>
                        </div>
                    </li>
                    <li className="w-full flex gap-3">
                        <div className="w-auto flex justify-center items-start float-start gap-3">
                            {/* Unique icon for Practice */}
                            <span className="bg-blue-100 rounded-full p-2">
                                <svg className="text-blue-500" width="28" height="28" fill="none" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                                    <path d="M8 12l2.5 2.5L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </div>
                        <div className="flex flex-col text-start justify-center items-start">
                            <h1 className="text-2xl font-semibold">Interactive Practice</h1>
                            <p className="text-gray-500">
                                Practice with real exam-style questions and instant feedback to boost your confidence.
                            </p>
                        </div>
                    </li>
                    <li className="w-full flex gap-3">
                        <div className="w-auto flex justify-center items-start float-start gap-3">
                            {/* Unique icon for Analytics */}
                            <span className="bg-green-100 rounded-full p-2">
                                <svg className="text-green-500" width="28" height="28" fill="none" viewBox="0 0 24 24">
                                    <rect x="4" y="10" width="3" height="10" rx="1.5" fill="currentColor" />
                                    <rect x="10.5" y="6" width="3" height="14" rx="1.5" fill="currentColor" opacity="0.7" />
                                    <rect x="17" y="2" width="3" height="18" rx="1.5" fill="currentColor" opacity="0.4" />
                                </svg>
                            </span>
                        </div>
                        <div className="flex flex-col text-start justify-center items-start">
                            <h1 className="text-2xl font-semibold">Progress Analytics</h1>
                            <p className="text-gray-500">
                                Track your improvement with detailed analytics and personalized study recommendations.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default LeftSplit;
