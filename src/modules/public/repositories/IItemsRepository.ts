import ICreateItem from "../interfaces/ICreateItem";
import Item from '../infra/typeorm/schemas/Item';

export default interface IItemsRepository {
  create(data: ICreateItem): Promise<Item>;
  findAllItems(): Promise<Item[]>;
};
