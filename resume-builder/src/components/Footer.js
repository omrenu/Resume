import React from 'react';
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
    const StyleFooter = styled.footer`
        display:flex;
        align-items:center;
        padding: 2rem;
        background-color:${({ theme }) => theme.colors.dark};
        color: ${({ theme }) => theme.colors.light};
    `;
    const Copyright = styled.p`
     margin-right: 1rem;
    `;
    const Link = styled.a`
        top: 0.2rem;
        color: ${({ theme }) => theme.colors.light};
        &:hover {
        color: ${({ theme }) => theme.colors.lightHover};
        }
    `;

    return (
        <StyleFooter>
            <Copyright>Copyright © 2021 rdmahesh22 </Copyright>
            <Link href="https://github.com/omrenu" target="_blank">
                <FaGithub />
            </Link>
        </StyleFooter>
    );
}
export default Footer;