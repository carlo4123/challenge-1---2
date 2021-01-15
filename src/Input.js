import React from 'react';
import { BsFillLockFill } from 'react-icons/bs';

function Input(props){
    console.log(props.icon)

    function iconLogic(iconVariant){
        if(iconVariant){
          
            if(iconVariant === "startIcon"){
             
                return <BsFillLockFill className={`icon  ${props.icon}`}/>
                
            }
            else if(iconVariant ==="endIcon"){
                return <BsFillLockFill className={`icon  ${props.icon}`}/>
            }
        }
       

    }
    return (
        <div className={`inputGroup ${props.width}`}>

          {iconLogic(props.icon)}
           
          

            <input 
            className={props.class}  
            placeholder={props.placeholder}
             type={props.type}  
            disabled={props.disabled}
            rows={props.rows}

            />
        </div>
    )
}

export default Input