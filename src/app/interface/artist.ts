
import { Image } from './image'

export class Artist {
  external_urls!: {};
  followers!: {};
  genres!: String[];
  href!: String;
  id!: String;
  images!: Image[];
  name!: String;
  popularity!: Number;
  type!: String;
  uri!: String;
  static parse: any;
}
