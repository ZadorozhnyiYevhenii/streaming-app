export interface IUser {
  username: string;
  password: string;
  isLive: boolean;
  serverUrl: string | undefined;
  streamKey: string | undefined;
  ingressId: string | undefined;
  thumbnaiURL: string;
  id: string;
  jwt: string
}
