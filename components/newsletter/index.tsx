import styled from 'styled-components';
import { Formik } from 'formik';
import * as yup from 'yup';
import Input from '../input';
import Button from '../button';
import MailIcon from './mail-icon';

const initialValues = {
  firstName: '',
  email: '',
};

const validationSchema = yup.object().shape({
  firstName: yup.string().required('Name is required.'),
  email: yup.string().email('Please enter a valid email.').required('Please enter a valid email.'),
});

const Background = styled.div`
  background-color: var(--color-tag-background);
`;

const Container = styled.section`
  max-width: 700px;
  margin-left: 6vw;
  padding-top: 50px;
  padding-bottom: 50px;
  @media only screen and (max-width: 66.875em) {
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  padding-bottom: 25px;
  font-size: 30px;
  color: var(--color-title);
`;
const Paragraph = styled.p`
  padding-bottom: 20px;
  color: var(--color-article);
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 130px 210px 140px;
  column-gap: 25px;
  align-items: end;
  @media only screen and (max-width: 540px) {
    grid-template-columns: 1fr;
    row-gap: 25px;
  }
`;

const NewsletterSection = (): JSX.Element => {
  const handleFormSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
    }, 300);
  };

  return (
    <Background>
      <Container>
        <Title>Sunday Snippets Newsletter</Title>
        <Paragraph>
          I send my newsletter out on Sundays, with
          <strong> short blurbs </strong>
          on a few key topics: tech/programming, personal finance, health, and the environment.
        </Paragraph>
        <Paragraph>
          Skip topics you don&apos;t want. Read a snippet that peaks your curiosity? Dive in an
          learn more! I also include fun extras like my song of the week.
        </Paragraph>
        <Paragraph>No spam, unsubscribe at any time.</Paragraph>
        <Formik
          initialValues={initialValues}
          onSubmit={handleFormSubmit}
          validationSchema={validationSchema}
        >
          {({ values, errors, handleSubmit, handleChange, isSubmitting, touched }) => (
            <Form autoComplete='off' onSubmit={handleSubmit}>
              <Input
                id='firstName'
                value={values.firstName}
                onChange={handleChange}
                label='First Name'
                errorText={touched.firstName && (errors.firstName as string)}
              />
              <Input
                id='email'
                value={values.email}
                onChange={handleChange}
                label='Email'
                type='email'
                errorText={touched.email && (errors.email as string)}
              />
              <Button loading={isSubmitting} onClick={handleSubmit} type='submit'>
                <MailIcon />
                Join
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </Background>
  );
};

export default NewsletterSection;
