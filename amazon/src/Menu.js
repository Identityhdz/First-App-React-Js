import react from 'react';
import Search from './Search'
import './Menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

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
                </div>
            </div>
        </div>
    )
}

export default Menu;

