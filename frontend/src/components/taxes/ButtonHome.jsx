
export function ButtonHome(props) {

   
    return (
        
        <button className="bg-button-darkblue text-slate-50 p-4 rounded-lg hover:bg-sky-700 transform transition hover:scale-103 flex flex-col justify-center items-center">
                <img src={props.image} className="pb-1"></img>
                <p className="text-xs">{props.text}</p>
        </button>
        
    )
}