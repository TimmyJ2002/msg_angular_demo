import {User} from "../../user/models/user";

export class Donation {
    constructor( public id: number,
                 public amount: string,
                 public currency: string,
                 public createdBy: User) {
    }
}
