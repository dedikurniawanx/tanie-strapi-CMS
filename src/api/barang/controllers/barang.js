"use strict";

/**
 * A set of functions called "actions" for `barang`
 */

module.exports = {
  findAll: async (ctx, next) => {
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
};
