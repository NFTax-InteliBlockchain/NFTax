import { Date } from '../components/taxes/Date'
import { HorizontalScroll } from '../components/taxes/HorizontalScroll'


import { BsArrowLeft } from 'react-icons/bs'

export function Taxes() {
    return (
        <div className="bg-darkblue h-screen">
            <div className='p-4'> 
                <BsArrowLeft className='text-white text-xl'/>
                <h2 className=''>Selecione o período desejado</h2>
                <Date/>
            </div>
            
            {/* <HorizontalScroll /> */}
        </div>
    )
}