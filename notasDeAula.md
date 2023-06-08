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

=> useRef referencia um elemento/variavel que é alterada não é necessário a renderização apara atualizar o valor da varíavel, ao contrário de useState, retorna um objeto com uma propriedade current. O ideal de usar useRef é para armazenar informações que não virão para a tela. O objeto do useRef sempre será o mesmo mas a propriedade current do useRef pode ser alterada

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