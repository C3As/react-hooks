import InputComReferencia from "@/src/components/formulario/InputComReferencia";
import Flex from "@/src/components/template/Flex";
import Pagina from "@/src/components/template/Pagina";
import { useRef } from "react";

export default function FormularioImperativeHandle() {
    const referencia = useRef()
    return (
        <Pagina titulo="Modificando Referência" subtitulo="Usando useRef e useImperativeHandle">
            <Flex col>
                <InputComReferencia tipo="text" label="Digite o texto" ref={referencia}/>
            </Flex>
        </Pagina>
    )
}