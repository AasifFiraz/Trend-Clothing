import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
      }
`

export const ImageContainerComponent = styled.div`
    width: 23%;
    padding-right: 15px;
`
export const NamePriceComponent = styled.span`
    width: 23%;
`
export const QuantityComponent = styled.span`
      display: flex;
      width: 23%;

      .arrow{
        cursor: pointer;
      }

      .value{
        margin: 0 10px;
      }
`