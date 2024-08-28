"use strict";

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  async find(ctx) {
    const results = await strapi
      .service("api::product.product")
      .customFindMethod(ctx.query);

    const pagination = {};
    return this.transformResponse(results, { pagination });
  },

  async customAction(ctx) {
    const params = ctx.request.query;
    console.log("Received query parameters:", params);
    const response = await strapi
      .service("api::product.product")
      .customServiceMethod(params);
    ctx.send(response);
  },
}));
