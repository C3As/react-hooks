import Botao from "@/src/components/template/Botao";
import Flex from "@/src/components/template/Flex";
import Pagina from "@/src/components/template/Pagina";
import useToggle from "@/src/data/hooks/useToggle";
import { IconX } from "@tabler/icons";

export default function Modal() {
    const [mostrar, toggleMostrar] = useToggle(false);
    return (
        <Pagina titulo="Modal" 
        subtitulo="Usando um hook personalizado para abrir e fechar uma modal">
            <Botao texto="Abrir" cor="bg-cyan-500" onClick={toggleMostrar}/>
            {mostrar ? (<Flex center col className={`w-80 h-80 bg-gray-500 text-white
            text-2xl p-4 m-4 rounded-md`}>
                <Botao cor="bg-red-700" tamanho="xl" icone={<IconX/>} onClick={toggleMostrar} />
                <h1 className="mt-5">Clique em X para sair</h1>
            </Flex>) : ""}
        </Pagina>
    )
}