import Pagina from "@/src/components/template/Pagina"
import Flex from "@/src//components/template/Flex"
import AdicionarProduto from "@/src/components/loja/AdicionarProduto"
import FinalizarCompra from "@/src/components/loja/FinalizarCompra"
import Carrinho from "@/src/components/loja/Carrinho"
import { createContext, useState } from "react"

export let Contexto = createContext({} as any);

export default function Loja() {
    const [carrinho, setCarrinho] = useState<any>([]);
    return (
        <Contexto.Provider value={{
            carrinho, setCarrinho,
            total() {
                const r = carrinho.reduce((acc, produto) => acc + +produto.preco, 0)
                return r;
            }
        }}>
            <Pagina titulo="Loja" subtitulo="Compartilhando informações entre multiplos componentes com context">
                <Flex col gap={4}>
                    <Flex gap={4}>
                        <AdicionarProduto />
                        <FinalizarCompra />
                    </Flex>
                    <Carrinho />
                </Flex>
            </Pagina>
        </Contexto.Provider>
    )
}