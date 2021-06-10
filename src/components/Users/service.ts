import { IUserModel } from '@models/interfaces/user.interface';
import { UserModel } from '@models/user';
import bcrypt from 'bcrypt';
import { env } from '@env.config/env.config';
import { userRepository } from '@components/Users/repository';

class UserService {
  public async createUser(body: IUserModel): Promise<IUserModel | null> {
    try {
      const foundUser = await userRepository.findUser(body.login);

      if (foundUser) return null;

      return await UserModel.create({
        login: body.login,
        name: body.name,
        password: await bcrypt.hash(body.password, env.BCRYPT_SALT_ROUNDS),
      });
    } catch (error) {
      throw error;
    }
  }
}

export const userService = new UserService();
