import { z } from 'zod';
import { dtoMessage } from '@components/Auth/dto/constants.dto.message';
import { IUserModel } from '@models/interfaces/user.interface';

export function signUpDto (user: IUserModel) {
  const signUpSchema = z.object({
    login: z
      .string()
      .min(5, {message: dtoMessage.signUpDto.login.length.min})
      .max(20, {message: dtoMessage.signUpDto.login.length.max}),
    name: z
      .string()
      .min(2, {message: dtoMessage.signUpDto.login.length.min})
      .max(20, {message: dtoMessage.signUpDto.login.length.max}),
    password: z
      .string()
      .min(5, {message: dtoMessage.signUpDto.password.length.min})
      .max(20, {message: dtoMessage.signUpDto.password.length.max}),
  });
  const result = signUpSchema.safeParse(user);

  if (!result.success) { return result.error.issues };

  return null;
}
