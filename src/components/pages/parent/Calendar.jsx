// import { useState } from "react";
import { Calendar as PrimeCalendar } from "primereact/calendar";

export default function Calendar() {
  //const [date, setDate] = useState(null);
  return (
    <div
      id="calendar"
      className="calendar min-h-[100vh] flex justify-around mb-32"
    >
      <div className="mt-20 mr-4 max-w-[600px] flex flex-col">
        <div className="border-[3px] mb-14 rounded-lg">
          <p className="font-Itim text-2xl p-4">
            You can choose from the calendar the date of ( report \ treatment
            plans) that you want to review.
          </p>
        </div>
        <div className="self-center">
          <PrimeCalendar inline showWeek />
        </div>
      </div>
      <div>
        <img src="/assets/parent/calendar-image.png" alt="" />
      </div>
    </div>
  );
}
