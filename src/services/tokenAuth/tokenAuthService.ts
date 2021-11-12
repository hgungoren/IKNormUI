import { AuthenticationModel } from './dto/authenticationModel';
import { AuthenticationResultModel } from './dto/authenticationResultModel';
import http from '../httpService';

class TokenAuthService {
  public async authenticate(authenticationInput: AuthenticationModel): Promise<AuthenticationResultModel> {
<<<<<<< HEAD
    let result = await http.post('api/TokenAuth/Authenticate', authenticationInput);
=======
    let result = await http.post('iknormtokenauth/TokenAuth/Authenticate', authenticationInput);
>>>>>>> b37586eb8887a5a57fdb35f4f6b770b94b94f685
    return result.data.result;
  }
}

export default new TokenAuthService();
