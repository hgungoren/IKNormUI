import { AuthenticationModel } from './dto/authenticationModel';
import { AuthenticationResultModel } from './dto/authenticationResultModel';
import http from '../httpService';

class TokenAuthService {
  public async authenticate(authenticationInput: AuthenticationModel): Promise<AuthenticationResultModel> {
    let result = await http.post('iknormtokenauth/TokenAuth', authenticationInput);
    return result.data.result;
  }
}

export default new TokenAuthService();
