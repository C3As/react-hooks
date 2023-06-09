import { useContext } from "react";
import ContextoTema from "../context/TemaProvider";


export function useTema() {
    return useContext(ContextoTema)
}