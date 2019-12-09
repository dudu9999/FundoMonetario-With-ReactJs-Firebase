import React, {useState, useEffect} from 'react';
import './CadastroFundoModal.css';
import { Modal, Button, Form, Input, InputNumber, DatePicker} from 'antd';
import moment from 'moment';
import database from 'services/database';
import onCLose from '../../pages/Home/Home';


const CadastroFundoModal = (props) => {
    const [nome, setNome] = useState('');
    const [valorAtual, setValorAtual] = useState(0);
    const [valorNecessario, setValorNecessario] = useState(0);
    const [dataResgate, setDataResgate] = useState(null);

    useEffect(() => {
        setNome(props.fundo.nome)
        setValorAtual(props.fundo.valorAtual)
        setValorNecessario(props.fundo.valorNecessario)
        setDataResgate(null)
        if (props.fundo.dataResgate){
            setDataResgate(moment(props.fundo.dataResgate));
        }
    }, [props.fundo]);

    const handleOk = async () => {   
        if (props.fundo.id){
            await database.editarFundo(props.fundo.id, {
                nome,
                valorAtual,
                valorNecessario,
                dataResgate: dataResgate ? dataResgate.toISOString() : null
            });
        }else{
            await database.adcionarFundo({
                nome,
                valorAtual,
                valorNecessario,
                dataResgate: dataResgate ? dataResgate.toISOString() : null
            });
        }
        props.onCLose();
    }

    const handleCancel = () => {
        props.onClose();
    }


    return ( 
        <Modal title="Criar fundo de Capital" visible={props.visivel} onCancel={handleCancel}
            footer={
                    [
                        <Button key="cancel"onClick={handleCancel}type="link">CANCELAR</Button>,
                        <Button key="submit"onClick={handleOk}    type="link">SALVAR</Button>
                    ]
            }>

            <Form layout="vertical">
                <Form.Item label="Nome">
                    <Input value={nome} onChange={event => setNome(event.target.value)} />
                </Form.Item>
                
                <Form.Item label="Valor atual">
                    <InputNumber defaultValue={0} 
                    formatter={value => `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g,'.')}
                    parser={value => value.replace(/R\$\s?|(\.*)/g,'')}
                    value={valorAtual}
                    onChange={value => setValorAtual(value)} />        
                </Form.Item>  
                                
                <Form.Item label="Valor necessário">
                    <InputNumber defaultValue={0} 
                    formatter={value => `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g,'.')}
                    parser={value => value.replace(/R\$\s?|(\.*)/g,'')}
                    value={valorNecessario}
                    onChange={value => setValorNecessario(value)} />        
                </Form.Item>    
                                                
                <DatePicker 
                    format="DD-MM-YYYY"
                    placeholder="Selecione uma data"
                    value={dataResgate}
                    onChange={value => setDataResgate(value)} 
                />

            </Form>

        </Modal>

    );
    
}
 
export default CadastroFundoModal;