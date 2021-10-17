import { NextApiRequest, NextApiResponse } from 'next';
import sgClient from '@sendgrid/client';
import { newsletterSchema } from '../../utils/schema';

const SENDGRID_NEWSLETTER_ID = '237c4ef5-cdbe-4265-928f-34df7b870f43';

sgClient.setApiKey(process.env.SENDGRID_API_KEY);

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { body } = req;

  const { error } = newsletterSchema.validate(body);
  if (error) {
    res.status(400).json(error);
    return;
  }

  const { email, firstName }: { email: string; firstName: string } = body;

  const request = {
    method: 'PUT' as SendgridHttpMethod,
    url: 'v3/marketing/contacts',
    body: {
      list_ids: [SENDGRID_NEWSLETTER_ID],
      contacts: [
        {
          email,
          first_name: firstName,
        },
      ],
    },
  };
  const [response] = await sgClient.request(request);
  if (response.statusCode === 202) {
    res.status(200).json({ message: 'Added subscriber to newsletter.' });
    return;
  }
  res.status(500).json(response.body);
};

export default handler;
