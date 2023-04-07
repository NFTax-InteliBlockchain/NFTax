import { Button } from '../components/taxes/Button'


export function Connect() {
    return (
        <div className="bg-darkblue h-screen ">
            <div className="max-w-s pl-6 pt-6 mx-auto pb-12 ">
                <img src='./arrow.svg' className=""></img>
                <img src='./money.svg' className="pt-36"></img>
                <h2 className="font-montserrat font-medium pt-4 text-slate-50">NFTax</h2>
                <h2 className="font-montserrat font-bold text-slate-50">Sua vida fiscal simplificada</h2>
                <h3  className="text-slate-50 pt-16 pb-6">Conecte os seus dados do Real Digital</h3>
                <Button text="Conectar" />
            
            </div>   
            <div className='bg-white max-w-s pl-6 w-1/4'>
                    <h2 className="font-montserrat font-bold pt-4 ">Por que fazer isso?</h2>
                    <p> • Sem dor de cabeça com imposto de renda</p>
                    <p> • Pagamento facilitado em blockchain</p>
                    <p> • Geração de relatórios</p>
                </div>   
        </div>
    )
}