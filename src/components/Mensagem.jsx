import "./Mensagem.css";

function Mensagem() {
    const textoTitulo = " As batatas qundo nascem se esparramam pelo chão ";
    const nomeAutor = "J. Almir";
    const linkImagem ="https://picsum.photos/200";
return (
    <section className="mensagem-corpo" >
        <h2 className="mensagem-titulo">{props.textoTitulo.toUpperCase()}</h2>
        <img src={props.linkImagem} alt="Imagem da mensagem"/>
        <p className="paragrafo">{props.paragrafo}
        </p>
        <small>Criado por: {props.nomeAutor}</small>
    </section>
);

}
export default Mensagem;