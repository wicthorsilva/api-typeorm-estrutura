import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', {length: 100, nullable: false })
    name: string;

    @Column('varchar', {length: 255, nullable: false })
    email: string;
}

export default User;