import styled from 'styled-components';

const Line = styled.div`
  position: relative;
  margin: 140px auto 50px;
  border-bottom: 1px solid ${(props) => props.theme.horizontalRule};
`;

const FooterContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 80px;
  font-size: 16px;
  color: ${(props) => props.theme.textColor};
`;

const Footer = (): JSX.Element => {
  const copyrightDate = new Date().getFullYear();

  return (
    <section>
      <Line />
      <FooterContent>
        <span>
          &copy;
          {` ${copyrightDate} Millennium`}
        </span>
      </FooterContent>
    </section>
  );
};

export default Footer;
