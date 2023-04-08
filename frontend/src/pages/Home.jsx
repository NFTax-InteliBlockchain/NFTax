import { useNavigate } from 'react-router-dom'
import { ButtonHome } from '../components/taxes/ButtonHome'


export function Home() {
    const navigate = useNavigate();

    function handleNFTaxClick() {
        navigate('/connect');
      }

      function handleClick() {
        navigate('/taxes')
      }
    
    return (
        <div className="bg-darkblue h-screen">
            <div className="max-w-s pl-6 pr-6 pt-6 pb-12">
                <div className='flex justify-between pb-8'>
                    <img className="text-white" src='./iconbrb.svg' />
                    <div className='bg-button-darkblue rounded-full flex justify-center items-center pl-4 pr-4 '>
                        <p className='text-white text-xs pr-4'>Ag. 100 CC. 100.051.903-9</p>
                        <img className="w-3" src="./dropdown.svg"></img>
                    </div>
                    <img className="text-white w-8" src='./logout.svg' />
                </div>

                <h1 className="text-slate-50 font-bold">Olá, Robson!</h1>
                <h2 className="text-slate-50 font-medium">Seu saldo atual é</h2>
                <h1 className="font-bold text-lightblue">R$ 5.000,00</h1>

                <p className='pt-8 text-xs text-slate-50'>MEUS ATALHOS</p>
                <div className="grid grid-cols-3 grid-flow-row gap-2 pt-2">
                    <ButtonHome onClick={handleNFTaxClick} image="./nftax.svg" text="NFTax"/>
                    <ButtonHome onClick={handleClick} image="./qrcode.svg" text="BRB Code" />
                    <ButtonHome image="./handmoney.svg" text="Crédito Pessoal" />
                    <ButtonHome image="./graphic.svg" text="Aplicar em Fundos" />
                    <ButtonHome image="./graphic.svg" text="Aplicar em CDB" />
                    <ButtonHome image="./card.svg" text="Pagamento Fatura BRB" />
                    <ButtonHome image="./transfer.svg" text="Transferência Eletrônica" />
                    <ButtonHome image="./papermoney.svg" text="Consulta Agendamentos" />
                    <ButtonHome image="./papermoney.svg" text="Debito Automatico" />
                </div>




            </div>

            <div className='bg-white pl-6 pr-6 pt-6 pb-6 rounded-t-lg flex justify-around absolute bottom-0 w-full'>
                <div className=" rounded-lg flex flex-col justify-center items-center">
                    <img src="./menu.svg" className="w-6" />
                    <p className="text-xs">Menu</p>

                </div>
                <div className=" rounded-lg flex flex-col justify-center items-center">
                    <img src="./home.svg" className="w-6" />
                    <p className="text-xs text-darkblue">Início</p>

                </div>
                <div className=" rounded-lg flex flex-col justify-center items-center">
                    <img src="./card2.svg" className="w-6" />
                    <p className="text-xs">Cartões</p>

                </div>
                <div className=" rounded-lg flex flex-col justify-center items-center">
                    <img src="./bell.svg" className="w-6" />
                    <p className="text-xs">Avisos</p>

                </div>




            </div>

        </div>
    )
}