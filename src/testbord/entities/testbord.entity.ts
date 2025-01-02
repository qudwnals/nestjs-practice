import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";


@Entity('UserDate')
export class TestbordEntity {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column()
    author : string;

    @CreateDateColumn()      //게시글 생성일
    createAt : Date;

    @UpdateDateColumn()     //게시글 수정 일
    updateAt : Date;


}
