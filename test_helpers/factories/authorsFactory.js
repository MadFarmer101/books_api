'use strict';

module.exports = (factory, Models) => {
  factory.define('Author', Models.Author, {
    firstName: 'Janko',
    lastName: 'M. Farmer',
    createdAt: new Date(),
    updatedAt: new Date(),
  });
};