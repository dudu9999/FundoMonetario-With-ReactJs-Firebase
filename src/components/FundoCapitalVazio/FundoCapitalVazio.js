import React from 'react';
import './FundoCapitalVazio.css'

const FundoCapitalVazio = (props) => {
    return ( 
        <div className='card'>
             <div className='card-content   '>
             <div style={{margin:'auto',marginTop:'5px',marginBottom:'20px',width:'150px',
                height:'150px',border:'2px dashed #ccc', borderRadius:'50%', cursor:'pointer'}} onClick={props.onClick}>
        <i style={{color:'#ccc', fontSize: '80px', padding:'30px'}} className='fa fa-plus'></i>
        </div>
        </div>
        <div>
            <span style={{fontWeight:"bold",color: '#001AA0' }}>Novo Fundo</span>
        </div>
        </div>
     );
}
 
export default FundoCapitalVazio;