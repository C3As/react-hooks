import Pagina from "@/src/components/template/Pagina";
import { useEffect, useLayoutEffect, useState } from "react";

export default function Texto() {
    const [texto, settexto] = useState("Texto SEcreto!!!!!!!!")

    // useEffect(() => {
    useLayoutEffect(() => {
        settexto("Olá!!")
    },[])

  return (
    <Pagina
      titulo="Texto Secreto"
      subtitulo="Entendo um problema do useEffect"
    >
        <p className="text-5xl text-gray-300">{texto}</p>
    </Pagina>
  );
}
