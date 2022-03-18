import React from 'react';
import './Item.css'

class ItemBook extends React.Component {

    constructor(props){
        super(props);

        this.state ={
            title: '',
            image:'',
            rating: 0,
            startsRating:[]
        }
    }

    componentDidMount(){
        this.setState({
            id: this.props.id,
            title: this.props.title,
            image: this.props.image,
            rating: parseInt(this.props.rating),
            startsRating: Array(parseInt(this.props.rating)).fill(0)
        })
    }
 
    // Funcion se ejecuta cuando el componente se agrega al DOM
    // componentDidMount(){
    //     this.setState({
    //         startsRating: Array(parseInt(this.props.rating)).fill(0)
    //     })
    // }

    onChange = e =>{
        const rating = parseInt(e.target.value)

        this.setState({
            rating: parseInt(e.target.value),
            startsRating: Array(parseInt(e.target.value)).fill(0)
        })

        this.props.onupdaterating({id:this.state.id, title:this.state.title, image: this.state.image, rating: this.state.rating})
    }

    onRemove = e =>{
        this.props.onremove(this.props.id)
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

                    Ranking:
                    <select value={this.state.rating} onChange={this.onChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <div className="actions">
                            <button onClick={this.onRemove}> Delete </button>
                    </div>
                </div>
            </div>
        );
    }
}


export default ItemBook;