import Botao from "@/src/components/template/Botao";
import Display from "@/src/components/template/Display";
import Flex from "@/src/components/template/Flex";
import Pagina from "@/src/components/template/Pagina";
import { useRef, useState } from "react";

export default function StateVsRef() {
    const [estado, setEstado] = useState(0);
    const referencia = useRef(0);

    function incerentarReferencia() {
        referencia.current++;
    }

    return (
        <Pagina titulo="Referência Vs State" subtitulo="Entendendo useRef">
            <Display texto={`R: ${referencia.current} | S: ${estado}`}/>
            <Flex gap={5}>
                <Botao redondo tamanho="2xl" cor="bg-pink-500" texto="R+"onClick={() => incerentarReferencia()}/>
                <Botao redondo tamanho="2xl" cor="bg-green-500" texto="S+" onClick={() => setEstado(estado + 1)}/>
            </Flex>
        </Pagina>
    )
}