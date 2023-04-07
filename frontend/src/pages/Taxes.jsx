import { Date } from '../components/taxes/Date'

import { useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { BsArrowRight } from 'react-icons/bs'
import { Card } from '../components/taxes/Card'


export function Taxes() {

    const [totalTaxes, setTotalTaxes] = useState(0)

    return (
        <div className="bg-blue h-full font-montserrat w-full">
            <div className='p-4 flex flex-col justify-center items-center w-full'>
                <BsArrowLeft className='text-white text-xl absolute left-4 top-5' />
                <div className='flex flex-col pt-44 justify-center items-center gap-2'>
                    <h2 className='font-bold text-white text-xl'>Selecione o período desejado</h2>
                    <Date />
                </div>

            </div>
            <div className='bg-darkblue text-white flex gap-4 px-1 py-3 w-full mt-20 justify-center'>
                <button>Todas as operações</button>
                <button>Renda fixa</button>
                <button>Renda variável</button>
            </div>
            <div className='bg-white text-black justify-center flex gap-1 py-5 w-full px-1'>Total de impostos:<p className='font-bold'>R$ {totalTaxes}</p></div>
            <div className='h-full bg-grey'>
                <div className='mx-3 py-4 flex flex-col gap-3'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                </div>
                
            </div>
            <div className="bg-darkblue text-white px-1 py-3 w-full bottom-0 flex justify-center items-center font-bold sticky">
                <span className="text-center">Pagar tudo</span>
                <BsArrowRight className="text-xl absolute right-3 text-lightblue" />
            </div>
        </div>
    )
}