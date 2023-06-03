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