import React from 'react';
import './Item.css'

class ItemBook extends React.Component {

    constructor(props){
        super(props);

        this.state ={
            startsRating:[]
        }
    }

    // Funcion se ejecuta cuando el componente se agrega al DOM
    componentDidMount(){
        this.setState({
            startsRating: Array(parseInt(this.props.rating)).fill(0)
        })
    }

    render() {
        return(
            <div className="item">
                <div className="image"><img src={this.props.image} with="100%"></img></div>
                <div className="title">{this.props.title}</div>
                <div className="rating">
                    <p>
                        {
                        this.state.startsRating.map(points => <img src={"star.png"} width="20" />)
                        }

                    </p>
                    Calificación:
                    <select value={this.props.rating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <div className="actions">
                            <button> Eliminar </button>
                    </div>
                </div>
            </div>
        );
    }
}


export default ItemBook;