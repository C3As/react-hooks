import InputFormatado from "@/src/components/formulario/InputFormatado";
import BotaoMemoizado from "@/src/components/template/BotaoMemoizado";
import Display from "@/src/components/template/Display";
import Flex from "@/src/components/template/Flex";
import Pagina from "@/src/components/template/Pagina";
import { useCallback, useState } from "react";

export default function Memoizandouncoes() {
  const [quantidade, setQuantidade] = useState(0);

  const finalizar = useCallback(function(e) {
    e.preventDefault(); // para evitar refresh ao clicar no botão
    window.alert("Compra finalizada!");
    setQuantidade(0);
  },[]);

  return (
    <Pagina titulo="Memoizando unções" subtitulo="Entendo o hook useCallback">
      <Display texto="quantos produtos você quer?" />
      <form>
        <Flex col center>
          <InputFormatado
            valor={quantidade}
            tipo="number"
            onInput={(e) => setQuantidade(+e.target.value)}
          ></InputFormatado>
          <BotaoMemoizado texto="Confirmar" onClick={finalizar}/>
        </Flex>
      </form>
    </Pagina>
  );
}
