import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;
}