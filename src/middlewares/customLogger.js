"use strict";

/**
 * `customLogger` middleware
 */

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    // Log request method and URL
    console.log(`Request Method: ${ctx.method}`);
    console.log(`Request URL: ${ctx.url}`);

    // Continue to the next middleware or route handler
    await next();
  };
};
