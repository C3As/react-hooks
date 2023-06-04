import Pagina from "@/src/components/template/Pagina";
import { useEffect, useState } from "react";

export default function ConsultaAPI() {
    const [url, setUrl] = useState();
    useEffect(() => {
         fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then(obj=> setUrl(obj.message))
    },[])
   

    return (
        <Pagina titulo="Requisição à API" subtitulo="Requerendo Dados">
            <img className="max-w-sm" src={url} alt="imagem" />
        </Pagina>
    )
}