import Flex from "@/src/components/template/Flex";
import Pagina from "@/src/components/template/Pagina";
import {useId} from "react"

export default function FormularioId1() {
    let id = useId()
    return (
        <Pagina titulo="Conhecendo o hook useId" subtitulo="Usando useId em um formulário">
            <Flex center>
                <label className="m-1" htmlFor={`nome-${id}`}>Nome: </label>
                <input id={`nome-${id}`} className="m-2 text-gray-600 p-2 rounded-md"type="text" />
            </Flex>
            <Flex center>
            <label className="m-1" htmlFor={`sobrenome-${id}`}>Sobrenome: </label>
                <input id={`sobrenome-${id}`}className="m-2 text-gray-600 p-2 rounded-md" type="text" />
            </Flex>
        </Pagina>
    )
}