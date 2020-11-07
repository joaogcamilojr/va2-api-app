import { getMongoRepository, MongoRepository } from 'typeorm';

import IItemsRepository from '@modules/public/repositories/IItemsRepository';
import ICreateItem from '@modules/public/interfaces/ICreateItem';

import Item from '../schemas/Item';

class ItemsRepository  implements IItemsRepository {
  private ormRepository: MongoRepository<Item>;

  constructor() {
    this.ormRepository = getMongoRepository(Item, 'default');
  }

  public async create(data: ICreateItem): Promise<Item> {
    const item = this.ormRepository.create(data);
    await this.ormRepository.save(item);
    return item;
  };

  public async findAllItems(): Promise<Item[]> {
    const items = this.ormRepository.find();
    return items;
  };
};

export default ItemsRepository;
