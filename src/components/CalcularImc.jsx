import React, { Component } from 'react';

class CalcularImc extends Component {
    static defaultProps = {
        limite: 60
    };

    constructor(props){
        super(props);
        
        this.state = {
            valorPeso: 0,
            valorAltura: 0,
            imc: 0
        };

        this.alterarDados = this.alterarDados.bind(this);
        this.calcular = this.calcular.bind(this);
    }

    alterarDados(event){
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    calcular(){
        const { valorAltura, valorPeso } = this.state;
        let imc = valorPeso / (valorAltura * valorAltura);

        imc = imc <= this.props.limite ? imc : this.props.limite;

        this.setState({
            imc
        })
    }

    render(){
        const { state, props } = this;

        return(
            <div className="container">
                <h2 className="title">Calcular IMC</h2>
                <strong>Altura:</strong><input 
                    type="number" 
                    name="valorAltura"
                    onChange={this.alterarDados}
                    placeholder="Digite a altura"/> <br/>
                
                <strong className="peso">Peso: </strong> <input 
                    type="number" 
                    name="valorPeso"
                    onChange={this.alterarDados}
                    placeholder="Digite seu peso"/><br/><br/>


                    <strong>Resultado:</strong> {state.imc}<br/><br/>

                    <strong>Limite:</strong> {props.limite} <br/>
                    <div className="btn" onClick={this.calcular} > Calcular </div>

            </div>
        );
    }
}
export default CalcularImc;