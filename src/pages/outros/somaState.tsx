import InputFormatado from "@/src/components/formulario/InputFormatado";
import Botao from "@/src/components/template/Botao";
import Display from "@/src/components/template/Display";
import Flex from "@/src/components/template/Flex";
import Pagina from "@/src/components/template/Pagina";
import { useState, useEffect } from "react";

export default function SomaState() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [validadeNum1, setValidadeNum1] = useState(false);
    const [validadeNum2, setValidadeNum2] = useState(false);
    const [soma, setSoma] = useState(0);

    useEffect(() => {
        setValidadeNum1(num1>=0)
    },[num1])

    useEffect(() => {
        setValidadeNum2(num2>=0)
    },[num2])

    function fazSoma() {
        if(validadeNum1 && validadeNum2) {
            setSoma(num1 + num2);
        } else {
            setSoma(-9999);
        }
    }

    return (
        <Pagina titulo="Soma com useState" subtitulo="Exemplo de soma com useState">
            <Flex col centerCross>
                <Display texto="Faça uma soma" />
                <Flex center>
                    <InputFormatado tipo="number" valor={num1} onInput={(e) => {setNum1(+e.target.value)}}/>
                    <span className="text-4xl ml-2">+</span>
                    <InputFormatado tipo="number" valor={num2} onInput={(e) => {setNum2(+e.target.value)}} />
                    <Botao cor="bg-orange-400" texto="=" onClick={fazSoma}></Botao>
                </Flex>
                <Display texto={soma} />
            </Flex>
        </Pagina>
    );
}