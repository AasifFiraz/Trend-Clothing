import styled from "styled-components";
import { ReactComponent as CartIcon } from "../../assets/cart-icon.svg";

export const FullCartIconContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const CartIconComponent = styled(CartIcon)`
    width: 35px;
    height: 35px;
`;

export const ItemCountComponent = styled.span`
position: absolute;
font-size: 11px;
font-weight: bold;
bottom: 18px;
font-family: 'Roboto', sans-serif;
left: 14px;
`;