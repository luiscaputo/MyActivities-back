import { Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from "typeorm";

@Entity("users")
class User {
  @PrimaryColumn()
    readonly id: number;
  @Column()
    name: string;
  @Column()
    email: string;
  @Column()
    isBaptized: boolean;
  @Column()
    password: string;
  @CreateDateColumn()
    created_at: Date;
  @UpdateDateColumn()
    updated_at: Date;
  constructor(){
    if(!this.id){
      this.id = Math.random();
    }
  }
}

export { User }