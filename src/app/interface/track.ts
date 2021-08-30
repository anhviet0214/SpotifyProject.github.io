import {Artist} from './artist'

export class Track {
  static parse(x: any): Track {
    return {
        ...x,
        artists:Artist.parse(x.artist)
        
    } 
    }
  album!: any;
  artists!: Artist;
  disc_number!: Number;
  duration_ms!: Number;
  explicit!: boolean;
  external_ids!: {};
  external_urls!: {};
  href!: String;
  id!: String;
  is_local!: boolean;
  is_playable!: boolean;
  name!: String;
  popularity!: Number;
  preview_url!: String | null;
  track_number!: Number;
  type!: String;
  uri!: String;
}
