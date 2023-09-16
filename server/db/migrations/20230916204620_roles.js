exports.up = async function (knex) {
  await knex.schema.createTable('roles', function (table) {
    table.increments()
    table.string('name').notNullable() // https://knexjs.org/guide/schema-builder.html#notnullable
    table.timestamps(true, true) // https://knexjs.org/guide/schema-builder.html#timestamps
  })

  await knex('roles').insert([{ name: 'admin' }, { name: 'user' }])
}

exports.down = async function (knex) {
  await knex.schema.dropTable('roles')
}
