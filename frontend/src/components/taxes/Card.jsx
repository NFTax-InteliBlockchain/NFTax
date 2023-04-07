export function Card() {
    return (
        <div className="w-full h-20 bg-[#fffefe] shadow-md flex items-center justify-between">
            <div className="bg-green-500 w-1 h-full"></div>
            <div className="flex flex-col bg-white rounded-2 items-center font-bold shadow-sm py-2">
                <p>12</p>
                <p>Dez</p>
            </div>
            <div className="flex flex-col items-start justify-start py-2">
                <p>BRKM5</p>
                <p className="text-sm">Braskem SA</p>
            </div>
            <p className="pr-8">R$ 30.000,00</p>
        </div>
    )
}