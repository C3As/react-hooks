import Botao from "@/src/components/template/Botao";
import Flex from "@/src/components/template/Flex";
import Pagina from "@/src/components/template/Pagina";
import { IconArrowLeft } from "@tabler/icons";
import { useRef } from "react";


export default function refElemento() {
    const referencia = useRef<any>()

    function apagar() {
        // referencia.current = <p>Texto Legal</p>
        referencia.current.innerText = referencia.current.innerText.slice(0, -1);
    }
    
    return (
        <Pagina titulo="Referência de um Elemento" subtitulo="Usando referencias na DOM">
            <Flex col center>
                <p ref={referencia}
                className="text-4xl text-gray-300 m-4">Texto Legal</p>
                <Botao redondo tamanho="2xl" cor="bg-sky-500" icone={<IconArrowLeft/>} onClick={apagar}/>
            </Flex>
        </Pagina>
    )
}