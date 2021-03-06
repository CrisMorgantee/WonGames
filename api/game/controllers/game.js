"use strict";

const { default: createStrapi } = require("strapi");
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  populate: async (ctx) => {
    console.log("Starting populate...");

    const options = {
      sort: 'popularity',
      page: '1',
      ...ctx.query
    }

    await strapi.services.game.populate(options);

    ctx.send("Finishing populating!");
  },
};
