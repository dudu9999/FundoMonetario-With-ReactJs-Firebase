import React, { useState, useEffect } from 'react';
import './Home.css';
import FundoCapitalCard from 'components/FundoCapitalCard/FundoCapitalCard';
import CadastroFundoModal from 'components/CadastroFundoModal/CadastroFundoModal';
import FundoCapitalVazio from 'components/FundoCapitalVazio/FundoCapitalVazio';
import database from 'services/database';

const Home = () => {
    const [visivel, setVisivel] = useState(false)
    const [fundoSelecionado, setFundoSelecionado] = useState(false)
    const [fundos, setfundos ] = useState([]);

    useEffect(() => {
        database.listarFundos().then(response => {
            setfundos(response);
        });
    }, []);

    const editarFundo = fundo => {
        setVisivel(true);
        setFundoSelecionado(fundo);
        console.log('editando o fundo ' + fundo.id)
    };

    const removerFundo = async fundo => {
        setVisivel(true);
        console.log('removendo o fundo ' + fundo.id)
    };

    const onClose = () => {
        setVisivel(false);
    };


    return ( 
        <div className="row">
                {
                    fundos.map(fundo => (
                        <FundoCapitalCard 
                            key={fundo.id}
                            porcentagem={fundo.porcentagem}
                            nome={fundo.nome}
                            valorAtual={fundo.valorAtual}
                            editarFundoHandle={() => editarFundo(fundo)}
                            removerFundoHandle={() => removerFundo(fundo)}
                        />
                    ))
                }
                <FundoCapitalVazio onClick={() => editarFundo({
                    dataResgate: undefined,
                    valorAtual: 0,
                    valorNecessario: 0
                })}/>
                <CadastroFundoModal visivel={visivel} onClose={onClose} fundo={fundoSelecionado}/>
        </div> 
    );
}

export default Home;

    /*const fundos = [ 
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
            valorAtual: 1000,
            valorNecessario: 2000,
            porcentagem: 25,
            dataResgate: new Date().toISOString()
        },
        {
            id: 3,
            nome: "Fundo teste 3",
            valorAtual: 400,
            valorNecessario: 1500,
            porcentagem: 50,
            dataResgate: new Date().toISOString()
        },
        
    ] */
