import Botao from "@/src/components/template/Botao";
import Display from "@/src/components/template/Display";
import Flex from "@/src/components/template/Flex";
import Pagina from "@/src/components/template/Pagina";
import useBoolean from "@/src/data/hooks/useBoolean";
import { useLayoutEffect, useState, useRef } from "react";

export default function GeradorDeCor() {
    const [mostrar, toggleMostrar, mostrarTrue, mostrarFalse]= useBoolean(false);
    const [texto, setTexto] = useState("Clique em Sortear");
    const ref = useRef<any>()

    // mostar a div condicionalmente, a div deve aparecer quando clicar em sortear cor e desaparecer quando clicar em apagar cor
    // exibir um texto no display; Clique em sortear, ou uma cor aleatoria
    // alterar a cor da div de acordo com a cor aleatoria gerada

    function gerarCorAleatoria() {
        const cor = Math.floor(Math.random() * 0xffffff).toString(16);
        return cor;
    }

    useLayoutEffect(() => {
        if(mostrar) {
            const cor = gerarCorAleatoria();
            setTexto(`#${cor}`);
            ref.current.style.backgroundColor = `#${cor}`
        } else {
            setTexto("Clique em Sortear");
        }
    },[mostrar])

    return (
        <Pagina titulo="Gerador de Cor" subtitulo="Criando exemplos mais complexos com useLayoutEffect">
            <Flex>
                <Botao texto="Sortear Cor" onClick={mostrarTrue}/>
                <Botao texto="Apagar Cor" onClick={mostrarFalse}/>
            </Flex>
            <Display texto={texto}/>
            {mostrar ? <div ref={ref} className="h-32 w-32"></div> : ""}
        </Pagina>
    )
}