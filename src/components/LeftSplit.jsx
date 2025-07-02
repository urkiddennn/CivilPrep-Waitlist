import AvatarStack from "./AvatarStack";
import InputEmail from "./InputEmail";
import { IoBookOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
const LeftSplit = () => {
    return (
        <div className="sm:w-1/2 w-full h-full flex flex-col gap-5 justify-start items-start md:px-20 sm:px-10 px-5  md:py-24 sm:py-12 py-6">
            <div className="flex text-5xl justify-center items-center gap-5">
                <IoBookOutline className="text-blue-500" />
                <h1 className="font-extrabold ">CivilPrep</h1>
            </div>

            <AvatarStack numberProfile={1000} />
            <h1 className="sm:text-6xl text-4xl font-semibold my-6">
                Hello world, I don't have something to say
            </h1>
            <p className="text-lg text-gray-500">
                Whereas recognition of the inherent dignity
            </p>
            <InputEmail />
            <div className="flex flex-col justify-start items-start gap-3 w-full mt-10">
                <h1 className="text-3xl font-bold">Features</h1>
                <ul className="w-full flex flex-col gap-5">
                    <li className="w-full flex gap-3">
                        <div className=" w-auto flex justify-center items-start float-start gap-3">
                            <IoMdTime className="text-blue-500 size-7" />
                        </div>
                        <div className="flex flex-col text-start justify-center items-start">
                            <h1 className="text-2xl font-semibold">Time management</h1>
                            <p className="text-gray-500">
                                Hello wolrd this is the first section selected for the user
                            </p>
                        </div>
                    </li>
                    <li className="w-full flex gap-3">
                        <div className=" w-auto flex justify-center items-start float-start gap-3">
                            <IoMdTime className="text-blue-500 size-7" />
                        </div>
                        <div className="flex flex-col text-start justify-center items-start">
                            <h1 className="text-2xl font-semibold">Time management</h1>
                            <p className="text-gray-500">
                                Hello wolrd this is the first section selected for the user
                            </p>
                        </div>
                    </li>
                    <li className="w-full flex gap-3">
                        <div className=" w-auto flex justify-center items-start float-start gap-3">
                            <IoMdTime className="text-blue-500 size-7" />
                        </div>
                        <div className="flex flex-col text-start justify-center items-start">
                            <h1 className="text-2xl font-semibold">Time management</h1>
                            <p className="text-gray-500">
                                Hello wolrd this is the first section selected for the user
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default LeftSplit;
