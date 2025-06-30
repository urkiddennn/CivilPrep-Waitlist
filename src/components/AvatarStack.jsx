import PropTypes from "prop-types";

const AvatarStack = ({ numberProfile }) => {
  return (
    <div className="flex justify-center items-center my-5">
      <div className="avatar-group -space-x-6">
        <div className="avatar">
          <div className="w-10 h-10 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-10 h-10 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-10 h-10 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
          </div>
        </div>

        <div className="avatar">
          <div className="w-10 h-10 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
          </div>
        </div>

        <div className="avatar">
          <div className="w-10 h-10 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
          </div>
        </div>
      </div>
      <span className="font-bold text-lg">{numberProfile}+</span>
      <p className="text-gray-500 text-lg">takers are now waiting</p>
    </div>
  );
};

AvatarStack.prototypes = {
  numberProfile: PropTypes.number,
};

export default AvatarStack;
