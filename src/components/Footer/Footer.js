import React from "react";
import {
  FooterContainer,
  FooterLinks,
  FooterLinkWrapper,
  FooterLinkItems,
  FooterH2,
  FooterP,
  SocialMedia,
  SocialMediaWrap,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from "./FooterElements";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLinkWrapper>
          <FooterLinkItems>
            <FooterH2>Address</FooterH2>
            <FooterP>
              Av Mexico 2097, Guadalajara, Jalisco, Mexico 44600
            </FooterP>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterH2>Hours</FooterH2>
            <FooterP>
              Monday - Thursday 10:00AM - 11:00PM Friday - Saturday 11:00 -
              3:00AM Sunday: Closed
            </FooterP>
          </FooterLinkItems>
        </FooterLinkWrapper>
        <FooterLinkWrapper>
          <FooterLinkItems>
            <FooterH2>Contact Us</FooterH2>
            <FooterP>
              Phone Number: 33 3630 2532 Email: theperfectmix@business.com
            </FooterP>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterH2>Social Media</FooterH2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Twitter</Link>
          </FooterLinkItems>
        </FooterLinkWrapper>
      </FooterLinks>
      <SocialMedia>
        <SocialMediaWrap>
          <FooterLogo>
            <SocialIconLink Link to="/">
              THE PERFECT MIX
              <SocialIcon />
            </SocialIconLink>
          </FooterLogo>
          <WebsiteRights>
            THE PERFECT MIX © {new Date().getFullYear()}
          </WebsiteRights>
          <SocialIcons>
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
