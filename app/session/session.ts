import { Usuario } from '../entity/usuario';

export class Session {
  private tokenKey = 'jwt';
  private userKey = 'currentUser';

  constructor() {}

  createSession(user: Usuario, jwtToken: string) {
    sessionStorage.setItem(this.tokenKey, jwtToken);
    sessionStorage.setItem(this.userKey, JSON.stringify(user));
  }

  clearSession() {
    sessionStorage.removeItem(this.tokenKey);
    sessionStorage.removeItem(this.userKey);
  }

  getCurrentUser(): Usuario {
    let userJson = sessionStorage.getItem(this.userKey);
    if (userJson != null) {
      return <Usuario>JSON.parse(userJson);
    }
    return null;
  }
}