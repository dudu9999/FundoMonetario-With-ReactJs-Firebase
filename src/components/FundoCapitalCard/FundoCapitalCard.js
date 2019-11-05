import React from 'react';
import './FundoCapitalCard.css';

const FundoCapitalCard = (props) => {
    return (   
            <div className="card">
                <div className="card-icon">
                    <i className="fas fa-pen" onClick={props.editarFundoHandle}></i>
                    <i className="fas fa-times" onClick={props.removerFundoHandle}></i>

                </div>
                <div className="card-content">
                </div>
    
                <div className="card-footer">
                    <span style={{fontWeight:'bold', color: '#001AA0'}}>{props.nome}</span>
                </div>
            </div> 
        );
    
}
 
export default FundoCapitalCard;