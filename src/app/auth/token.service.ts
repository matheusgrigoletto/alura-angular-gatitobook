import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private token: string | null;

  constructor() {
    this.token = localStorage.getItem(KEY) ?? '';
  }

  get(): string {
    this.token = localStorage.getItem(KEY) ?? '';
    return this.token;
  }

  set(token: string): void {
    this.token = token;
    localStorage.setItem(KEY, token);
  }

  remove(): void {
    this.token = null;
    localStorage.removeItem(KEY);
  }

  has(): boolean {
    return this.token !== null && this.token !== '';
  }
}
