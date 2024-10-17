const Joi = require('joi');

const habitValidation = {
  body: Joi.object().keys({
    title: Joi.string().required().trim(),
    description: Joi.string().optional().trim(),
    frequency: Joi.string().valid('daily', 'weekly', 'monthly').required(),
    streak: Joi.number().integer().min(0).optional(), // Optional but must be a positive integer
    dailyProgress: Joi.boolean().optional(),          // Optional boolean field
  }),
};

module.exports = { habitValidation };
