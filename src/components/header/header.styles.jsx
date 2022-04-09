import styled, {css} from 'styled-components';
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
    box-sizing: content-box;
    cursor: pointer;    
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const OptionContainerStyles = css`
    color: #2c2c2c;
    cursor: pointer;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    padding: 10px 15px;
`

export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
    ${OptionContainerStyles}
`