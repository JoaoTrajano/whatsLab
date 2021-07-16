import React from 'react'

export class Mensage extends React.Component {

    render() {
        return <div className="mensage">
            <div>
                <b><span>{this.props.user}</span></b>
            </div>
            <div>
                <span>{this.props.mensage}</span>
            </div>

        </div>
    }
}