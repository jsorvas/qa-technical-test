import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.describe("Login Tests", () => {
  test("should login successfully with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login("standard_user", "secret_sauce");

    const isLoggedIn = await loginPage.isLoggedIn();
    expect(isLoggedIn).toBeTruthy();
  });
});

test.describe("Edge cases", () => {
  test("should login unsuccessfully without user & password", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login("", "");

    const isLoggedIn = await loginPage.isLoggedIn();
    expect(isLoggedIn).toBeFalsy();

    //Vérifier le message d'erreur
    const errorMessage: string = await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Username is required");
  });

  test("should login unsuccessfully without user", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login("", "secret_sauce");

    const isLoggedIn = await loginPage.isLoggedIn();
    expect(isLoggedIn).toBeFalsy();

    //Vérifier le message d'erreur
    const errorMessage: string = await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Username is required");
  });

  test("should login unsuccessfully without password", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login("standard_user", "");

    const isLoggedIn = await loginPage.isLoggedIn();
    expect(isLoggedIn).toBeFalsy();

    //Vérifier le message d'erreur
    const errorMessage: string = await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Password is required");
  });

  test("should login unsuccessfully with wrong user & password", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login("xstandard_user", "7secret_sauce");

    const isLoggedIn = await loginPage.isLoggedIn();
    expect(isLoggedIn).toBeFalsy();

    //Vérifier le message d'erreur
    const errorMessage: string = await loginPage.getErrorMessage();
    expect(errorMessage).toContain(
      "Username and password do not match any user in this service",
    );
  });

  test("should login unsuccessfully with wrong user", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login("xstandard_user", "secret_sauce");

    const isLoggedIn = await loginPage.isLoggedIn();
    expect(isLoggedIn).toBeFalsy();

    //Vérifier le message d'erreur
    const errorMessage: string = await loginPage.getErrorMessage();
    expect(errorMessage).toContain(
      "Username and password do not match any user in this service",
    );
  });

  test("should login unsuccessfully with wrong password", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login("standard_user", "7secret_sauce");

    const isLoggedIn = await loginPage.isLoggedIn();
    expect(isLoggedIn).toBeFalsy();

    //Vérifier le message d'erreur
    const errorMessage: string = await loginPage.getErrorMessage();
    expect(errorMessage).toContain(
      "Username and password do not match any user in this service",
    );
  });
});
