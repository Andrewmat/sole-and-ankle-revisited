import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS, MEDIA_QUERIES } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Flex>
            <TabletDownShow>
              <BreadcrumbsImpl />
            </TabletDownShow>
            <Title>Running</Title>
          </Flex>
          <MobileHide>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </MobileHide>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <BreadcrumbsImpl />
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const BreadcrumbsImpl = () => {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
    </Breadcrumbs>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const TabletDownShow = styled.div`
  display: none;

  @media ${MEDIA_QUERIES.TABLET_DOWN} {
    display: initial;
  }
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media ${MEDIA_QUERIES.TABLET_DOWN} {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};

  @media ${MEDIA_QUERIES.TABLET_DOWN} {
    font-weight: ${WEIGHTS.bold};
  }
`;

const MobileHide = styled.div`
  @media ${MEDIA_QUERIES.PHONE_DOWN} {
    display: none;
  }
`;

export default ShoeIndex;
