import Botao from "@/src/components/template/Botao";
import Display from "@/src/components/template/Display";
import Flex from "@/src/components/template/Flex";
import Pagina from "@/src/components/template/Pagina";
import { useEffect, useState } from "react";

export default function Maior() {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [maior, setMaior] = useState(0);

    function calcularMaior() {
       return (n1>n2) ? n1 : n2;
    }

    useEffect(() => {
        let m =setMaior(calcularMaior());
    },[n1,n2])

    useEffect(() => {
        if(maior > 5) {
            window.alert("Os números estão ficando altos")
        }
    }, [maior])


    return (
        <Pagina>
            <Display texto={`N1: ${n1} | N2: ${n2}`} textoComplementar={`O maior número é ${maior}`}/>
            <Flex>
                <Botao texto="N1" redondo tamanho="2xl" onClick={() => setN1(n1 + 1)} cor="bg-red-500"/>
                <Botao texto="N2" redondo tamanho="2xl" onClick={() => setN2(n2 + 1)} cor="bg-blue-500"/>
            </Flex>
        </Pagina>
    );
}