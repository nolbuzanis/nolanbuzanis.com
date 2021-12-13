import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';
import { useState } from 'react';
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
  height: 10px;
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
  background: var(--color-background);
  border-radius: 15px;
  margin: 15px;
`;
const SuccessMessage = styled.div`
  padding: 15px;
  background: rgba(16, 185, 129, 0.1);
  color: rgb(4, 120, 87);
  margin-top: 15px;
`;

const Popup = (): JSX.Element => {
  const [success, setSuccess] = useState(false);

  const addSubscriber = async (formValues, { setSubmitting, setFieldError }) => {
    setSubmitting(true);
    const url = '/api/newsletter';

    try {
      await axios.post(url, formValues);
      setSuccess(true);
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
            <Spacing />
            <Input
              id='firstName'
              label='First Name'
              value={values.firstName}
              onChange={handleChange}
              autoComplete='on'
              errorText={errors.firstName as string}
            />
            <Input
              id='email'
              type='email'
              label='Email'
              value={values.email}
              onChange={handleChange}
              autoComplete='on'
              errorText={errors.email as string}
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
            {success && (
              <SuccessMessage>
                {`A confirmation email was sent to ${values.email} - go click the link!`}
              </SuccessMessage>
            )}
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default Popup;
