import React from 'react';
import Display from './Display';


function Data(props) {
    return (
        <div className="container">
        {
        
        props.items.map( e => <Display 
            onDelete={props.handleDelete}
            data={props.items}
            key={e.id}
            
            id={e.id}
            name={e.name} 
            count={e.count} />
          )
        }
        </div>
    )
}

export default Data
