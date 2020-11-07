import React, { useState } from "react";
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [isExpanded, setExpanded] = useState(false); 
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event){
       const {name, value} =  event.target;

       setNote(prevNote =>{
           return {
               ...prevNote,
               [name]: value
           }
       })
    }

    function submit(event){
        props.onAdd(note)
        setNote({
            title:"",
            content:""
        })
        event.preventDefault();
    }

    function expand(){
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
            {isExpanded ? 
                <input 
                onChange={handleChange} 
                name="title" 
                placeholder="Title" />
                : null
            }
                <textarea onClick={expand} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpanded ? 3:1}></textarea>
                <Zoom in={isExpanded}>
                    <Fab onClick={submit}>+</Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;