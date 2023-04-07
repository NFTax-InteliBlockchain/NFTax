import { useState } from "react"


export function HorizontalScroll() {

    const [opcao1, setOpcao1] = useState(false)
    const [opcao2, setOpcao2] = useState(false)
    const [opcao3, setOpcao3] = useState(false)
    const [opcao4, setOpcao4] = useState(false)
    const [opcao5, setOpcao5] = useState(false)
    const [opcao6, setOpcao6] = useState(false)

    const handleOpcao1Click = () => {
        setOpcao1(true)
        setOpcao2(false)
        setOpcao3(false)
        setOpcao4(false)
        setOpcao5(false)
        setOpcao6(false)
    }

    const handleOpcao2Click = () => {
        setOpcao1(false)
        setOpcao2(true)
        setOpcao3(false)
        setOpcao4(false)
        setOpcao5(false)
        setOpcao6(false)
    }

    const handleOpcao3Click = () => {
        setOpcao1(false)
        setOpcao2(false)
        setOpcao3(true)
        setOpcao4(false)
        setOpcao5(false)
        setOpcao6(false)
        setOpcao5(false)
        setOpcao6(false)
    }

    const handleOpcao4Click = () => {
        setOpcao1(false)
        setOpcao2(false)
        setOpcao3(false)
        setOpcao4(true)
        setOpcao5(false)
        setOpcao6(false)
    }

    const handleOpcao5Click = () => {
        setOpcao1(false)
        setOpcao2(false)
        setOpcao3(false)
        setOpcao4(false)
        setOpcao5(true)
        setOpcao6(false)
    }

    const handleOpcao6Click = () => {
        setOpcao1(false)
        setOpcao2(false)
        setOpcao3(false)
        setOpcao4(false)
        setOpcao5(false)
        setOpcao6(true)
    }
    return (
        <div>
            <div className="flex overflow-x-scroll bg-white gap-6 pr-1/2">
                <p className="inline-block px-4 py-2 bg-white cursor-pointer" onClick={handleOpcao1Click}>opcao</p>
                <p className="inline-block px-4 py-2 bg-white cursor-pointer" onClick={handleOpcao2Click}>opcao</p>
                <p className="inline-block px-4 py-2 bg-white cursor-pointer" onClick={handleOpcao3Click}>opcao</p>
                <p className="inline-block px-4 py-2 bg-white cursor-pointer" onClick={handleOpcao4Click}>opcao</p>
                <p className="inline-block px-4 py-2 bg-white cursor-pointer" onClick={handleOpcao5Click}>opcao</p>
                <p className="inline-block px-4 py-2 bg-white cursor-pointer" onClick={handleOpcao6Click}>opcao</p>
            </div>
            <div>
                {opcao1 && (
                    <p>1</p>
                )}
                {opcao2 && (
                    <p>2</p>
                )}
                {opcao3 && (
                    <p>3</p>
                )}
                {opcao4 && (
                    <p>4</p>
                )}
                {opcao5 && (
                    <p>5</p>
                )}
                {opcao6 && (
                    <p>6</p>
                )}
            </div>
        </div>
    )
}