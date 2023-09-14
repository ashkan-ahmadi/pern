exports.up = async function (knex) {
  await knex.schema.createTable('todos', function (table) {
    table.increments()
    table.string('description').notNullable() // https://knexjs.org/guide/schema-builder.html#notnullable
    table.timestamps(true, true) // https://knexjs.org/guide/schema-builder.html#timestamps
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTable('todos')
}
