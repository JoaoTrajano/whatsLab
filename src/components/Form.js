import React from 'react'
import { Mensage } from './Mensagens'

export class ContainerForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            arrayMensages: []
        }

        this.onChangeNameUser = this.onChangeNameUser.bind(this);
        this.onChangeMensage = this.onChangeMensage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeNameUser = (event) => {
        let newNameValue = event.target.value;
        this.setState({ nameUsuario: newNameValue });
    }

    onChangeMensage = (event) => {
        let newMensage = event.target.value;
        this.setState({ mensage: newMensage });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const mensage = {
            nameUsuario: this.state.nameUsuario,
            mensage: this.state.mensage
        }

        this.setState({ arrayMensages: [...this.state.arrayMensages, mensage] })
    }

    render() {

        return <div className="container-form">
            <div className="container-mensage">
                {this.state.arrayMensages.map((idObject) => {
                    return <Mensage user={idObject.nameUsuario} mensage={idObject.mensage} />
                })}
            </div>

            <form onSubmit={this.handleSubmit}>
                <input onChange={this.onChangeNameUser} value={this.state.nameUsuario} type="text" placeholder="Usuário" name="usuario" />
                <input onChange={this.onChangeMensage} type="text" placeholder="Mensagem" name="mensagem" />
                <button>Enviar</button>
            </form>
        </div >
    }

}

