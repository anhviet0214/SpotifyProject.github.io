import { External_urls } from "./external_urls";
export class Owner {
    static parse(owner: any): Owner {
        throw new Error("Method not implemented.");
    }
    externalUrls!:External_urls; ;
    href!: string;
    id!:string;
    type!:string;
    uri!:string;
}
