import React from 'react'
import styled from 'styled-components';
import { menuData } from '../data/MenuData';

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
            <Icon>
                <CloseIcon/>
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData((item, index) => {
                        <DropdownLink to={item.Link} key={index}>
                            {item.title}
                        </DropdownLink>
                    })}
                </DropdownMenu>
            </DropdownWrapper>
        </DropDownContainer>
    )
}

export default DropDown
