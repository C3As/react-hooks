=> adicionando item no MenuPrincipal
    -> itens: [{ titulo: "Contador", url: "/essenciais/contador", tag:"useState", icone:<IconNumbers/> }]

=> função pura - função que recebe parametros e a saída dela depende únca e exclusivamente destes parametros
    function soma(a, b){
        return a+b;
    }

=> faz alterações em coisas que estão fora dela causabdo um efeito colateral
    let resultado;
    function soma2(a,b) {
        resultado = a+b;
    }

=> No react devemos considerar como efeito colateral tudo aquilo que não está ligado a renderização especificamente do programa e tudo aquilo que não está ligado ao input do usuário

=> useState faz com que um codigo se renderize mais de uma vez
=> useEffect(() => {callback}, []) - é usado para a execução de uma função quando as variaveis dentro do array se alterarem, no caso do array vazio a função será executada uma única vez quando o componente é renderizado

=> efeito de limpeza para evitar renderizações a cada caracter digitado usando setTimout e clearTimeout. isso faz com que a renderização só ocorra ao interromper a digitação - arquivo contagemCaracteresEffetc.tsx

     useEffect(() => {
        let timer = setTimeout(() => {
            let aux = quantCaracteres - texto.length
            setRestantesCaracteres(aux)
        },1000);
        return () => clearTimeout(timer);
    },[texto])

=> useRef referencia um elemento/variavel que quando alterada não é necessário a renderização para atualizar o valor da varíavel, ao contrário de useState, retorna um objeto com uma propriedade current. O ideal de usar useRef é para armazenar informações que não virão para a tela. O objeto do useRef sempre será o mesmo mas a propriedade current do useRef pode ser alterada

=> arquivos de hooks personalizados sempre iniciuarão com use.....ts, por convençãp
    -> primeiro exemplo useToggle - boolean falso verdadeiro

=> regras eslint para ts
    -> https://blog.geekhunter.com.br/eslint-typescript-tutorial/

=> Hook personalizado useToggle sendo utilizado para expandir seções ver MenuPrincipal e MenuPrincipalSecao - INTERESSANTE

=> useContext permite que uma componente armazene e possa prover estas informações para outros componentes

=> usando context a variavel criada com createContext será a mesma que chamará Provider - ver loja.tsx
  -> export let Contexto = createContext({} as any); // export dá acesso a outras componentes as informacções de Contexto
    const [valor, setValor] = useState([]); //informações que estarão disponiveis no Contexto
    const ctx = { valor, setValor}
    <Contexto.Provider value={ctx}>
      tudo que estiver dentro terá acesso ao Contexto
    </Contexto.Provider>
    -> para utilizar os dados de Contexto, na componente que utilizará será necessário importar usando:
        import { Contexto } from "@/src/pages/contexto/loja";
        ....
        const {valor} = useContext(Contexto);

    -> Numa aplicação pode existir contextos que poderão aplicados de maneira global ou especificos para uma parte do código, normalmente se trabalha com uma pasta context dentro de data.
        -> TemaProvider;
        -> useTema - para facilitar a utilização/importacção com a encapsulação pois faz a lógica de invocação do contexto
        -> inseriu TemaProvider em _app.tsx para que todos componentes tenham acesso

        -> criado também MenuProvider, useMenu e arquivo secoesMenu que recebeu dados que estavam no arquivo MenuPrincipal para que estes fossem usados por MenuProvider e também outra parte do código de MenuPrincipal diretamente dentro de MenuProvider
        -> MenuProvider também adicionado a _app.tsx

Dica: onClick={() => props.onClick?.()}> // pq onClick pode ser undefined usar ?.

=> useMemo - técnica que permite que se aumente o desempenho das palicações - através da memoização permite retornar os mesmo resultados desde que os parametros não tenham sido alterados evitando que um cálculo seja feito a cada qualquer outra alteração - Pense na memorização como o armazenamento em cache de um valor para que não precise ser recalculado. O useMemoHook só é executado quando uma de suas dependências é atualizada. 
    let nomeVariavel = useMemo(() => {função callback}, [parametros de alteração])

=> useCallback funciona quase da mesma forma que useMemo só que ao invés de armazenar o resultado, o useCallback armazena a função inteira, a função armazenada não pode conter dados que serão atualizados pois ela só será executada na primeira vez guardando os dados iniciais.

=> useImperativeHandle permite que se altere as referencia num componente filho
    -> Criado arquivo InputComReferencia (alterado de InputFormatado) com principais mudanças: inclusão de ref como parametro da função, alteração do export default que inclui forwardRef(nome da função).

=> useLayoutEffecté uma versão de useEffect que é acionado antes que o navegador redefina a tela. No exemplo texto.tsx usando useEffect ao inves de UseLayoutEffect é possível ver a troca de texto do inicializado com o useState quase que piscando ao trocar para o texto que está dentro do useEffect, isto já não se pode ver quando utilizado o useLayoutEffect

=> useReducer sempre vai trabalhar com objetos