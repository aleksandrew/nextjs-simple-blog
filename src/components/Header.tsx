import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';


const CustomHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 20vw;
    background-color: #000;
    padding-top: 10px;  
    margin-bottom: 20px;
`;

const CustomLink = styled.a`
    color: #fff;
    text-decoration: none;
    font-size: 2rem;
    cursor: pointer;
    transition: all .3s ease;
    
    &:hover, &:focus, &:active {
        text-shadow: 2px 2px 2px red;  
        transition: all .3s ease;  
    }
`;

const Header: React.FC = () => {
    return <CustomHeader>
        <Link href="/">
            <CustomLink> Home </CustomLink>
        </Link>
        <CustomLink> Created post </CustomLink>
    </CustomHeader>;
};

export default Header;
