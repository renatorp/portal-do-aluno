import { Usuario } from '../entity/usuario';

export class Session {
  private tokenKey = 'jwt';
  private userKey = 'currentUser';

  constructor() {}

  createSession(user: Usuario, jwtToken: string) {
    localStorage.setItem(this.tokenKey, jwtToken);
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  clearSession() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
  }

  getCurrentUser(): Usuario {
    let userJson = localStorage.getItem(this.userKey);
    if (userJson != null) {
      return <Usuario>JSON.parse(userJson);
    }
    return null;
  }
}