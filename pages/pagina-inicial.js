import React, {useState} from 'react';
import Link from 'next/link';

import Sobre from './conheca-me/sobre';
import Habilidades from './conheca-me/habilidades';
import Projetos from './conheca-me/projetos';
import Contato from './conheca-me/contato';

const PaginaInicial = () => {
    let conteudo = [<Sobre/>, <Habilidades/>, <Projetos/>, <Contato/>];
    const[Conteudo, AlterarConteudo] = useState(conteudo[3]);

    return(
        <div id="pagina-inicial">
            
            <header id="topo">
                <div>
                <a><h1 className="nome">Jefferson Barros</h1></a>
                    <div className="menu">
                        <a href="#conhecer" className="card-menu" onClick={ () => AlterarConteudo(conteudo[0]) }>
                            <h3>Sobre</h3>
                        </a>
                        <a href="#conhecer" className="card-menu" onClick={ () => AlterarConteudo(conteudo[1]) }>
                            <h3>Habilidades</h3>
                        </a>
                        <a href="#conhecer" className="card-menu" onClick={ () => AlterarConteudo(conteudo[2]) }>
                            <h3>Projetos</h3>
                        </a>
                        <Link href="/contato" > 
                            <a className="card-menu" onClick={ () => AlterarConteudo(conteudo[3]) }>
                                <h3>Contato</h3>
                            </a>
                        </Link>
                    </div>
                </div>
            </header>

            <main id="inicio">
                <h1 className="title">
                    JEFFERSON <Link href="#conhecer"><a onClick={ () => AlterarConteudo(conteudo[0]) }>BARROS</a></Link>
                </h1>

                <p className="descricao">
                    <a href="#conhecer" onClick={ () => AlterarConteudo(conteudo[0]) }>(: Conheça-me :)</a>
                </p>
    
                <div id="conhecer" >
                    <div className="grid">
                        
                        <div className="frase-A">
                            "Eu poderia desistir, mas vejo um bom motivo para continuar...
                            eu adoro as coisas difíceis."
                            <h3>Camila Bill</h3>
                        </div>
                        <div className="frase-B">
                            "Controle suas condições iniciais e determine dentro de sua fonte de aleatoriedade qual será o seu destino."
                            <h3>Silvio Antonio Corrêa Junior</h3>
                        </div>
                        <div className="frase-C">
                            "Logo que, numa inovação, nos mostram alguma coisa de antigo, ficamos sossegados."
                            <h3>Friedrich Nietzsche</h3>
                        </div>
                        <div className="frase-D">
                            "Se você quiser fazer uma torta de maçã a partir do zero,
                            você deve primeiro inventar o Universo."
                            <h3>Carl Sagan</h3>
                        </div>
                        <div className="frase-E">
                            "A física é a poesia da natureza. A matemática, o idioma."
                            <h3>Antonio Gomes Lacerda</h3>
                        </div>
                    </div>
                </div>

                {Conteudo}

                <div className="fundo2">
                    <div className="conteudo-fundo2">
                        <a href="#inicio" onClick={ () => AlterarConteudo("") }>
                            <img className="seta" src="/img/seta.png"/>
                        </a>
                        <div className="box-engrenagem">
                            <a href="#inicio" onClick={ () => AlterarConteudo("") }>
                                <img className="engrenagem" src="/img/engrenagem.png"/>
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <footer id="rodape-inicial">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    Developed by <h4>: Jefferson Barros Vieira</h4>.
                </a>
            </footer>
        </div>
    )
}

export default PaginaInicial