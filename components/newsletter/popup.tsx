import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';
import Button from '../button';
import Input from '../input';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email.'),
  firstName: Yup.string().required('Please enter your name.'),
});

const initialValues = {
  email: '',
  firstName: '',
};

const Spacing = styled.div`
  height: 20px;
`;

const RevueLink = styled.a`
  color: var(--color-link);
  margin: 0 3px;
`;

const Disclaimer = styled.p`
  font-size: 12px;
`;

const Line = styled.div`
  margin: 10px 0;
  border-top: 1px solid var(--color-horizontal-rule);
`;

const Container = styled.div`
  max-width: 400px;
  padding: 20px;
`;
const Popup = (): JSX.Element => {
  const addSubscriber = async (formValues, { setSubmitting, resetForm, setFieldError }) => {
    setSubmitting(true);
    const url = 'https://newsletter.nolanbuzanis.com/add_subscriber';

    const data = {
      member_email: formValues.email,
      member_first_name: formValues.firstName,
    };

    try {
      await axios.post(url, data);
      resetForm();
    } catch (error) {
      setFieldError('email', 'Error submitting request, please try again.');
      // eslint-disable-next-line no-console
      console.error(error);
    }

    setSubmitting(false);
  };
  return (
    <Container>
      <h2>Newsletter</h2>
      <Line />
      <p>
        Get an email whenever I publish new articles. Also contains exclusive newsletter-only
        content.
      </p>
      <Formik
        onSubmit={addSubscriber}
        validationSchema={validationSchema}
        initialValues={initialValues}
      >
        {({ handleSubmit, values, isSubmitting, handleChange, errors }) => (
          <form onSubmit={handleSubmit}>
            <Input
              id='email'
              type='email'
              label='Email'
              value={values.email}
              onChange={handleChange}
              autoComplete='on'
              errorText={errors.email as string}
            />
            <Input
              id='firstName'
              label='First Name'
              value={values.firstName}
              onChange={handleChange}
              autoComplete='on'
              errorText={errors.firstName as string}
            />
            <Spacing />
            <Button loading={isSubmitting} type='submit'>
              Subscribe
            </Button>
            <Spacing />
            <Disclaimer>
              By subscribing, you agree with Revue’s
              <RevueLink target='_blank' href='https://www.getrevue.co/terms' rel='noreferrer'>
                Terms of Service
              </RevueLink>
              and
              <RevueLink target='_blank' href='https://www.getrevue.co/privacy' rel='noreferrer'>
                Privacy Policy
              </RevueLink>
              .
            </Disclaimer>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default Popup;
