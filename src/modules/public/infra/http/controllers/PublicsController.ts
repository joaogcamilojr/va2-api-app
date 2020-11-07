import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateItemService from '@modules/public/services/CreateItemService';
import CreateContactService from '@modules/public/services/CreateContactService';
import FindAllItemsService from '@modules/public/services/FindAllItemsService';

export default class ItemsController {
  public async createItem(request: Request, response: Response): Promise<Response> {
    try {
      const {
        title,
        value,
        image_url
      } = request.body;
      const createItem = container.resolve(CreateItemService)

      const item = await createItem.execute({
        title,
        value,
        image_url
      });

      return response.json(item);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  public async createContact(request: Request, response: Response): Promise<Response> {
    try {
      const {
        name,
        email,
        message
      } = request.body;
      const createContact = container.resolve(CreateContactService)

      const contact = await createContact.execute({
        name,
        email,
        message
      });

      return response.json(contact);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  public async findAllItems(request: Request, response: Response): Promise<Response> {
    try {
      const findAllItems = container.resolve(FindAllItemsService);

      const items = await findAllItems.execute();

      return response.json(items);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
