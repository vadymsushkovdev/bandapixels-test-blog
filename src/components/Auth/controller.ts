import { Request, Response } from 'express';
import { userService } from '@components/Users/service';
import { IUserModel } from '@models/interfaces/user.interface';
import { signUpDto } from '@components/Auth/dto/signup.dto';
import { ZodIssue } from 'zod';
import { authService } from '@components/Auth/service';
import { signInDto } from '@components/Auth/dto/signin.dto';
import { store } from '@components/router';


export async function signup(req: Request, res: Response): Promise<void> {
  const userErrors: ZodIssue[] | null = signUpDto(req.body);

  if (userErrors) { res.json({ status: 400, error: userErrors }) }

  const user: IUserModel | null = await userService.createUser(req.body);

  if (user) {
    res.json({ status: 200, message: `${ user.login } signed up successfully` });
  }

  res.json({ status: 400, message: `User already is exists` });
}

export async function signin(req: Request, res: Response): Promise<void> {
  const userErrors: ZodIssue[] | null = signInDto(req.body);

  if (userErrors) { res.json({ status: 400, error: userErrors }) }

  const user: IUserModel | null = await authService.login(req.body);

  if (user) {
    req.session.regenerate((err) => { if (err) {
        res.json({ status: 500, error: err })} }).save();

    res.json({ status: 200, login: user.login, id: user.id, name: user.name});
  }

  res.json({ status: 403, message: 'Incorrect login or password'});
}

export async function logout(req: Request, res: Response): Promise<void> {
  store.destroy(req.session.id, (err) => { if (err) { res.json({ status: 500, error: err.message })} });
  req.session.destroy((err) => { if (err) { res.json({ status: 500, error: err.message })} });

  res.json({ status: 403, message: 'Incorrect login or password'});
}

