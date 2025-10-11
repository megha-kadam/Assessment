export interface IlogIn{
    username : string,
    password : string
}

export interface ILoginResponse {
  accessToken: string;
  refreshToken: string;
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}



// export interface Isignup{
//     userName : string,
//     password : string
// }