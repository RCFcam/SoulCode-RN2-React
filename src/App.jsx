// jsx => Javascript Extend
// Vai permitir escrever código "HTML"
// Dentro do js
//
//componente principal da aplicação :

import Titulo from "./components/Titulo";
import Mensagem from "./components/Mensagem";
import Rodape from "./components/Rodape";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
// Componente principal da aplicação

function App() {
    return ( 
        <>
        <Navbar logado={true} nomeUsuario="batata"/>
        <Blog/>
        <Rodape/>
        </>
    );
}

export default App;