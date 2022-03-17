import react from 'react';
import Search from './Search'
import AddNewBook from './AddNewBook';
import './Menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons'

function Menu(props) 
{
    return (
        <div className="container">
            <div className="subcontainer">
                <div className="logo">
                    {props.title}
                </div>
                <div className="search">
                    <Search />
                </div>
                <div className="actions">
                    <button type="button" className="button btn-warning"><FontAwesomeIcon icon={faSearch} /></button>
                    {/* <button type="button" className="button btn-blue"><FontAwesomeIcon icon={faPlus} /> Add New</button> */}
                </div>
            </div>

            <AddNewBook/>
        </div>
    )
}

export default Menu;

