import bg from "../../bg.png";

const RightSplit = () => {
  return (
    <div className="sm:w-1/2 w-full h-full flex flex-col gap-4 justify-start items-start md:px-20 sm:px-10 px-5  md:py-24 sm:py-12 py-6 relative bg-blue-50">
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
        alt=""
        className="absolute sm:-bottom-20 -bottom-14 sm:left-96 -right-46 rounded-3xl border-4 sm:scale-150 scale-75"
      />
    </div>
  );
};

export default RightSplit;
