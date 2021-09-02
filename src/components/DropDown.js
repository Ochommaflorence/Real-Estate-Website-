import React from 'react'
import styled from 'styled-components';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import {Link} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa'

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
const Icon = styled.div`
 position: absolute;
 top:1.2rem;
 right:1.5rem;
 background: transparent;
 font-size: 2rem;
 cursor: pointer;
 outline: none;
`
const CloseIcon = styled(FaTimes)`
  color: #000d1a;
`
const DropdownWrapper = styled.div``

const DropdownMenu = styled.div`
 display:grid;
 grid-template-columns: 1fr;
 grid-template-rows: repeat(4, 80px);
 text-align:center;
 margin-bottom: 4rem;
`
const DropdownLink = styled(Link)`
 display: flex;
 align-items: center;
 justify-content: center;
 color: #fff;
 font-size: 1.5rem;
 text-decoration: none;
 list-style:none;
 color: #fff;
 cursor: pointer;
 transition:0.2s ease-in-out;
`
const BtnWrap = styled.div``



const DropDown = () => {
    return (
        <DropDownContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((item, index) => {
                        return(
                            <DropdownLink to={item.Link} key={index}>
                            {item.title}
                        </DropdownLink>
                        )
                        
                    })}
                </DropdownMenu>
                <BtnWrap>
                    <Button primary="true" round="true" big="true" to="/">SEE ME</Button>
                </BtnWrap>
            </DropdownWrapper>
        </DropDownContainer>
    )
}

export default DropDown
