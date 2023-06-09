import Flex from "./Flex";
import Titulo from "./Titulo";
import SeletorDeCor from "./SeletorDeCor";
import useToggle from "@/src/data/hooks/useToggle";
import { IconPaint, IconX } from "@tabler/icons";

interface CabecalhoProps {
    titulo?: string;
    subtitulo?: string;
}

export default function Cabecalho(props: CabecalhoProps) {
    const [mostrarSeletor, toggleMostrarSeletor] = useToggle(false);
    return (
        <Flex centerCross className="justify-between">
            {props.titulo ? <Titulo titulo={props.titulo} subtitulo={props.subtitulo} /> :<div></div> }
            <div onClick={toggleMostrarSeletor} >
                {mostrarSeletor ? <IconX/> : <IconPaint/>}
            </div>
            {mostrarSeletor ? <SeletorDeCor/> : ""}
        </Flex>
    );
}
