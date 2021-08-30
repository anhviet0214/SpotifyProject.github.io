import { Track } from './track';
import { Owner } from "./owner";

export class Playlist {
    static parse(x: any): Playlist {
        return {
            ...x,
            externalUrls:x.exteral_urls,
            owner: Owner.parse(x.owner),
            track: Track.parse(x.tracks),
        }
      throw new Error('Method not implemented.');
    }
    collaborative!:boolean;
    id!:string;
    name!:string;
    public!:boolean;
    uri!:string;
    href!:string;
    followers!:string;
    externalUrls!:string;
    declarations!:string;
    images!:[];
    owner!: Owner;
    snapshotID!:string;
    tracks!:Track ;
    type!:string;

}
