
exports.up = function(knex) {
  return knex.schema.createTable('lambda', tbl => {
    tbl.increments()
    tbl.string('description').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('lambda')
};
