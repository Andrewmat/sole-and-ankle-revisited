/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import * as ReachDialog from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { WEIGHTS } from '../../constants';
import { COLORS } from '../GlobalStyles/GlobalStyles';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <DialogOverlay isOpen={isOpen} onDismiss={onDismiss}>
      <DialogContent>
        <FlexWrapper>
          <CloseButton onClick={onDismiss}>
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
            <Icon id="close" />
          </CloseButton>
          <Nav>
            <a href="/sale">Sale</a>
            <a href="/new">New&nbsp;Releases</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
            <a href="/collections">Collections</a>
          </Nav>
          <Footer>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </Footer>
        </FlexWrapper>
      </DialogContent>
    </DialogOverlay>
  );
};

const DialogOverlay = styled(ReachDialog.DialogOverlay)`
  position: absolute;
  inset: 0px;
  z-index: 1000;
  background: ${COLORS.gray['700/80']};
`;

const DialogContent = styled(ReachDialog.DialogContent)`
  position: absolute;
  width: 300px;
  height: 100%;
  right: 0;

  background: ${COLORS.white};
  padding: 26px 16px 32px 32px;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  // spacing for landscape mode
  // prettier-ignore
  gap: clamp(
    0.4rem,
    4vh - 0.5rem,
    1rem
  );

  a {
    text-transform: uppercase;
    color: ${COLORS.gray[900]};
    text-decoration: none;
    font-weight: ${WEIGHTS.medium};
  }

  a:hover,
  a:active {
    color: ${COLORS.secondary};
    // underline is used for a11y reasons (color contrast is not good)
    text-decoration: underline;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  font-size: ${14 / 16}rem;
  // spacing for landscape mode
  // prettier-ignore
  gap: clamp(
    0.2rem,
    4vh - 0.6rem,
    1rem
  );

  a {
    color: ${COLORS.gray[700]};
    text-decoration: none;
  }

  a:hover,
  a:active {
    color: ${COLORS.secondary};
    text-decoration: underline;
  }
`;

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
`;

export default MobileMenu;
