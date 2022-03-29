/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const BASE_URL = 'https://www.getrevue.co/api';

interface AddSubscriberProps {
  email: string;
  firstName: string;
  doubleOptIn?: boolean;
}

export const addSubscriber = async ({
  email,
  firstName,
  doubleOptIn,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
AddSubscriberProps): Promise<{ error: unknown } | any> => {
  try {
    const { data } = await axios.post(`${BASE_URL}/v2/subscribers`, {
      email,
      first_name: firstName,
      double_opt_in: doubleOptIn,
    });
    return data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return { error: err };
  }
};
