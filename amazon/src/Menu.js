import React from 'react';
import Search from './Search'
import AddNewBook from './AddNewBook';
import './Menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons'

class Menu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            panelOn: false
        }

        // Binding function add
        // this.add = this.add.bind(this)
    }

    // add(){
    //     this.setState({panelOn: true})
    //     console.log("sss")
    // }

    addBook = () =>{
        this.setState({panelOn: true})
        console.log("Click open modal")
    }

    cancelAddBook = (e) => {
        console.log("Click close modal")
        this.setState({panelOn: false})
    }

    render() {
        return (
            <div className="container">
                <div className="subcontainer">
                    <div className="logo">
                        {this.props.title}
                    </div>
                    <div className="search">
                        <Search />
                    </div>
                    <div className="actions">
                        <button onClick={this.addBook} type="button" className="button btn-warning"><FontAwesomeIcon icon={faSearch} /></button>
                    </div>
                </div>

                {
                    (this.state.panelOn) ? 
                    <AddNewBook 
                        cancelAddBook={this.cancelAddBook} 
                        onadd={this.props.onadd}
                        />
                    :
                     ""
                }
    

            </div>
        )
    }
}


export default Menu;

