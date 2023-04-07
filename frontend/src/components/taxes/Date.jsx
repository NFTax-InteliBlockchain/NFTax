import { useState } from "react";

export function Date() {
  const [selectedDate, setSelectedDate] = useState("Jan/2023");

  return (
    <div>
        <select className="px-2 py-1 bg-transparent text-white border-b-[1px]" onChange={(e) => setSelectedDate(e.target.value)} value={selectedDate}>
            <option>Jan/2023</option>
            <option>Fev/2023</option>
            <option>Mar/2023</option>
            <option>Abr/2023</option>
        </select>
    </div>
  );
}
