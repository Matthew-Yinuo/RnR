import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne
} from "typeorm";
import { User } from "./User";
import { Listing } from "./Listing";

@Entity("messages")
export class Message extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("text")
  text: string;

  @Column("uuid")
  userId: string;

  @Column("uuid")
  listingId: string;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Listing)
  listing: Listing;
}
