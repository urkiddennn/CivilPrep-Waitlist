const InputEmail = () => {
  return (
    <div className="w-auto h-12 flex justify-center items-center bg-gray-200 rounded-full pl-5 pr-1">
      <input
        type="text"
        placeholder="Email address"
        className="w-full h-full outline-none"
      />
      <button className="btn rounded-full">Get Notified</button>
    </div>
  );
};

export default InputEmail;
