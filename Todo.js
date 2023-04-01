import React, { useState } from 'react';
import Para from './Para';

function Todo() {
    const [input, setInput] = useState('');
    const [itemlist, setItemlist] = useState([]);


const handleChange=(e)=>{
    setInput(e.target.value)
}
const handleSubmit=()=>{
    console.log("clicked")
setItemlist([...itemlist,input])
setInput('')
}
const removeitem = (index) => {
 
    const removedelete = itemlist.filter((value, i) => i !== index );
    setItemlist(removedelete);
  };
    return (
        <div>

            <div className="parent">

                <div className="head">
                    <h1>To-Do List</h1>
                </div>
                <div className="child">
                    <input type="text" placeholder='Enter Your Task Here......' className='field' value={input} id='todoInput'   
                    //  onChange={(e) => setInput(e.target.value)} 
                            onChange={(e)=> handleChange(e)}
                     />
                    <button className='click' onClick={() => handleSubmit()}>+</button>

                </div>

    
                 { itemlist && itemlist.map((item,index)=>
                  
                   <div className='box'>
                    <p className='shift'>{item}</p>


                    <button id="rem" onClick={()=>removeitem(index)}>Delete</button>
                    </div>

                 )}
            </div>
        </div>
    )
}


export default Todo