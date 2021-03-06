import React from 'react';

const Sobre = () => {
    return(
        <div id="sobre">
            <div className="grid-sobre">    
                <div className="card-foto">
                    <div className="foto">
                        <div className="folha">
                        </div>
                    </div>
                </div>
                <div style={{cursor: 'default'}} className="card-descricao">
                    <h3>Minha História</h3>
                    <p>
                        Estudante de Física do Instituto Federal de Educação,
                        Ciência e Tecnologia do Maranhão Campus Imperatriz,
                        sempre fui apaixonado por tecnologia, inovação e ciência.
                        Desde pequeno sempre gostei de aprender sozinho e a internet
                        vem se tornando uma grande aliada para isso.
                        Mesmo sendo um aluno exemplar na escola convencional, acredito
                        vigorosamente que o nosso sistema de ensino esteja defasado em relação
                        aos nossos avanços como civilização. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Sobre