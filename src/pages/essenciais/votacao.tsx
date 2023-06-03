import Botao from "@/src/components/template/Botao";
import Display from "@/src/components/template/Display";
import Flex from "@/src/components/template/Flex";
import Pagina from "@/src/components/template/Pagina";
import { useState } from "react";


export default function Votacao(){
    const [dados, setDados] = useState({votosRoxo:0, votosVerde:0})

    function votarRoxo(){
        // Pode ser que a vaiável dados tenha algum membro alterado durante a atualização 
        setDados((dadosatuais) => {
            return { votosVerde: dadosatuais.votosVerde,
            votosRoxo: dadosatuais.votosRoxo + 1}})
    }

    function votarVerde(){
        setDados((dadosatuais) => {
            return { votosVerde: dadosatuais.votosVerde+1,
            votosRoxo: dadosatuais.votosRoxo}
        })
         
    }
    return (
        <Pagina titulo= "Votação" subtitulo="Usando estado com objeto">
            <Flex col center>
                <Display texto="Qual cor você prefere?" 
                textoComplementar={`Verde: ${dados.votosVerde} | Roxo: ${dados.votosRoxo}`}
                />
                <Flex>
                    <Botao cor="bg-green-600" onClick={votarVerde} redondo tamanho="2xl"/>
                    <Botao cor="bg-purple-600" onClick={votarRoxo} redondo tamanho="2xl"/>
                </Flex>
                <Botao texto="Zerar" onClick={() => setDados({votosRoxo:0, votosVerde:0})} cor="bg-gray-500" tamanho="lg"/>
            </Flex>
        </Pagina>
    )
}