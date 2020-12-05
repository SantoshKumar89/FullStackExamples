import { ProfileComponent } from '../components/profile/profile.component';

export class User {
  
  public email: string;
  public name: string;
  public userName: string;
  public password: string;
  public _id?: string;
  public profile: {
     description: string;    
     phone: number;
  };


  constructor(

  ) { }


}