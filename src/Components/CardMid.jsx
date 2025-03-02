const CardMid = ({ date, title }) => {
  return (
    <div className="relative w-2xs flex flex-col items-center h-[28rem]">
      <div className="bg-cover bg-[url('/images/card2.png')] w-full h-[22rem] rounded-2xl"></div>
      <div className="absolute bg-white rounded-xl w-[90%] h-[12rem] bottom-[0]  shadow-2xl flex flex-col justify-between p-5">
        <p className="text-sm flex items-center">
          <img src="/images/calendar.svg" alt="" />
          {date}
        </p>
        <h3 className="font-bold text-lg md:text-xl">{title}</h3>
        <p className="text-sm md:text-md cursor-pointer hover:underline">
          Read More
        </p>
      </div>
    </div>
  );
};

export default CardMid;
