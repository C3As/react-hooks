import Display from "@/src/components/template/Display";
import Pagina from "@/src/components/template/Pagina";
import { useRef, useState } from "react";


export default function ContagemCaracteresRef() {
    const [quantCaracteres, setQuantCaracteres] = useState(400);
    const [restantesCaracteres, setRestantesCaracteres] = useState(quantCaracteres);
    const refTexto = useRef<any>();
    const contador = useRef<any>();
    
    function iniciaContador() {
        clearTimeout(contador.current);
        contador.current = setTimeout(() => {
            let quantCaracteresDigitados = refTexto.current.value.length;
            setRestantesCaracteres(quantCaracteres - quantCaracteresDigitados);
        }, 1000);
    }

    return (
        <Pagina titulo="Contagem de caracteres" subtitulo="Usando uma referência para controlar o tempo">
            <Display texto="Digite o texto" textoComplementar={`${restantesCaracteres} caracteres restantes`}/>
            <textarea
                ref={refTexto}
                onInput={iniciaContador}
                className={`border border-zinc-700 bg-zinc-700
                text-white text-2xl w-3/5 h-72 rounded p-5`}
            ></textarea>
        </Pagina>
    )

}