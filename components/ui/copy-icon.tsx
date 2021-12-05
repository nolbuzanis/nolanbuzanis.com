import { useState } from 'react';
import styled from 'styled-components';
import copyToClipboard from '../../utils/copyToClipboard';

const Button = styled.button`
  position: relative;
  border-radius: 5px;
  width: 35px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease 0s;
  margin-left: 30px;
  @media only screen and (max-width: 540px) {
    transform: scale(0.708);
    margin-left: 10px;
  }
`;

const Svg = styled.svg`
  transition: opacity 0.25s ease;
  opacity: 0.5;
  display: inline-block;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }

  > path {
    fill: var(--color-text);
  }
`;

const CopyTooltip = styled('div')<{ active: boolean }>`
  position: absolute;
  padding: 4px 13px;
  background: rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.text};
  border-radius: 5px;
  font-size: 14px;
  top: -35px;

  opacity: ${(props) => (props.active ? '1' : '0')};
  transform: none;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  &:after {
    content: '';
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: -6px;
    margin: 0px auto;
    width: 0px;
    height: 0px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, border 0.3s ease-in-out;
    border-top: 6px solid ${(props) => props.theme.tooltip};
  }
`;

interface CopyIconProps {
  link: string;
}

const CopyLink = ({ link }: CopyIconProps): JSX.Element => {
  const [showTooltip, setShowTooltip] = useState(false);
  const handleCopy = async () => {
    await copyToClipboard(link);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 1000);
  };

  return (
    <Button onClick={handleCopy} aria-label='Copy url'>
      <CopyTooltip active={showTooltip}>Copied</CopyTooltip>
      <Svg
        width={20}
        height={20}
        viewBox='0 0 24 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M2 5C2 3.34328 3.34328 2 5 2H14C15.6567 2 17 3.34328 17 5V9C17 10.6567 15.6567 12 14 12H10C9.44771 12 9 12.4477 9 13C9 13.5523 9.44771 14 10 14H14C16.7613 14 19 11.7613 19 9V5C19 2.23872 16.7613 0 14 0H5C2.23872 0 0 2.23872 0 5V9C0 10.4938 0.656313 11.8361 1.6935 12.7509C2.10768 13.1163 2.73961 13.0767 3.10494 12.6625C3.47028 12.2483 3.43068 11.6164 3.0165 11.2511C2.39169 10.6999 2 9.89621 2 9V5ZM7 11C7 9.34328 8.34328 8 10 8H14C14.5523 8 15 7.55228 15 7C15 6.44772 14.5523 6 14 6H10C7.23872 6 5 8.23872 5 11V15C5 17.7613 7.23872 20 10 20H19C21.7613 20 24 17.7613 24 15V11C24 9.50621 23.3437 8.16393 22.3065 7.24906C21.8923 6.88372 21.2604 6.92332 20.8951 7.3375C20.5297 7.75168 20.5693 8.38361 20.9835 8.74894C21.6083 9.30007 22 10.1038 22 11V15C22 16.6567 20.6567 18 19 18H10C8.34328 18 7 16.6567 7 15V11Z'
        />
      </Svg>
    </Button>
  );
};

export default CopyLink;
