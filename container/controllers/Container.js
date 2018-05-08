'use strict';

/**
 * Container.js controller
 *
 * @description: A set of functions called "actions" for managing `Container`.
 */

module.exports = {

  /**
   * Retrieve container records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.container.fetchAll(ctx.query);
  },

  /**
   * Retrieve a container record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.container.fetch(ctx.params);
  },

  /**
   * Create a/an container record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.container.add(ctx.request.body);
  },

  /**
   * Update a/an container record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.container.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an container record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.container.remove(ctx.params);
  }
};
