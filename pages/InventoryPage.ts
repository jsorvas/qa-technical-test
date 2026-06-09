import { Page } from "@playwright/test";

export class InventoryPage {
  private page: Page;
  private addToCartButton = '[data-test="add-to-cart-sauce-labs-backpack"]';
  private cartBadge = '[data-test="shopping-cart-badge"]';
  private addToCartBikeLight =
    '[data-test="add-to-cart-sauce-labs-bike-light"]';
  private removeBikeLight = '[id="remove-sauce-labs-bike-light"]';
  private removeBackpack = '[data-test="remove-sauce-labs-backpack"]';
  private cartButton = '[data-test="shopping-cart-link"]';

  constructor(page: Page) {
    this.page = page;
  }

  async addItemToCart() {
    await this.page.click(this.addToCartButton);
  }

  async getCartItemCount(): Promise<number> {
    await this.page.locator(this.cartBadge).waitFor({ state: "visible" });
    const countText = await this.page.locator(this.cartBadge).textContent();
    return parseInt(countText || "0", 10);
  }

  async addBikeLightToCart() {
    await this.page.click(this.addToCartBikeLight);
  }

  async removeBikeLightToCart() {
    await this.page.click(this.removeBikeLight);
  }

  async removeBackpackToCart() {
    await this.page.click(this.removeBackpack);
  }

  async clickCartButton() {
    await this.page.click(this.cartButton);
  }

  async cartBadgeNotVisible() {
    await this.page.locator(this.cartBadge).waitFor({ state: "hidden" });
  }
}
