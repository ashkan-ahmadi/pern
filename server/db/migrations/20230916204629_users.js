const env = require('../../env.json')

exports.up = async function (knex) {
  await knex.schema.createTable('users', function (table) {
    table.increments()
    table.string('first_name').notNullable() // https://knexjs.org/guide/schema-builder.html#notnullable
    table.string('last_name').notNullable() // https://knexjs.org/guide/schema-builder.html#notnullable
    table.string('email').notNullable().unique() // https://knexjs.org/guide/schema-builder.html#notnullable
    table.string('password').notNullable() // https://knexjs.org/guide/schema-builder.html#notnullable
    table.integer('roleId')
    table.foreign('roleId').references('roles.id')
    table.timestamps(true, true) // https://knexjs.org/guide/schema-builder.html#timestamps
  })

  if (process?.env?.NODE_ENV === 'development' || env?.mode === 'development') {
    await knex('users').insert([
      {
        first_name: 'Ilysa',
        last_name: 'Demange',
        email: 'idemange0@upenn.edu',
        password: '$2a$04$.liDAFR.p/h4Iqay3j9Tru4tJR14pFhSUuNWQNFfG8cNqmq6Twn0e',
        roleId: 2,
      },
      {
        first_name: 'Archibald',
        last_name: 'Burne',
        email: 'aburne1@tuttocitta.it',
        password: '$2a$04$HtvFd05J5LqWihlfJPQ8SOzaPf6NWYoZjAv68.Vgw9S3flGucTJgq',
        roleId: 2,
      },
      {
        first_name: 'Kally',
        last_name: 'Wynn',
        email: 'kwynn2@nsw.gov.au',
        password: '$2a$04$Kebhv5LhKWQZmZEztAkk6O0rL4Ir6qtnGmkjDWproYKcWxAfuSgdu',
        roleId: 1,
      },
      {
        first_name: 'Elise',
        last_name: 'Tumilty',
        email: 'etumilty3@google.com.au',
        password: '$2a$04$JGBGOcL.lT/r5KsPriIZ9.ZDICcEucDyOTAdJmaN6Epx../JoNEqe',
        roleId: 1,
      },
      {
        first_name: 'Hashim',
        last_name: 'Broske',
        email: 'hbroske4@imdb.com',
        password: '$2a$04$d87lplU9VLsYI8cNViaeAOODCKn3hgRz.8TCEr3GukTleYy7xLJEa',
        roleId: 1,
      },
      {
        first_name: 'Irina',
        last_name: 'Millhouse',
        email: 'imillhouse5@quantcast.com',
        password: '$2a$04$bii9/pPi/xkgCYWn8u2MrO2T3D8lqPLhPOUy8TZjhaPnWE7MfCmvy',
        roleId: 2,
      },
      {
        first_name: 'Kristel',
        last_name: 'Geldard',
        email: 'kgeldard6@clickbank.net',
        password: '$2a$04$WkMt5iPUFBBtUJ/PlFuiz.PotI8JlF8xQ6tkg9/phF5Rm66mA3hwy',
        roleId: 2,
      },
      {
        first_name: 'Modesty',
        last_name: 'Scarffe',
        email: 'mscarffe7@tinyurl.com',
        password: '$2a$04$2dP/He.ug8JmHyiGJtLxq.gJNqeeYRZURdZkXW8wV/RLq3To.SYi2',
        roleId: 1,
      },
      {
        first_name: 'Tory',
        last_name: 'Simeone',
        email: 'tsimeone8@irs.gov',
        password: '$2a$04$uPaMdx/6IgoHMkv7zAIReOEWpFmMHFuj2XSegJLZdxWwNBoHGYznK',
        roleId: 1,
      },
      {
        first_name: 'Bertie',
        last_name: 'Pinock',
        email: 'bpinock9@1688.com',
        password: '$2a$04$sHbtx1LVgBCoLUesyrP27ugf8Gdx57MC.LIFx2d/ShZ6V8BAS9Ox6',
        roleId: 2,
      },
      {
        first_name: 'Westbrook',
        last_name: 'Metzel',
        email: 'wmetzela@rediff.com',
        password: '$2a$04$nB6fZhMbz50CaHIRt4sW.eyrV//rg5zEXa.sPZCG7ve3J5WJkCFMy',
        roleId: 1,
      },
      {
        first_name: 'Cob',
        last_name: 'Monnoyer',
        email: 'cmonnoyerb@umn.edu',
        password: '$2a$04$OWFCT5l1G4kxzFQ5Mv4exeq2jaVOEFOgNglZlWkYnpQZKyGpqFW6q',
        roleId: 2,
      },
      {
        first_name: 'Raphael',
        last_name: 'Hurdedge',
        email: 'rhurdedgec@state.gov',
        password: '$2a$04$jkXNT842J2t7zHs3QozVy.9Wp.D0K.4Al8YzmL4zuHHKrbmJPRyrK',
        roleId: 1,
      },
      {
        first_name: 'Gwenni',
        last_name: 'Newns',
        email: 'gnewnsd@nasa.gov',
        password: '$2a$04$TOB9IGvd7x7EinbFVNP9SOjWMHvf6SV8PudFe1b15rWvqlXTlfFeW',
        roleId: 2,
      },
      {
        first_name: 'Tripp',
        last_name: 'Bacup',
        email: 'tbacupe@xinhuanet.com',
        password: '$2a$04$4txuj.S8aZOF35jrdZxZ.OYJlitxhrn3/9/.KcFppr9dsGlcJnLOu',
        roleId: 1,
      },
      {
        first_name: 'Goraud',
        last_name: 'Blything',
        email: 'gblythingf@flavors.me',
        password: '$2a$04$NGk5ZtN9wKIeYXb9mfwrxuqnnI7pZRNc/3EaKhdhhowYdiwqZCXwu',
        roleId: 2,
      },
      {
        first_name: 'Lavina',
        last_name: 'Polino',
        email: 'lpolinog@usgs.gov',
        password: '$2a$04$3FMztizBD/AOi3DHZzoGF.THxbeH1pUYWYs1SovM9Y1v7cPNkhGim',
        roleId: 1,
      },
      {
        first_name: 'Tessy',
        last_name: 'Glen',
        email: 'tglenh@prweb.com',
        password: '$2a$04$PKOhMUCIFxYRv7bPU.yMgu25apfiNzWrfgFmlcHKI2nbLfmjSq6re',
        roleId: 1,
      },
      {
        first_name: 'Maribeth',
        last_name: 'Raselles',
        email: 'mrasellesi@merriam-webster.com',
        password: '$2a$04$/ISZMrq2Nr3r2Qa8eCkto.8xCuXOSXrGVhfnFsrw3yPP9OYsXJlQO',
        roleId: 2,
      },
      {
        first_name: 'Alfie',
        last_name: 'Rains',
        email: 'arainsj@biglobe.ne.jp',
        password: '$2a$04$XoP8XK.8EZPWZqw/TM8nFOZKmfVy2sII7UJhk4kOSPra.kNOtZ.9O',
        roleId: 2,
      },
    ])
  }
}

exports.down = async function (knex) {
  await knex.schema.dropTable('users')
}
