import React from 'react';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialLogo, SocialMedia, SocialMediaWrap, SocialIcons, SocialIconLink, WebsiteRights } from "./FooterEements";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return (
        <>
          <FooterContainer>
              <FooterWrap>
                  <FooterLinksContainer>
                      <FooterLinksWrapper>
                          <FooterLinkItems>
                              <FooterLinkTitle>About Us</FooterLinkTitle>
                              <FooterLink to="/">How it works</FooterLink>
                              <FooterLink to="/">Testimonials</FooterLink>
                              <FooterLink to="/">Careers</FooterLink>
                              <FooterLink to="/">Investors</FooterLink>
                              <FooterLink to="/">Terms of Service</FooterLink>
                          </FooterLinkItems>
                          <FooterLinkItems>
                              <FooterLinkTitle>Contact Us</FooterLinkTitle>
                              <FooterLink to="/">Contact</FooterLink>
                              <FooterLink to="/">Support</FooterLink>
                              <FooterLink to="/">Destinations</FooterLink>
                              <FooterLink to="/">Sponsorships</FooterLink>
                          </FooterLinkItems>
                      </FooterLinksWrapper>

                      <FooterLinksWrapper>
                          <FooterLinkItems>
                              <FooterLinkTitle>Videos</FooterLinkTitle>
                              <FooterLink to="/">Submit Video</FooterLink>
                              <FooterLink to="/">Ambassadors</FooterLink>
                              <FooterLink to="/">Agency</FooterLink>
                              <FooterLink to="/">Influencer</FooterLink>
                          </FooterLinkItems>
                          <FooterLinkItems>
                              <FooterLinkTitle>Business</FooterLinkTitle>
                              <FooterLink to="/">Stuff</FooterLink>
                              <FooterLink to="/">More stuff</FooterLink>
                              <FooterLink to="/">Additional stuff</FooterLink>
                              <FooterLink to="/">Extra stuff</FooterLink>
                          </FooterLinkItems>
                      </FooterLinksWrapper>
                  </FooterLinksContainer>
                  <SocialMedia>
                      <SocialMediaWrap>
                          <SocialLogo to="/">Ganji</SocialLogo>
                          <WebsiteRights>Ganji © {new Date().getFullYear()} All rights reserved</WebsiteRights>
                          <SocialIcons>
                              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                  <FaFacebook />
                              </SocialIconLink>
                              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                  <FaInstagram />
                              </SocialIconLink>
                              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                  <FaTwitter />
                              </SocialIconLink>
                              <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                                  <FaLinkedin />
                              </SocialIconLink>
                          </SocialIcons>
                      </SocialMediaWrap>
                  </SocialMedia>
              </FooterWrap>
          </FooterContainer>
        </>
    );
};

export default Footer;
