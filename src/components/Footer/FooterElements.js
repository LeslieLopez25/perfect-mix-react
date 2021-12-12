import styled from "styled-components";
import { FaBattleNet } from "react-icons/fa";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #45fd;
  padding: 64px 0 32px 0;

  @media screen and (max-width: 820px) {
    position: absolute;
  }
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  margin-bottom: 24px;
  padding: 24px;
`;

export const FooterSubHeading = styled.p`
  font-family: "Signika", sans-serif;
  font-size: 24px;
  margin-bottom: 24px;
`;

export const FooterSubText = styled.p`
  font-size: 20px;
  margin-bottom: 24px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
  font-size: 16px;
  margin-right: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 2px;
  outline: none;
  border: 1px solid #fff;

  &::placeholder {
    color: #15d;
  }

  @media screen and (max-width: 820px) {
    margin: 0 0 16px 0;
    width: 100%;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1000px;
  width: 100%;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinksItems = styled.div``;
