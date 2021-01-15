import React from 'react';
import Input from './Input';


function InputGroup(props){

    console.log(props.icon)
    return (
        <div className="form-group my-1">
            
        
           <Input
            class={props.inputClass}  
            width={props.width}
            placeholder={props.placeholder}
             type={props.type}  
            disabled={props.disabled}
            rows={props.rows}
            icon={props.icon}
           
           />
           
            <label>Label</label>
            {props.helperText && <small>{props.helperText}</small> }
            
            
         
        </div>
    )
}

export default InputGroup