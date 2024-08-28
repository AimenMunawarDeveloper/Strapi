"use strict";

module.exports = {
  async customServiceMethod(params) {
    console.log("Received parameters in service method:", params);
    return { message: "Custom service method executed", params };
  },

  async customFindMethod(params) {
    const results = await strapi.query("api::product.product").findMany(params);
    results.forEach((result) => {
      result.tailor = "Aimen"; // adding custom field to each result
    });
    return results;
  },
};
