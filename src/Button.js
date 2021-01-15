import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

function Button(props){

    return (
        <div>
            <button disabled={props.disabled} className={`btn btn-${props.variant} btn-${props.size}  ${props.shadow} my-1`} >
                {props.icon === "startIcon"  && <MdAddShoppingCart className="mr-1"/>  }
                {props.label}
                {props.icon === "endIcon"  && <MdAddShoppingCart className="ml-1" />  }
              
            </button>
        </div>
    )
}

export default Button