
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('name');
    table.integer('gold');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
