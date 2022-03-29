import { NextApiRequest, NextApiResponse } from 'next';
import { addSubscriber } from '../../lib/revue';
import { validEmail } from '../../lib/validators';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { body } = req;
  const { email, firstName } = body;
  if (!validEmail(email)) return res.status(400).json('Invalid parameters!');

  const result = await addSubscriber({ email, firstName, doubleOptIn: true });
  if ('error' in result) return res.status(500).json(result);

  return res.status(201).json('Subscriber added!');
};

export default handler;
