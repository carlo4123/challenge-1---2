import React from 'react';
import FormGroup from './FormGroup';

const kindsOfInput = () =>{
    return (
        <div>
            <h1>Input</h1>
            <FormGroup placeholder="placeholder" type="email"/>
            <FormGroup placeholder="with Error Warning" type="email"/>
            <FormGroup inputClass="" placeholder="placeholder" helperText="Some interesting text" />
            <FormGroup inputClass="" placeholder="disabled" helperText="Some interesting text" disabled="true"/>
            <FormGroup inputClass="WithStartIcon" placeholder="start Icon" icon="startIcon" />
            <FormGroup inputClass="" placeholder="placeholder" icon="endIcon"/>
          
            <FormGroup inputClass="input-sm " placeholder="input sm"  type="text"/>
            <FormGroup inputClass="input-md " placeholder="input md" type="text"/>
       
            <FormGroup inputClass="fwidth" placeholder="Full width"  width="fwidth" type="text"/>
            <textarea rows="4" placeholder="text area"/>
        </div>
    )
}

export default kindsOfInput