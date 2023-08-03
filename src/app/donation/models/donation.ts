import {User} from "../../user/models/user";

export interface Donation {
    id: number;
    amount: string;
    currency: string;
    createdBy: User;
}




