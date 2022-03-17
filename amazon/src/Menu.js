import react from 'react';
import Search from './Search'
import './Menu.css'

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
                    <button type="button" className="button btn-blue ">Agregar Nuevo</button>
                </div>
            </div>
        </div>
    )
}

export default Menu;