import React from "react";

class AddNewBook extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            image: '',
            rating: 1
        }
    }

    submitForm = (e) => {
        e.preventDefault();
        console.log("Click submit form")

        const titleValue = this.state.title,
              imageValue = this.state.image,
              ratingValue = this.state.rating;

        this.props.onadd({title: titleValue, image: imageValue, rating: ratingValue})
        this.props.cancelAddBook()
    }

    onChangeTitle = (e) =>{
        e.preventDefault()
        this.setState({title: e.target.value})
    }

    onChangeImage = (e) =>{
        e.preventDefault()
        this.setState({image: e.target.value})
    }

    onChangeRating = (e) =>{
        const rating = parseInt(e.target.rating)
        this.setState({rating: rating})
    }

    render() {
        return (
            <div className="new-item-panel-container">
            <div className="new-item-panel">
                <form onSubmit={this.submitForm}>
                    <p>
                    <label>Título del libro</label><br />
                    <input onChange={this.onChangeTitle} type="text" name="title" className="input" />
                    </p>
    
                    <p>
                    <label>Nombre de imagen</label><br />
                    <input onChange={this.onChangeImage} type="text" name="image" className="input"/>
                    </p>
    
                    <p>
                    <label>Calificación</label><br />
                    <select onChange={this.onChangeRating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    </p>
                    <input type="submit" className="button btn-blue" value="Registrar libro" />
                    <button onClick={this.props.cancelAddBook} className="button btn-normal">Cancelar</button>
                </form>
            </div>
        </div>
        );
    }
}

 export default AddNewBook;