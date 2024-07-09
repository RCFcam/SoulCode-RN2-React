// Renderização Condicional: = mudar o visual
// e a estrutura de acordo com algum valor.
//
//

function Navbar(props) {
    <header>
        <hr />
        <p>Bem-vindo(a)! {props.nomeUsuario}</p>
        <nav>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Postagens</a>
                </li>
                <li>
                    <a href="#">Meu perfil</a>
                </li>
                <li>
                    <a href="#">Sair</a>
                </li>
            </ul>
        </nav>
    </header>;
}
export default Navbar;

/*
// Metodo 1

if(props.logado){
        return (
        <header>
        <hr />
        <p>Bem-vindo(a)! {props.nomeUsuario}</p>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Postagens</a></li>
                <li><a href="#">Meu perfil</a></li>
                <li><a href="#">Sair</a></li>
            </ul>
        </nav>
        <hr/>
    </header>
    );
   }
    else{
        return (
            <header>
        <hr />
        <p>Você está desconectado!</p>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Postagens</a></li>
            </ul>
        </nav>
        <hr/>
    </header>
        );
    }



*/
