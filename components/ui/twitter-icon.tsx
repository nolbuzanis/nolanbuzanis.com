interface TwitterIconProps {
  scale?: number;
  color?: string;
}

const TwitterIcon = ({ scale, color }: TwitterIconProps): JSX.Element => (
  <svg
    width={scale * 16}
    height={scale * 13}
    viewBox='0 0 16 13'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M14.0658 2.34438C14.7013 1.96349 15.1892 1.3604 15.419 0.641811C14.8244 0.994439 14.1658 1.25056 13.4648 1.3886C12.9034 0.7905 12.1036 0.416748 11.2185 0.416748C9.51888 0.416748 8.14096 1.79461 8.14096 3.49411C8.14096 3.7353 8.16822 3.97019 8.22068 4.19542C5.66301 4.06708 3.39543 2.84191 1.8776 0.980064C1.6127 1.43458 1.46094 1.96322 1.46094 2.52719C1.46094 3.59485 2.00428 4.5368 2.83003 5.08865C2.32553 5.07268 1.85104 4.93425 1.43608 4.70376C1.43586 4.71659 1.43586 4.72949 1.43586 4.74244C1.43586 6.23349 2.49666 7.47732 3.90448 7.75999C3.64622 7.83033 3.37436 7.86792 3.09366 7.86792C2.89537 7.86792 2.70257 7.84866 2.51471 7.81272C2.90629 9.03537 4.0428 9.92509 5.38945 9.94994C4.33623 10.7753 3.00928 11.2673 1.56749 11.2673C1.31911 11.2673 1.07413 11.2528 0.833374 11.2243C2.19527 12.0975 3.81291 12.6069 5.55081 12.6069C11.2113 12.6069 14.3067 7.91763 14.3067 3.85096C14.3067 3.71753 14.3037 3.5848 14.2978 3.45285C14.899 3.01896 15.4208 2.47694 15.8334 1.8598C15.2815 2.10456 14.6884 2.26998 14.0658 2.34438Z'
      fill={color}
    />
  </svg>
);

TwitterIcon.defaultProps = {
  scale: 1,
  color: '#73737D',
};

export default TwitterIcon;
