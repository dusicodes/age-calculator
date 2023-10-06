import { useState } from "react";

function AgeCalculator() {
  const [day, setDay] = useState<string>();
  const [month, setMonth] = useState<string>();
  const [year, setYear] = useState<string>();

  // const handleValidation = () => {};

  // const handleCalculateAge = () => {

  //   //check if the dates are valid on each inpuit 
    
  //   const date = new Date();
    
  //   let currentDay = date.getDate();
  //   let currentMonth = date.getMonth() + 1;
  //   let currentYear = date.getFullYear();
    
  //   let d = Number(day)
  //   let m = Number(month);
  //   let y = Number(year);

  //   d = 
    
    
  //   //clear the boxes
  // }



  const validationMessage =
    day === "" || month === "" || year === "" ? "this field is required" : "";

  const validationClass = validationMessage
    ? "p-4 w-[150px] rounded-lg border-[2px] border-grey text-black text-3xl border-red-500"
    : "p-4 w-[150px] rounded-lg border-[2px] border-grey text-black text-3xl";
  //add ternary for when validation = false text is red
  return (
    <div className=" bg-white h-[700px] w-[900px] flex flex-col rounded-3xl rounded-br-[250px] p-14 ">
      <div className="flex flex-row gap-10 text-gray-500 text-sm font-semibold tracking-[5px] text uppercase">
        <div className="flex flex-col ">
          <label htmlFor="day-input"> Day</label>
          <input
            maxLength={2}
            onChange={(e) => setDay(e.target.value)}
            value={day}
            placeholder="DD"
            className={validationClass}
            type="number"
          />
          <small className="text-xs lowercase tracking-normal italic font-thin text-red-500">
            {validationMessage}
          </small>
        </div>
        <div className="flex flex-col">
          <label placeholder="DD" htmlFor="month-input">
            Month
          </label>
          <input
            maxLength={2}
            onChange={(e) => setMonth(e.target.value)}
            value={month}
            placeholder="MM"
            className={validationClass}
            type="text"
          />
          <small className="text-xs lowercase tracking-normal italic font-thin text-red-500">
            {validationMessage}
          </small>
        </div>
        <div className="flex flex-col">
          <label htmlFor="day-input">Year</label>
          <input
            maxLength={4}
            onChange={(e) => setYear(e.target.value)}
            value={year}
            placeholder="YYYY"
            className={validationClass}
            type="text"
          />
          <small className="text-xs lowercase tracking-normal italic font-thin text-red-500">
            {validationMessage}
          </small>
        </div>
      </div>
      <div className="relative w-auto">
        <hr className="mt-20" />
        <img
          // onClick={handleCalculateAge}
          className="w-[100px] h-[100px] bg-violet-600 rounded-full p-5 z-10 absolute right-3 top-6 "
          src="public/images/icon-arrow.svg"
          alt=""
        />
      </div>
      <div className="text-[125px] leading-[105px] flex flex-col justify-self-end mt-10 italic font-extrabold">
        <strong>- -years</strong>
        <strong>- -month</strong>
        <strong>- -days</strong>
      </div>
    </div>
  );
}

export default AgeCalculator;
