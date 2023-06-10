import InputComReferencia from "@/src/components/formulario/InputComReferencia";
import Botao from "@/src/components/template/Botao";
import Flex from "@/src/components/template/Flex";
import Pagina from "@/src/components/template/Pagina";
import { useRef } from "react";

export default function FormularioImperativeHandle() {
  const referencia = useRef<any>();

  function apagar() {
    referencia.current.apagar();
  }

  function padrao() {
    referencia.current.textoPadrao();
  }

  return (
    <Pagina
      titulo="Modificando Referência"
      subtitulo="Usando useRef e useImperativeHandle"
    >
      <Flex col center>
        <InputComReferencia
          tipo="text"
          label="Digite o texto"
          ref={referencia}
        />
        <Flex center>
          <Botao texto="Apagar" onClick={apagar} />
          <Botao texto="Padrão" onClick={padrao}/>
        </Flex>
      </Flex>
    </Pagina>
  );
}
