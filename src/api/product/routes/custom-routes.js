"use strict";

/**
 * product custom routes
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/products/custom",
      handler: "product.customAction",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
