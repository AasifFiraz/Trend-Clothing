import styled from "styled-components";

export const ProductComponentContainer = styled.div`
width: 22vw;
display: flex;
flex-direction: column;
height: 350px;
align-items: center;
position: relative;

.custom-button{
      position: absolute;
      width: 80%;
      opacity: 0.7;
      left: 20px;
      top: 255px;
      display: none;
    }
    
      &:hover{
          .product-img{
            opacity: 0.8;
            border: 1.5px solid #2c2c2c;
            transform: translate(0, -5px);
          }
          
          .custom-button{
            display: block;
          }
        }
`

export const ProductImageComponent = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  transition: transform .3s ease-out;
  background-position: center;
  margin-bottom: 5px;
`

export const ProductFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`

export const ProductNameComponent = styled.span`
width: 90%;
margin-bottom: 15px;
`

export const ProductPriceComponent = styled.span`
width: 10%;
`
