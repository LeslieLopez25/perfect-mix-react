import styled from "styled-components";

export const ProductsContainer = styled.div`
  padding: 80px calc((100vw - 1300px) / 2);
  width: 100%;
  min-height: 100%;
  background: linear-gradient(150deg, #682c0e 35%, #006b3c 100%);
  color: #fff;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  line-height: 2;
  width: 300px;
  margin: 0 32px;
`;

export const ProductImg = styled.img`
  min-width: 300px;
  max-width: 100%;
  height: 300px;
  box-shadow: 8px 8px #228b22;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(32px, 2.5vw, 48px);
  text-align: center;
  margin-bottom: 80px;
`;

export const ProductTitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 32px;
`;

export const ProductDesc = styled.p`
  margin-bottom: 16px;
`;

export const ProductPrice = styled.p`
  font-size: 32px;
  margin-bottom: 16px;
`;

export const ProductButton = styled.button`
  background: #006994;
  color: hsl(0, 0%, 100%);
  font-size: 16px;
  padding: 16px 64px;
  border: none;
  transition: 0.2 ease-out;
  &:hover {
    background: #1dacd6;
    color: #080808;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
