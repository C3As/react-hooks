import Display from "@/src/components/template/Display";
import Pagina from "@/src/components/template/Pagina";
import useTamanhoJanela from "@/src/data/hooks/useTamanhoJanela";

export default function tamanhoJanela(){
    const tamanho = useTamanhoJanela();
    return (
        <Pagina titulo="Qual é o tamanho da janela?" subtitulo="Usando um hook personalizado para descobrir o tamanho da página">
            <Display texto={tamanho}/>
            <div className={`
            w-40 h-40
            sm:bg-blue-400
            md:bg-pink-400
            lg:bg-green-400
            xl:bg-purple-400
            2xl:bg-orange-400
            `}></div>
        </Pagina>
    )
}