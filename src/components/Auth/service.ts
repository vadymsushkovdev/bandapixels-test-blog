import { IUserModel } from '@models/interfaces/user.interface';
import bcrypt from 'bcrypt';
import { userRepository } from '@components/Users/repository'

class AuthService {
  public async login(body: IUserModel): Promise<IUserModel | null> {
    try {
      const foundUser = await userRepository.findUser(body.login);

      if (!foundUser) return null;

      if (!await this.checkPassword(body.password, foundUser.password)) return null;

      return foundUser;
    } catch (error) {
      throw error;
    }
  }

  private async checkPassword(incomingPassword: string, dbPassword: string) {
    return  await bcrypt.compare(incomingPassword, dbPassword);
  }
}

export const authService = new AuthService();
