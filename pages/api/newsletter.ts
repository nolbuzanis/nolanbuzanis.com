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

// import sgClient from '@sendgrid/client';
// import { newsletterSchema } from '../../lib/schema';

// const SENDGRID_NEWSLETTER_ID = '237c4ef5-cdbe-4265-928f-34df7b870f43';

// sgClient.setApiKey(process.env.SENDGRID_API_KEY);

// const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
//   const { body } = req;

//   const { error } = newsletterSchema.validate(body);
//   if (error) {
//     res.status(400).json(error);
//     return;
//   }

//   const { email, firstName }: { email: string; firstName: string } = body;

//   const request = {
//     method: 'PUT' as SendgridHttpMethod,
//     url: 'v3/marketing/contacts',
//     body: {
//       list_ids: [SENDGRID_NEWSLETTER_ID],
//       contacts: [
//         {
//           email,
//           first_name: firstName,
//         },
//       ],
//     },
//   };
//   const [response] = await sgClient.request(request);
//   if (response.statusCode === 202) {
//     res.status(200).json({ message: 'Added subscriber to newsletter.' });
//     return;
//   }
//   res.status(500).json(response.body);
// };

export default handler;
