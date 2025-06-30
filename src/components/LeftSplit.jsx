import AvatarStack from "./AvatarStack";
import InputEmail from "./InputEmail";
import { IoBookOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
const LeftSplit = () => {
  return (
    <div className="w-1/2 h-full flex flex-col gap-4 justify-start items-start px-20 py-24">
      <div className="flex text-3xl justify-center items-center gap-5">
        <IoBookOutline className="text-blue-500" />
        <h1>CivilPrep</h1>
      </div>

      <AvatarStack numberProfile={1000} />
      <h1 className="text-6xl font-semibold">
        Hello world, I don't have something to say
      </h1>
      <p className="text-lg text-gray-500">
        Whereas recognition of the inherent dignity
      </p>
      <InputEmail />
      <div className="flex flex-col justify-start items-start gap-3 w-auto">
        <h1 className="text-lg font-semibold">Features</h1>
        <div className="flex justify-start items-start float-start">
          <div className="bg-blue-200 rounded-full w-auto">
            <IoMdTime className="text-blue-500" />
          </div>
          <div>
            <h1>Feature 1</h1>
            <p>Hello this is the feature number 1 for this Saas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSplit;
