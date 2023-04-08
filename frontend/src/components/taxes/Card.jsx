import moment from 'moment';

export function Card(props) {

    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Septembro", "Outubro", "Novembro", "Dezembro"];

    return (
        <div onClick={props.onClick} className="w-full h-20 bg-[#fffefe] shadow-md flex items-center  gap-5 relative">

            <div className={props.paid ? "bg-green-500 w-1 h-full absolute left-0" : "bg-red-500 w-1 h-full absolute left-0"} ></div>
            <div className="flex flex-col bg-white rounded-2 items-center font-bold shadow-sm py-2 pl-5">
                <p>{moment(props.date).date()}</p>
                <p>{monthNames[moment(props.date).month()].substring(0, 3) + "/" + String(moment(props.date).year()).substring(2, 4)}</p>
            </div>
            <div className="flex flex-col items-start justify-start py-2 w-40 pl-2">
                <p>{props.abbreviation}</p>
                <p className="text-sm">{props.name}</p>
            </div>
            <p className="pr-8">R$ {(props.taxes / 100 * props.value).toFixed(2)}</p>
        </div>
    )
}