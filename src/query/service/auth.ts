import type { LoginReqDto, LoginResDto, TokenDto } from '@/types/auth';
import request from '../base/axios';

const Auth = {
  signIn: (payload: LoginReqDto): Promise<LoginResDto> =>
    request.post('/login', payload).then((res) => res.data),
  tokenRefresh: (): Promise<TokenDto> => request.get('/token/refresh').then((res) => res.data),
  logOut: () => request.post('/logout'),
};

export default Auth;
