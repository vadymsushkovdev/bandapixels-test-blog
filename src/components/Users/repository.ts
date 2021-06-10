import { UserModel } from '@models/user';

class UserRepository {
  public async findUser(login: string) {
    return await UserModel.findOne({
      where: { login: login },
    });
  }
}

export const userRepository = new UserRepository();
