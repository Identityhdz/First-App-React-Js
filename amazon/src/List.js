import react from 'react';
import ItemBook from './Item';

function List(props) 
{
    return (
        <div className="list">
            {
                props.items.map(book => 
                <ItemBook 
                    key = {book.id}
                    id = {book.id}
                    title = {book.title}
                    image = {book.image}
                    rating = {book.rating}
                    
                    onupdaterating = {props.onupdaterating}

                    onremove = {props.onremove}
                    /> )
            }
        </div>
    );
}

export default List;