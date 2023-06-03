import Pagina from "../components/template/Pagina";
import Logo from "../components/template/Logo";

export default function Home() {
  return (
      <Pagina>
        <Logo
          grande
          col
          subtitulo="Todo o poder do React em componentes funcionais"
        />
      </Pagina>
  )
}
