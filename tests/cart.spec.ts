import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

test.describe("Cart Tests", () => {
  test("should be able to add an item to the cart", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    // Log in first
    await loginPage.navigate();
    await loginPage.login("standard_user", "secret_sauce");

    // Add an item to the cart
    await inventoryPage.addItemToCart();

    // Verify the item count in the cart
    const itemCount = await inventoryPage.getCartItemCount();
    expect(itemCount).toBe(1);
  });

  test("should be able to add an item to the cart and remove this item", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    const user: string = "standard_user";
    const password: string = "secret_sauce";

    // Log in first
    await loginPage.navigate();
    await loginPage.login(user, password);

    // Add an item to the cart
    await inventoryPage.addItemToCart();

    // Verify the item count in the cart
    const itemCount = await inventoryPage.getCartItemCount();
    expect(itemCount).toBe(1);

    // Add a bike light to the cart
    await inventoryPage.addBikeLightToCart();

    // Verify the 2nd item count in the cart
    const itemCount2 = await inventoryPage.getCartItemCount();
    expect(itemCount2).toBe(2);

    // Remove bike light to the cart
    await inventoryPage.removeBikeLightToCart();

    // Verify only 1 item count in the cart
    const itemCount3 = await inventoryPage.getCartItemCount();
    expect(itemCount3).toBe(1);
  });

  test("add and remove an item to the cart", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    const user: string = "standard_user";
    const password: string = "secret_sauce";

    // Log in first
    await loginPage.navigate();
    await loginPage.login(user, password);

    // Add an item to the cart
    await inventoryPage.addItemToCart();

    // Verify the item count in the cart
    const itemCount = await inventoryPage.getCartItemCount();
    expect(itemCount).toBe(1);

    // Add a bike light to the cart
    await inventoryPage.addBikeLightToCart();

    // Verify the 2nd item count in the cart
    const itemCount2 = await inventoryPage.getCartItemCount();
    expect(itemCount2).toBe(2);

    // Click on the cart button
    await inventoryPage.clickCartButton();

    // Remove 2 items
    await inventoryPage.removeBackpackToCart();
    const itemCount3 = await inventoryPage.getCartItemCount();
    expect(itemCount3).toBe(1);

    await inventoryPage.removeBikeLightToCart();

    // Vérifier que le badge a disparu
    await inventoryPage.cartBadgeNotVisible();
  });
});
