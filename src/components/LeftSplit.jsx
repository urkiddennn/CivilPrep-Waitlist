import AvatarStack from "./AvatarStack";

const LeftSplit = () => {
  return (
    <div className="w-1/2 h-full flex flex-col justify-start items-start px-20 py-24">
      <h1>Hello this is the elft side</h1>
      <AvatarStack numberProfile={1000} />
    </div>
  );
};

export default LeftSplit;
