export interface IPostgresOptions {
  user: string,
  host: string,
  database: string,
  password: string,
  port: number,
  max: number,
  acquire: number,
  idle: number,
}
