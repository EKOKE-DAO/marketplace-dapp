import * as React from 'react';
import * as Icon from 'react-icons/fi';

import Container from './reusable/Container';
import Heading from './reusable/Heading';
import Link from './reusable/Link';
import X from './svg/X';
import TikTok from './svg/TikTok';
import Telegram from './svg/Telegram';
import { Route } from '../utils/routes';
import Paragraph from './reusable/Paragraph';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="z-10">
      <Container.Container className="bg-brandRed text-white m-0 p-8">
        <div className="bg-white content-none h-[1px] mx-auto w-page"></div>
        <Container.FlexResponsiveRow className="justify-between w-page sm:w-full mx-auto">
          <Container.FlexCols className="gap-4 flex-1">
            <Heading.H2 className="text-white">EKOKE DAO</Heading.H2>
            <Link.Default href={Route.HOME} className="text-white">
              Home
            </Link.Default>
            <Link.Default href={Route.MARKETPLACE} className="text-white">
              Marketplace
            </Link.Default>
            <Link.Default href={Route.AGENCIES} className="text-white">
              Agencies
            </Link.Default>
            <Link.Default href={Route.PRESALE} className="text-white">
              Presale
            </Link.Default>
            <Link.Default href={Route.ABOUT} className="text-white">
              About
            </Link.Default>
            <Link.Default href={Route.DOCUMENTATION} className="text-white">
              Documentation
            </Link.Default>
          </Container.FlexCols>
          <Container.FlexCols className="gap-4 flex-1">
            <Heading.H2 className="text-white">Legal</Heading.H2>
            <Link.Default href={Route.COOKIES} className="text-white">
              Cookies
            </Link.Default>
            <Link.Default
              href={Route.TERMS_AND_CONDITIONS}
              className="text-white"
            >
              Terms & Conditions
            </Link.Default>
            <Link.Default href={Route.PRIVACY} className="text-white">
              Privacy
            </Link.Default>
          </Container.FlexCols>
          <Container.FlexCols className="gap-4 flex-1">
            <Heading.H2 className="text-white">Follow Us On</Heading.H2>
            <Link.IconLink
              href={'https://github.com/EKOKEtoken'}
              target="_blank"
              className="text-white"
            >
              <Icon.FiGithub className="mr-2 inline text-white" />
              GitHub
            </Link.IconLink>
            <Link.IconLink
              href={'https://www.instagram.com/ekokedao'}
              target="_blank"
              className="text-white"
            >
              <Icon.FiInstagram className="mr-2 inline text-white" />
              Instagram
            </Link.IconLink>
            <Link.IconLink
              href={'https://www.linkedin.com/company/ekokedao'}
              target="_blank"
              className="text-white"
            >
              <Icon.FiLinkedin className="mr-2 inline text-white" />
              LinkedIn
            </Link.IconLink>
            <Link.IconLink
              href={'https://t.me/ekokeTOKENgroup'}
              target="_blank"
              className="text-white"
            >
              <Telegram fill="#ffffff" />
              <span className="ml-2">Telegram</span>
            </Link.IconLink>
            <Link.IconLink
              href={'https://www.tiktok.com/@ekokedao?lang=en'}
              target="_blank"
              className="text-white"
            >
              <TikTok fill="#ffffff" />
              <span className="ml-2">TikTok</span>
            </Link.IconLink>
            <Link.IconLink
              href={'https://x.com/ekoketoken'}
              target="_blank"
              className="text-white"
            >
              <X />
              <span className="ml-2">X.com</span>
            </Link.IconLink>
          </Container.FlexCols>
          <Container.FlexCols className="gap-4 flex-1">
            <Heading.H2 className="text-white">Disclaimer</Heading.H2>
            <Paragraph.Default className="text-white">
              Cryptocurrency may be unregulated in your jurisdiction. The value
              of cryptocurrencies may go down as well as up. Profits may be
              subject to capital gains or other taxes applicable in your
              jurisdiction. It is your responsibility to ensure that you comply
              with tax and other legal obligations in your jurisdiction.
            </Paragraph.Default>
          </Container.FlexCols>
        </Container.FlexResponsiveRow>
        <p className="text-xs text-center text-white my-4">
          Copyright © {year} by EKOKE DAO | Powered and secured by ICP and
          Ethereum Blockchain
        </p>
      </Container.Container>
    </footer>
  );
};

export default Footer;
