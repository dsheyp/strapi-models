'use strict';

/**
 * Content.js controller
 *
 * @description: A set of functions called "actions" for managing `Content`.
 */

module.exports = {

  /**
   * Retrieve content records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.content.fetchAll(ctx.query);
  },

  /**
   * Retrieve a content record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.content.fetch(ctx.params);
  },

  /**
   * Create a/an content record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.content.add(ctx.request.body);
  },

  /**
   * Update a/an content record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.content.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an content record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.content.remove(ctx.params);
  }
};
