import React from 'react';
import Button from './Button';

const kindsOfButton = () =>{
    return (
        <div>

            <h1>Button</h1>
            <Button label="default" variant="default" />
            <Button label="default" variant="outline"/>
            <Button label="default" variant="text"/>
            <Button label="no shadow" variant="no-shadow" />
            <Button label="default" disabled="true"/>
         
            <Button label="start Icon" variant="primary" icon="startIcon"/>
            <Button label="end Icon" variant="primary" icon="endIcon"/>
               

            <Button label="default" variant="text" disabled="true"/>
            <Button label="btn-sm" variant="primary" size="sm"/>
            <Button label="btn-md" variant="primary" size="md"/>
            <Button label="btn-lg" variant="primary"size="lg" />
            <Button label="default" variant="default" />
            <Button label="primary" variant="primary" />
            <Button label="secondary" variant="secondary" />
            <Button label="danger" variant="danger" />
        </div>
    )
}

export default kindsOfButton