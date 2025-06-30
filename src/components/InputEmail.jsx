const InputEmail = () => {
  return (
    <div className="sm:w-1/2 w-full h-12 flex justify-center items-center bg-gray-200 rounded-full pl-6 pr-1 mb-3">
      <input
        type="text"
        placeholder="Email address"
        className="w-full h-full outline-none"
      />
      <button className="btn rounded-full hover:bg-gray-900 hover:text-white">
        Get Notified
      </button>
    </div>
  );
};

export default InputEmail;
