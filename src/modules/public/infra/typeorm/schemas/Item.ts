import { ObjectID, Entity, Column, CreateDateColumn, UpdateDateColumn, ObjectIdColumn } from 'typeorm';

@Entity('items')
class Item {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  title: string;

  @Column()
  value: number;

  @Column()
  image_url: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
};

export default Item;
