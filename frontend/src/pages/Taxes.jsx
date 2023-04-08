import { Date } from '../components/taxes/Date'

import { useState, useContext } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { BsArrowRight } from 'react-icons/bs'
import { Card } from '../components/taxes/Card'

import moment from 'moment';

import { useEffect, useRef } from 'react'

import { cards } from './data'

import { WalletContext } from '../pages/Connect'
import { useNavigate } from 'react-router-dom'

import { MdClose } from 'react-icons/md'

import 'moment/dist/locale/pt-br'

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

export function Taxes() {


    const navigate = useNavigate()

    const walletAddress = useContext(WalletContext)

    const [totalTaxes, setTotalTaxes] = useState(0)

    const [selectedCard, setSelectedCard] = useState(null)

    const [selectedType, setSelectedType] = useState('all')

    const [selectedMonth, setSelectedMonth] = useState(1)

    const [showPaymentModal, setShowPaymentModal] = useState(false)

    const ref = useRef(null);
    const payAllRef = useRef(null);

    function makePdf() {
        let cards = getCards()
        let paidTable = [
            [{text: 'Investimento', style: 'tableHeader' }, {text: 'Data', style: 'tableHeader' }, 
            {text: 'Valor investido', style: 'tableHeader' }, {text: 'Imposto de renda', style: 'tableHeader' }],
        ]
        let totalPaid = 0
        cards.filter(card => card.paid).forEach(card => {
            totalPaid += card.taxes
            paidTable.push( [card.name, moment(card.date).format('DD/MM/YYYY'), "R$ " + card.value, "R$ " + card.taxes])
        })
        paidTable.push([{text: 'Total', style: 'tableHeader', colSpan: 3}, {}, {}, "R$ " + totalPaid])

        let totalUnpaid = 0
        let unpaidTable = [
            [{text: 'Investimento', style: 'tableHeader' }, {text: 'Data', style: 'tableHeader' }, 
            {text: 'Valor investido', style: 'tableHeader' }, {text: 'Imposto de renda', style: 'tableHeader' }],
        ]
        cards.filter(card => !card.paid).forEach(card => {
            totalUnpaid += card.taxes
            unpaidTable.push( [card.name, moment(card.date).format('DD/MM/YYYY'), "R$ " + card.value, "R$ " + card.taxes])
        })
        unpaidTable.push([{text: 'Total', style: 'tableHeader', colSpan: 3}, {}, {}, "R$ " + totalUnpaid])

        const docDefinition = {
            content: [
                { text: 'Relatório de imposto de renda', style: 'header' },
                { text: 'Impostos pagos', style: 'subheader' },
                {
                    style: 'tableExample',
                    table: {
                        body: paidTable
                    }
                },
                { text: 'Impostos a pagar', style: 'subheader' },
                {
                    style: 'tableExample',
                    table: {
                        body: unpaidTable
                    }
                },
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 0, 0, 10]
                },
                subheader: {
                    fontSize: 16,
                    bold: true,
                    margin: [0, 10, 0, 5]
                },
                tableExample: {
                    margin: [0, 5, 0, 15]
                },
                tableHeader: {
                    bold: true,
                    fontSize: 13,
                    color: 'black'
                }
            },
            defaultStyle: {
                // alignment: 'justify'
            }
        }
        pdfMake.createPdf(docDefinition).open()
    }


    useEffect(() => {
        const handleClickOutside = event => {
            if (ref.current && !ref.current.contains(event.target)) {
                setSelectedCard(null)
                setShowPaymentModal(false)
            }
            if (payAllRef.current && !payAllRef.current.contains(event.target)) {
                setShowPaymentModal(false)
                setSelectedCard(null)
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [ref, payAllRef]);

    const handleCardClick = (card) => {
        setSelectedCard(card)
    }

    const getCards = () => {
        return cards.filter(card => {
            return moment(card.date).month() + 1 == selectedMonth
        }).filter(card => {
            return card.type == selectedType || selectedType == 'all'
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
        <div className="bg-blue h-full font-montserrat w-full flex flex-col">
            <div className='p-4 flex flex-col justify-center items-center w-full'>
                <BsArrowLeft className='text-white text-xl absolute left-4 top-5' onClick={() => navigate('/')} />
                <div className='flex flex-col pt-36 justify-center items-center gap-2'>
                    <h2 className='font-bold text-white text-xl'>Selecione o período desejado</h2>
                    <Date setSelectedMonth={setSelectedMonth} selectedMonth={selectedMonth} />
                </div>

            </div>
            <div className='text-white flex w-full mt-20 justify-center'>
                <button className={selectedType == 'all' ? "bg-lightblue py-3 px-3 " : "bg-darkblue py-3 px-3 "} onClick={() => setSelectedType('all')}>Todas as operações</button>
                <button className={selectedType == 'fixed' ? "bg-lightblue px-3 py-3" : "bg-darkblue px-3 py-3 "} onClick={() => setSelectedType('fixed')}>Renda fixa</button>
                <button className={selectedType == 'variable' ? "bg-lightblue px-3 py-3 " : "bg-darkblue px-3 py-3"} onClick={() => setSelectedType('variable')}> Renda variável</button>
            </div>
            <div className='bg-white text-black justify-center flex gap-1 py-5 w-full px-1 h-full'>Total de impostos a pagar:<p className='font-bold'>R$ {totalTaxes}</p></div>
            <div className='bg-grey h-full'>
                <div className='mx-3 py-4 flex flex-col gap-3 h-full'>
                    {getCards().map((card) => {
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
                                onClick={() => handleCardClick(card)}
                            />
                        )
                    })}
                </div>
            </div>
            <div onClick={() => setShowPaymentModal(true)} className="bg-darkblue text-white px-1 py-3 w-full bottom-0 flex justify-center items-center font-bold sticky">
                <span className="text-center" >Pagar tudo</span>
                <BsArrowRight className="text-xl absolute right-3 text-lightblue" />
            </div>
            {selectedCard && (
                <div ref={ref} className='fixed bottom-0 h-[40%] w-full bg-white rounded-t-3xl shadow-2xl'>
                    <div className='flex flex-col px-7 w-full'>
                        <span className='flex justify-center pt-4'>
                            <h2 className='font-bold text-black text-xl mt-2'>Detalhes da operação</h2>
                            <MdClose className='absolute right-4 top-7 text-lightblue' onClick={() => setSelectedCard(null)} />
                        </span>
                        <div className='flex justify-between items-center mt-4'>
                            <div>
                                <p className='mt-3'>{selectedCard.abbreviation}</p>
                                <p className='text-sm mt-1'>{selectedCard.abbreviation}</p>
                            </div>
                            <p className="font-semibold">R$ {selectedCard.taxes}</p>
                        </div>

                        <hr className='mt-2 text-gray-900' />
                        <span className='flex justify-between w-full mt-4'>
                            <p>Data de liquidação:</p>
                            <p>{moment(selectedCard.date).locale('pt').format('LL')}</p>
                        </span>
                        <span className='flex justify-between w-full mt-2'>
                            <p>Valor investido:</p>
                            <p>R$ {selectedCard.value}</p>
                        </span>
                        <span class="flex justify-center w-full">
                            <button className='bg-darkblue text-white w-fit px-4 py-2 font-bold text-lg rounded mt-8'>Pagar</button>
                        </span>
                    </div>
                </div>
            )}

            {showPaymentModal && (
                <div ref={payAllRef} className='fixed bottom-0 h-[40%] w-full bg-white rounded-t-3xl shadow-2xl overflow-scroll'>
                    <div className='flex flex-col px-7 w-full'>
                        <span className='flex justify-center pt-4 '>
                            <h2 className='font-bold text-black text-xl my-2'>Detalhes da operação</h2>
                            <MdClose className='absolute right-4 top-7 text-lightblue' onClick={() => setShowPaymentModal(false)} />
                        </span>
                        {getCards()
                            .filter(card => !card.paid)
                            .map((card) => {
                                return (
                                    <div>
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <p className='mt-3'>{card.abbreviation}</p>
                                                <p className='text-sm mt-1'>{card.abbreviation}</p>
                                            </div>
                                            <p className="font-semibold">R$ {card.taxes}</p>
                                        </div>

                                        <hr className='mt-2 text-gray-900' />
                                        <span className='flex justify-between w-full mt-4 text-sm'>
                                            <p>Data de liquidação:</p>
                                            <p>{moment(card.date).locale('pt').format('LL')}</p>
                                        </span>
                                        <span className='flex justify-between w-full mt-2 text-sm'>
                                            <p>Valor investido:</p>
                                            <p>R$ {card.value}</p>
                                        </span>
                                        <hr className='mt-4 text-gray-900 border-2 mb-2' />
                                    </div>
                                )
                            })}
                        <span className='flex justify-between w-full mt-2 text-lg'>
                            <p>TOTAL:</p>
                            <p className='font-bold'>R$ {totalTaxes}</p>
                        </span>
                        <span class="flex justify-between w-full mb-5">
                            <button className='text-gray-500 w-fit px-4 py-2 font-bold text-lg rounded mt-8' onClick={makePdf}>Gerar relatório</button>
                            <button className='bg-darkblue text-white w-fit px-4 py-2 font-bold text-lg rounded mt-8'>Pagar tudo</button>
                        </span>

                    </div>
                </div>
            )}

        </div>
    )
}
