import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Token {
  @PrimaryGeneratedColumn({
    type: 'uuid',
  })
  id: string;

  @Column()
  hash: string;

  @Column()
  apiKey: string;
}
