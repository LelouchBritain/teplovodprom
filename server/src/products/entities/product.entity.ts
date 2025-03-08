import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  name: string;

  @Column()
  supplyNominal: number;

  @Column()
  supplyMinMax: string;

  @Column()
  pressure: number;

  @Column()
  pressureMinMax: string;

  @Column()
  consumption: number;

  @Column()
  diameter: string;

  @Column()
  price: number;

  @Column({ nullable: true })
  image?: string;
}
