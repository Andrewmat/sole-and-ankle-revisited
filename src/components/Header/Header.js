import React from 'react';
import styled from 'styled-components/macro';

import { MEDIA_QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon/Icon';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';
import UnstyledButton from '../UnstyledButton/UnstyledButton';
import { COLORS } from '../GlobalStyles/GlobalStyles';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  const openMobileMenu = () => {
    setShowMobileMenu(true);
  };

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <Icons>
          <IconButton>
            <VisuallyHidden>Cart</VisuallyHidden>
            <Icon id="shopping-bag" />
          </IconButton>
          <IconButton>
            <VisuallyHidden>Search</VisuallyHidden>
            <Icon id="search" />
          </IconButton>
          <IconButton type="button" onClick={openMobileMenu}>
            <VisuallyHidden>Menu</VisuallyHidden>
            <Icon id="menu" />
          </IconButton>
        </Icons>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow: auto hidden;

  @media ${MEDIA_QUERIES.TABLET_DOWN} {
    border-top: 3px solid ${COLORS.gray[900]};
  }
`;

const Nav = styled.nav`
  display: flex;
  margin: 0px 48px;
  // prettier-ignore
  gap: clamp(
    1.4rem,
    4vw - 1rem,
    3rem
  );

  @media ${MEDIA_QUERIES.TABLET_DOWN} {
    display: none;
  }
`;

const Icons = styled.nav`
  display: none;

  @media ${MEDIA_QUERIES.TABLET_DOWN} {
    display: flex;
    gap: 18px;
  }

  @media ${MEDIA_QUERIES.PHONE_DOWN} {
    gap: 4px;
  }
`;

const IconButton = styled(UnstyledButton)`
  padding: 0 6px;
  &:hover {
    color: ${COLORS.primary};
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
