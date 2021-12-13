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

export const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;
  text-align: left;
  margin: 1rem;
  width: 10rem;
  box-sizing: border-box;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 8px;

  &:hover {
    color: #f15;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  width: 90%;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  display: flex;
  justify-self: start;
  align-items: center;
  color: #fff;
  font-size: 32px;
  text-decoration: none;
  margin-bottom: 16px;
  cursor: pointer;
`;

export const SocialIcon = styled(FaBattleNet)`
  margin-right: 10px;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;

  &:hover {
    color: #4d5;
  }
`;
