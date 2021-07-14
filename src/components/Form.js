import React from 'react'

export const Form = (props) => {
    
    return (
        <div className="container-form">
            <input type="text" placeholder="Usuário" name="usuario" />
            <input type="text" placeholder="Mensagem" name="mensagem"/>
            <button onClick={props.enviarMensagem}>Enviar</button>
        </div>
    )

}