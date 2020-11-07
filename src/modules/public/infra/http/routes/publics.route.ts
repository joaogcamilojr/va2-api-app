import { Router, request, response } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import PublicsController from '../controllers/PublicsController';

const publicsRouter = Router();
const publicsController = new PublicsController();

publicsRouter.post('/items', celebrate({
  [Segments.BODY]: {
    title: Joi.string().required(),
    value: Joi.number().required(),
    image_url: Joi.string().required()
  },
}), publicsController.createItem);

publicsRouter.post('/contacts', celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().required(),
    message: Joi.string().required()
  },
}), publicsController.createContact);

publicsRouter.get('/items', publicsController.findAllItems)

export default publicsRouter;
