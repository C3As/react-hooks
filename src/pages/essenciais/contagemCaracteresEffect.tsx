import Display from "@/src/components/template/Display";
import Pagina from "@/src/components/template/Pagina";
import { useEffect, useState } from "react";


export default function ContagemCaracteresEffect() {
    const [quantCaracteres, setQuantCaracteres] = useState(400);
    const [restantesCaracteres, setRestantesCaracteres] = useState(quantCaracteres);
    const [texto, setTexto] = useState("");
    useEffect(() => {
        let timer = setTimeout(() => {
            let aux = quantCaracteres - texto.length
            setRestantesCaracteres(aux)
        },1000);
        return () => clearTimeout(timer);
    },[texto])
    
    return (
        <Pagina titulo="Contagem de caracteres" subtitulo="Entendendo as funções de limpeza">
            <Display texto="Digite o texto" textoComplementar={`${restantesCaracteres} caracteres restantes`}/>
            <textarea
                value={texto}
                onInput={(e)=>{setTexto(e.currentTarget.value)}}
                className={`border border-zinc-700 bg-zinc-700
                text-white text-2xl w-3/5 h-72 rounded p-5`}
            ></textarea>
        </Pagina>
    )

}