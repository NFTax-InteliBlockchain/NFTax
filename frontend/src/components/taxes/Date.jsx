import { useState } from "react";

export function Date() {
  const [selectedDate, setSelectedDate] = useState("Jan/2023");

  return (
    <div>
        <select className="px-2 py-1 bg-transparent text-white border-b-[1px] text-xl" onChange={(e) => setSelectedDate(e.target.value)} value={selectedDate}>
            <option className="text-black">Jan/2023</option>
            <option className="text-black">Fev/2023</option>
            <option className="text-black">Mar/2023</option>
            <option className="text-black">Abr/2023</option>
        </select>
    </div>
  );
}
