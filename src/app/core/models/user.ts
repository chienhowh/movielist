export class User {
  uid: string;
  username: string;
  email: string;
  constructor(user: any) {
    this.uid = user.uid;
    this.username = user.displayName;
    this.email = user.email;
  }
}
