import React from 'react'

export const Form = () => {

    return (
        <form className="container-form">
            <input type="text" placeholder="Usuário" />
            <input type="text" placeholder="Mensagem"/>
            <button>Enviar</button>
        </form>
    )

}