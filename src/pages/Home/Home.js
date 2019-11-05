import React from 'react';
import './Home.css';
import 'components/FundoCapitalCard/FundoCapitalCard';
import FundoCapitalCard from 'components/FundoCapitalCard/FundoCapitalCard';

const Home = () => {
    const fundos = [ 
        {
            id: 1,
            nome: "Fundo teste 1",
            valorAtual: 250,
            valorNecessario: 2500,
            porcentagem: 10,
            dataResgate: new Date().toISOString()
        },
        {
            id: 2,
            nome: "Fundo teste 2",
            valorAtual: 400,
            valorNecessario: 1500,
            porcentagem: 50,
            dataResgate: new Date().toISOString()
        },
        {
            id: 3,
            nome: "Fundo teste 3",
            valorAtual: 100,
            valorNecessario: 500,
            porcentagem: 45,
            dataResgate: new Date().toISOString()
        },
        {
            id: 4,
            nome: "Fundo teste 4",
            valorAtual: 2050,
            valorNecessario: 3000,
            porcentagem: 30,
            dataResgate: new Date().toISOString()
        },
        {
            id: 5,
            nome: "Fundo teste 5",
            valorAtual: 1000,
            valorNecessario: 2000,
            porcentagem: 25,
            dataResgate: new Date().toISOString()
        },
        {
            id: 6,
            nome: "Fundo teste 6",
            valorAtual: 250,
            valorNecessario: 2500,
            porcentagem: 10,
            dataResgate: new Date().toISOString()
        },
        
    ]


    return ( 
    <div className="row">
        <div className="card">
            {
                fundos.map(fundo => (
                    <FundoCapitalCard 
                    key={fundo.id}
                    porcentagem={fundo.porcentagem}
                    nome={fundo.nome}
                    valorAtual={fundo.valorAtual}
                    />
                ))
            }
        </div>
    </div> 
    );
}

export default Home;