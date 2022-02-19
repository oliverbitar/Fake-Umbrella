import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('text')
  contact: string;

  @Column('text')
  location: string;

  @Column('text')
  phoneNb: string;

  @Column('int')
  employees: number;
}