import {
  IconAppWindow,
  IconArrowLeftRight,
  IconDimensions,
  IconLetterCase,
  IconLock,
  IconMathGreater,
  IconMenu,
  IconNumbers,
  IconRefreshAlert,
  IconSection,
  IconUsers,
  IconX,
  IconShoppingCart,
  IconPin,
  IconForms,
  IconTextColor,
  IconColorSwatch,
  IconDatabase,
  IconDatabaseImport
} from "@tabler/icons";

export const secoes = [
  {
    titulo: "Essenciais",
    aberta: false,
    itens: [
      {
        titulo: "Contador",
        url: "/essenciais/contador",
        tag: "useState",
        icone: <IconNumbers />,
      },
      {
        titulo: "Votação",
        url: "/essenciais/votacao",
        tag: "useState",
        icone: <IconUsers />,
      },
      {
        titulo: "Consulta API",
        url: "/essenciais/consultaAPI",
        tag: "useEffect",
        icone: <IconArrowLeftRight />,
      },
      {
        titulo: "Maior",
        url: "/essenciais/maior",
        tag: "useEffect",
        icone: <IconMathGreater />,
      },
      {
        titulo: "Contagem de Caracteres",
        url: "/essenciais/contagemCaracteresEffect",
        tag: "useEffect",
        icone: <IconLetterCase />,
      },
      {
        titulo: "State Vs Referência",
        url: "/essenciais/stateVsRef",
        tag: "useRef",
        icone: <IconRefreshAlert />,
      },
      {
        titulo: "Refernciando Elemento",
        url: "/essenciais/refElemento",
        tag: "useRef",
        icone: <IconSection />,
      },
      {
        titulo: "Contagem de Caracteres",
        url: "/essenciais/contagemCaracteresRef",
        tag: "useRef",
        icone: <IconLetterCase />,
      },
    ],
  },
  {
    titulo: "Personalizados",
    aberta: false,
    itens: [
      {
        titulo: "Modal",
        url: "/personalizados/modal",
        tag: "personalizados",
        icone: <IconAppWindow />,
      },
      {
        titulo: "Tamanho Janela",
        url: "/personalizados/tamanhoJanela",
        tag: "personalizados",
        icone: <IconDimensions />,
      },
      {
        titulo: "Validando senha",
        url: "/personalizados/senha",
        tag: "personalizados",
        icone: <IconLock />,
      },
    ],
  },
  {
    titulo: "Contexto",
    aberta: false,
    itens: [
      {
        titulo: "Loja",
        url: "/contexto/loja",
        tag: "useContext",
        icone: <IconShoppingCart />,
      },
    ],
  },
  {
    titulo: "Outros",
    aberta: true,
    itens: [
      {
        titulo: "Memoizando",
        url: "/outros/memoizacao",
        tag: "useMemo",
        icone: <IconPin />,
      },
      {
        titulo: "Memoizando Funções",
        url: "/outros/memoizandoFuncoes",
        tag: "useCallback",
        icone: <IconPin />,
      },
      {
        titulo: "Formulario 1",
        url: "/outros/formularioImperativeHandle",
        tag: "useImperativeHandle",
        icone: <IconForms />,
      },
      {
        titulo: "Texto Secreto",
        url: "/outros/texto",
        tag: "useLayoutEffect",
        icone: <IconTextColor />,
      },
      {
        titulo: "Gerador de Cor",
        url: "/outros/geradorDeCor",
        tag: "useLayoutEffect",
        icone: <IconColorSwatch />,
      },
      {
        titulo: "Soma com useState",
        url: "/outros/somaState",
        tag: "useState",
        icone: <IconDatabase />,
      },
      {
        titulo: "Soma com useReducer",
        url: "/outros/somaReducer",
        tag: "useReducer",
        icone: <IconDatabaseImport />,
      },
      {
        titulo: "Formulário 1",
        url: "/outros/formularioId1",
        tag: "useId",
        icone: <IconForms />,
      },
      {
        titulo: "Formulário 2",
        url: "/outros/formularioId2",
        tag: "useId",
        icone: <IconForms />,
      },
    ],
  },
];

export default secoes;
