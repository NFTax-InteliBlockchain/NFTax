import { Date } from '../components/taxes/Date'

import { useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { BsArrowRight } from 'react-icons/bs'
import { Card } from '../components/taxes/Card'

import moment from 'moment';

import { useEffect } from 'react'

import { cards } from './data'

export function Taxes() {
    const [totalTaxes, setTotalTaxes] = useState(0)

    const [selectedCard, setSelectedCard] = useState(null)

    const [selectedType, setSelectedType] = useState('all')

    const [selectedMonth, setSelectedMonth] = useState(1)

    const getCards = () => {
        return cards.filter(card => {
            console.log(moment(card.date).month())
            return moment(card.date).month() + 1 == selectedMonth
        }).filter(card => {
            return card.type == selectedType || selectedType == 'all'
        }).map((card) => {
            return (
                <Card
                    key={card.id}
                    abbreviation={card.abbreviation}
                    name={card.name}
                    value={card.value}
                    taxes={card.taxes}
                    date={card.date}
                    type={card.type}
                    paid={card.paid}
                    onClick={() => setSelectedCard(card.id)}
                />
            )
        })
    }

    const getTaxes = () => {
        let taxes = 0
        cards.filter(card => {
            console.log(moment(card.date).month())
            return moment(card.date).month() + 1 == selectedMonth
        }).filter(card => {
            return card.type == selectedType || selectedType == 'all'
        }).filter(card => !card.paid).forEach(card => {
            taxes += card.taxes
        })
        setTotalTaxes(taxes)
    }

    useEffect(() => {
        // code to fetch cards and update the state
        getTaxes(); // call getTaxes after the cards state has been updated
      }, [selectedMonth, selectedType]);
    

    return (
        <div className="bg-blue h-full font-montserrat w-full">
            <div className='p-4 flex flex-col justify-center items-center w-full'>
                <BsArrowLeft className='text-white text-xl absolute left-4 top-5' />
                <div className='flex flex-col pt-36 justify-center items-center gap-2'>
                    <h2 className='font-bold text-white text-xl'>Selecione o período desejado</h2>
                    <Date setSelectedMonth={setSelectedMonth} selectedMonth={selectedMonth}/>
                </div>

            </div>
            <div className='text-white flex w-full mt-20 justify-center'>
                <button className={selectedType == 'all' ? "bg-lightblue py-3 px-3 " : "bg-darkblue py-3 px-3 "} onClick={() => setSelectedType('all')}>Todas as operações</button>
                <button className={selectedType == 'fixed' ? "bg-lightblue px-3 py-3" : "bg-darkblue px-3 py-3 "} onClick={() => setSelectedType('fixed')}>Renda fixa</button>
                <button className={selectedType == 'variable' ? "bg-lightblue px-3 py-3 " : "bg-darkblue px-3 py-3"} onClick={() => setSelectedType('variable')}> Renda variável</button>
            </div>
            <div className='bg-white text-black justify-center flex gap-1 py-5 w-full px-1'>Total de impostos a pagar:<p className='font-bold'>R$ {totalTaxes}</p></div>
            <div className='h-full bg-grey'>
                <div className='mx-3 py-4 flex flex-col gap-3'>
                    {getCards()}
                </div>
            </div>
            <div className="bg-darkblue text-white px-1 py-3 w-full bottom-0 flex justify-center items-center font-bold sticky">
                <span className="text-center">Pagar tudo</span>
                <BsArrowRight className="text-xl absolute right-3 text-lightblue" />
            </div>

            {/* <div className='fixed bottom-0 h-[40%] w-full bg-white rounded-t-3xl shadow-2xl'>

            </div> */}
        </div>
    )
}