import InputFormatado from "@/src/components/formulario/InputFormatado";
import Botao from "@/src/components/template/Botao";
import Display from "@/src/components/template/Display";
import Flex from "@/src/components/template/Flex";
import Pagina from "@/src/components/template/Pagina";
import { useState, useEffect, useReducer, Reducer } from "react";
function mudaDados(estadoAtual, acao) {
  switch (acao.type) {
    case "ALTERA_NUM1":
      return {
        ...estadoAtual,
        num1: acao.novoValor,
        validadeNum1: acao.novoValor >= 0,
      };
    case "ALTERA_NUM2":
      return {
        ...estadoAtual,
        num2: acao.novoValor,
        validadeNum2: acao.novoValor >= 0,
      };
    case "SOMA":
      if (estadoAtual.validadeNum1 && estadoAtual.validadeNum2) {
         return {
          ...estadoAtual,
          soma: estadoAtual.num1 + estadoAtual.num2,
        };
    } else {
      return {...estadoAtual, soma: -9999};
    }
  }
}

export default function SomaReducer() {
  const [dados, dispatchDados] = useReducer<Reducer<any, any>>(mudaDados, {
    num1: 0,
    num2: 0,
    validadeNum1: false,
    validadeNum2: false,
    soma: 0,
  });

  return (
    <Pagina titulo="Soma com useState" subtitulo="Exemplo de soma com useState">
      <Flex col centerCross>
        <Display texto="Faça uma soma" />
        <Flex center>
          <InputFormatado
            tipo="number"
            valor={dados.num1}
            onInput={(e) => {
              dispatchDados({
                type: "ALTERA_NUM1",
                novoValor: +e.target.value,
              });
            }}
          />
          <span className="text-4xl ml-2">+</span>
          <InputFormatado
            tipo="number"
            valor={dados.num2}
            onInput={(e) => {
              dispatchDados({
                type: "ALTERA_NUM2",
                novoValor: +e.target.value,
              });
            }}
          />
          <Botao cor="bg-orange-400" texto="=" onClick={() => dispatchDados({ type: "SOMA" })}></Botao>
        </Flex>
        <Display texto={dados.soma} />
      </Flex>
    </Pagina>
  );
}
