function AgeCalculator() {
  return (
    <div className=" bg-white h-[700px] w-[900px] flex flex-col rounded-3xl rounded-br-[250px] p-14 ">
      <div className="flex flex-row gap-10 text-gray-500 text-sm font-semibold tracking-[5px] text uppercase">
        <div className="flex flex-col ">
          <label htmlFor="day-input"> Day</label>
          <input
            maxLength={2}
            placeholder="DD"
            className="p-4 w-[150px] rounded-lg border-[2px] border-grey text-black text-3xl "
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label placeholder="DD" htmlFor="month-input">
            Month
          </label>
          <input
            maxLength={2}
            placeholder="MM"
            className="p-4 w-[150px] rounded-lg border-[2px] border-grey text-black text-3xl "
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="day-input">Year</label>
          <input
            maxLength={4}
            placeholder="YYYY"
            className="p-4 w-[150px] rounded-lg border-[2px] border-grey text-black text-3xl "
            type="text"
          />
        </div>
      </div>
      <div className="relative w-auto">
        <hr className="mt-20" />
        <img
          className="w-[100px] h-[100px] bg-violet-600 rounded-full p-5 z-10 absolute right-3 top-6 "
          src="public/images/icon-arrow.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default AgeCalculator;
