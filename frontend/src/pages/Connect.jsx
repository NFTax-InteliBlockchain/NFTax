import { useNavigate } from 'react-router-dom';
import { Button } from '../components/taxes/Button'
import { useState, useContext, createContext } from 'react';

export const WalletContext = createContext();

export function Connect() {
    const [walletAddress, setWalletAddress] = useState('');

    async function requestAccout() {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({
                    method: 'eth_requestAccounts'
                });
                setWalletAddress("Conectado à carteira" + " " + accounts[0]);
                navigate('/taxes')
            } catch (error) {
                console.log(error);
            }
        } else {
            alert("Instale metamask em seu navegador!")
        }
    }

    const navigate = useNavigate()

    return (
        <WalletContext.Provider value={walletAddress}>
            <div className="bg-darkblue h-screen ">
                <div className="max-w-s pl-6 pt-6 mx-auto">
                    <button onClick={() => navigate('/')}><img src='./arrow.svg' className="transform transition hover:scale-110"></img></button>
                    <img src='./money.svg' className="pt-20"></img>
                    <h2 className="font-montserrat font-medium pt-4 text-slate-50">NFTax</h2>
                    <h2 className="font-montserrat font-bold text-slate-50">Sua vida fiscal simplificada</h2>
                    <h3 className="text-slate-50 pt-12 pb-2">Conecte os seus dados do Real Digital</h3>
                    {/* <Button text="Conectar" /> */}
                    <button className="bg-button-darkblue text-slate-50 pt-1 pb-1 pl-8 pr-8 rounded-md hover:bg-sky-700 transform transition hover:scale-110"
                        onClick={requestAccout}
                    >Conectar carteira</button>
                    <h3 className='text-slate-50 text-xs pt-4'>{walletAddress}</h3>

                </div>
                <div className='bg-white pl-6 pb-16 rounded-t-lg absolute bottom-0 w-full'>
                    <h2 className="font-montserrat font-bold pt-4 pb-8">Por que fazer isso?</h2>
                    <p> • Sem dor de cabeça com imposto de renda</p>
                    <p> • Pagamento facilitado em blockchain</p>
                    <p> • Geração de relatórios</p>
                </div>
            </div>
        </WalletContext.Provider>
    )
}