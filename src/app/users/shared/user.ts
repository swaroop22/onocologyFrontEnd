import {Address} from './address';

export class User {
  id: number;
  firstname: string;
  lastname: string;
  address: Address = new Address();
}
