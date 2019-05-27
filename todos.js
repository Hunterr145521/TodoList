import React from 'react';

const  todos = ({todos,onDele}) => {
     const TodosList = todos.length ? (
        todos.map(e => {
             return (
                 <div className="collection-item blue-text" key={e.id}>
                    <span onClick={() => {onDele(e.id)}}>{e.content}</span> 
                 </div>
             )
         })
     ) 
     : 
     (
        <p className="center purple-text"> Yay! no TO-DO's Left Enjoy Your Day.</p>
     )
    return (
        <div className ="todos collection">
            {TodosList}
        </div>
    );
}

export default todos;