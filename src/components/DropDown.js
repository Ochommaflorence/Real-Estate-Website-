import React from 'react'
import styled from 'styled-components';

const DropDownContainer = styled.div`
   position: fixed;
   z-index: 999;
   width: 100%;
   height: 100%;
   background:#cd853f;
   display: grid;
   align-items: center;
   top: 0;
   left: 0;
   transition: 0.3s ease-in-out;
   opacity: 1;
`

const DropDown = () => {
    return (
        <DropDownContainer>
            <h1>hhhhhhhhhhhhhhh</h1>
        </DropDownContainer>
    )
}

export default DropDown
