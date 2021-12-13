/* eslint-disable import/prefer-default-export */
import * as Joi from 'joi';

export const newsletterSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
});
