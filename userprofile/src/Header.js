import React from 'react';
function Header(props)
{
    return(
        <>
        <div class="Header" style={{ backgroundColor: '#4CAF50', padding: '1rem', color: 'white' }} >
            <h1 >ENCORA</h1>
            <h3>Welcome {props.Name}</h3>
        </div>
        </>
    )
}
export  default Header;