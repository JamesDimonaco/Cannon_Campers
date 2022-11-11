'use strict';

/**
 * conversation-package service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::conversation-package.conversation-package');
