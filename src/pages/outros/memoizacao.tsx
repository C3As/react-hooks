import InputFormatado from "@/src/components/formulario/InputFormatado";
import Display from "@/src/components/template/Display";
import Flex from "@/src/components/template/Flex";
import Pagina from "@/src/components/template/Pagina";
import { useState, useMemo } from "react";

export default function Memoizacao() {
  const [numero1, setNumero1] = useState(1);
  const [numero2, setNumero2] = useState(1);
  const [numero3, setNumero3] = useState(1);
  const [numero4, setNumero4] = useState(1);
  //   let potencia = numero1 ** numero2;

//  Com a função abaixo se não usar useMemo não só numero1 e numero2 serão afetados mas também numero3 e numero4 
//  terão o delay para cálculo
  let potencia = useMemo(() => {
    let future = Date.now() + 2000;
    while (Date.now() < future);
    return numero1 ** numero2;
  }, [numero1, numero2]);
  let soma = numero3 + numero4;

  return (
    <Pagina titulo="Memoização 1" subtitulo="Usando o hook useMemo">
      <Flex col center>
        <Display
          texto={
            <>
              <span>{numero1}</span>
              <sup>{numero2}</sup>
              <span> = {potencia}</span>
            </>
          }
        ></Display>
        <Flex>
          <InputFormatado
            valor={numero1}
            tipo="number"
            onInput={(e) => setNumero1(+e.target.value)}
          />
          <InputFormatado
            valor={numero2}
            tipo="number"
            onInput={(e) => setNumero2(+e.target.value)}
          />
        </Flex>
        <Display texto={`${numero3} + ${numero4} = ${soma}`}></Display>
        <Flex>
          <InputFormatado
            valor={numero3}
            tipo="number"
            onInput={(e) => setNumero3(+e.target.value)}
          />
          <InputFormatado
            valor={numero4}
            tipo="number"
            onInput={(e) => setNumero4(+e.target.value)}
          />
        </Flex>
      </Flex>
    </Pagina>
  );
}
