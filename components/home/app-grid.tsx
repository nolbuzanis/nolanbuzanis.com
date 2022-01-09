/* eslint-disable operator-linebreak */
import styled from 'styled-components';

const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 432px 1fr;
  width: calc(100% - 100px);
  margin: 0 auto;
  height: 842px;
`;

const CARD_INNER_OFFSET = 20;
const CARD_HEIGHT = 269;
const CARD_VERTICAL_OFFSET = 110;

interface BoxProps {
  top?: number;
  right?: number;
  left?: number;
  src: string;
}

const Box = styled.div<BoxProps>`
  position: absolute;
  background-color: white;
  height: ${CARD_HEIGHT}px;
  width: 201px;
  border-radius: 8px;
  ${(props) => props.top !== null && `top: ${props.top}px;`}
  ${(props) => props.right !== null && `right: ${props.right}px;`}
  ${(props) => props.left !== null && `left: ${props.left}px;`}
  ${(props) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    props.src &&
    `
  background: url('${props.src}') center center no-repeat;
  background-size: cover;
  `}
`;

const LargeBox = styled(Box)`
  width: 368px;
  height: 764px;
  border-radius: 30px;
  // margin: 0 30px;
`;
const CenterColumn = styled.div`
  padding: 0 30px;
`;

const HorizontalBox = styled(Box)<{ width?: number }>`
  && {
    width: ${(props) => props.width || 525}px;
  }
`;

const Column = styled.div`
  position: relative;
  top: 110px;
`;

const AppGrid = (): JSX.Element => (
  <Gallery>
    <Column>
      <HorizontalBox right={0} src='/images/apps/portl-tablet.png' />
      <Box
        top={CARD_HEIGHT + CARD_INNER_OFFSET}
        right={0}
        src='/images/apps/impressions-player.png'
      />
      <Box
        top={CARD_HEIGHT + CARD_INNER_OFFSET + CARD_VERTICAL_OFFSET}
        right={CARD_INNER_OFFSET + 201}
        src='/images/van-in-progress.png'
      />
    </Column>
    <CenterColumn>
      <LargeBox src='/images/apps/donation-december.png' />
    </CenterColumn>
    <Column>
      <Box src='/images/apps/portl-driver-app.png' />
      <Box top={CARD_HEIGHT + CARD_INNER_OFFSET} src='/images/spanish-river.png' />
      <HorizontalBox
        top={CARD_VERTICAL_OFFSET}
        left={CARD_INNER_OFFSET + 201}
        src='/images/toronto-map.png'
        width={482}
      />
      <Box
        top={CARD_VERTICAL_OFFSET + CARD_HEIGHT + CARD_INNER_OFFSET}
        left={CARD_INNER_OFFSET + 201}
        src='/images/apps/genie-dashboard.png'
      />
    </Column>
  </Gallery>
);

export default AppGrid;
