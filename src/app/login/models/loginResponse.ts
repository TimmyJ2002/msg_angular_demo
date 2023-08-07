export class LoginResponse{
  constructor(
    public accessToken: string,
    public id: number,
    public username: string,
    public email: string,
    public roles: string
  ) {
  }
}
