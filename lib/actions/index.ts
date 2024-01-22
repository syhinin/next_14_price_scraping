"use server";

import { scrapeAmazonProduct } from "../scraper";

export async function scrapeAndStoreProduct(productUrl: string) {
  if (!productUrl) return;

  try {
    debugger;
    const scrapedProduct = await scrapeAmazonProduct(productUrl);

    if (!scrapedProduct) return;

    return scrapedProduct;
  } catch (error: any) {
    throw new Error(`Failed to create/update product: ${error?.message}`);
  }
}
