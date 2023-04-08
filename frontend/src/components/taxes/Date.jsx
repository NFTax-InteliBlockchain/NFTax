import { useState } from "react";

export function Date(props) {

  return (
    <div>
        <select className="px-2 py-1 bg-transparent text-white border-b-[1px] text-xl" onChange={(e) => props.setSelectedMonth(e.target.value)} value={props.selectedMonth}>
            <option className="text-black" value={1}>Jan/2023</option>
            <option className="text-black" value={2}>Fev/2023</option>
            <option className="text-black" value={3}>Mar/2023</option>
            <option className="text-black" value={4}>Abr/2023</option>
        </select>
    </div>
  );
}
