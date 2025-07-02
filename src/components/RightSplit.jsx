import bg from "../../bg.png";
import { FaHeart } from 'react-icons/fa';
import { useState } from 'react';
import gcashQR from "../../gcash.jpg";

const RightSplit = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="md:w-1/2 w-full h-full overflow-clip flex flex-col gap-4 justify-start items-start md:px-20 sm:px-10 px-5  md:py-24 sm:py-12 py-6 relative bg-blue-50">
            <h1 className="font-bold sm:text-2xl text-xl">
                The proposed solution is to develop a Software-as-a-Service (SaaS)
                platform that helps users prepare for the Civil Service Exam by
                providing comprehensive study modules, topic-based learning materials,
                and interactive practice questions to enhance their knowledge and
                improve their chances of passing.
            </h1>
            <h1 className="text-xl font-bold mt-10">- Richard Banguiz </h1>
            <p className="text-xl text-gray-500">CEO and Founder</p>
            <img
                src={bg}
                alt="background"
                className="md:absolute sm:-bottom-20 -bottom-14 sm:left-96 -right-46 rounded-3xl border-4 md:scale-150"
            />
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => setShowModal(true)}
                    className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200"
                >
                    <FaHeart className="text-xl" />
                    Donate via GCash
                </button>
            </div>
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-transparent">
                    <div className="bg-white rounded-lg p-6 flex flex-col items-center relative w-80 shadow-xl">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
                            onClick={() => setShowModal(false)}
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-bold mb-4 text-center">Donate via GCash</h2>
                        <img src={gcashQR} alt="GCash QR Code" className="w-48 h-48 object-contain mb-4" />
                        <p className="text-gray-700 text-center">Scan this QR code with your GCash app to donate. Thank you for your support!</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RightSplit;
