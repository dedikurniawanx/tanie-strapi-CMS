"use strict";

/**
 * produk controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::produk.produk", ({ strapi }) => ({
  async find(ctx) {
    try {
      const data = await strapi.entityService.findMany("api::produk.produk", {
        fields: ["nama", "description"],
        populate: {
          image: {
            fields: ["formats", "url"],
          },
          kategoris: {
            fields: ["nama"],
          },
          harga: true,
        },
      });
      return data;
    } catch (err) {
      ctx.body = err;
    }
  },
}));
