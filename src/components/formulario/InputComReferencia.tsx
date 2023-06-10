import { forwardRef } from "react";

interface InputFormatadoProps {
  label?: string;
  tipo: string;
  onInput?: (e: any) => any;
  className?: string;
  ref: any;
}

function InputComReferencia(props: InputFormatadoProps, ref) {
  return (
    <>
      <label className="m-1">{props.label}</label>
      <input
        ref={ref}
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
