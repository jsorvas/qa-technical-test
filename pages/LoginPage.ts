import { Page } from "@playwright/test";

export class LoginPage {
  private page: Page;
  private usernameField = '[data-test="username"]';
  private passwordField = '[data-test="password"]';
  private loginButton = '[data-test="login-button"]';

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("/");
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameField, username);
    await this.page.fill(this.passwordField, password);
    await this.page.click(this.loginButton);
  }

  async isLoggedIn(): Promise<boolean> {
    return this.page.url().includes("inventory.html");
  }
}
