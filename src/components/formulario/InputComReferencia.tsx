import { forwardRef, useImperativeHandle, useRef } from "react";

interface InputComReferenciaProps {
  label?: string;
  tipo: string;
  onInput?: (e: any) => any;
  className?: string;
  ref: any;
}

function InputComReferencia(props: InputComReferenciaProps, ref) {
  const referenciaInterna = useRef<any>();

  function novasFuncionalidades() {
    return {
      apagar: function () {
        referenciaInterna.current.value = referenciaInterna.current.value.slice(0,-1);
      },
      textoPadrao: function () {
        referenciaInterna.current.value = "Padrão";
      },
    };
  }

  useImperativeHandle(ref, novasFuncionalidades, []);

  return (
    <>
      <label className="m-1">{props.label}</label>
      <input
        ref={referenciaInterna}
        type={props.tipo}
        onInput={props.onInput}
        className={`
                    text-gray-600 px-2 
                    w-40 h-11 rounded-md
                    ${props.className ?? ""}
                `}
      />
    </>
  );
}
export default forwardRef(InputComReferencia);
