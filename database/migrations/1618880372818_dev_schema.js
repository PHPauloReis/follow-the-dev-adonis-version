'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DevSchema extends Schema {
  up () {
    this.create('devs', (table) => {
      table.increments()
      table.string('name', 100)
      table.string('subject')
      table.string('avatar').nullable()
      table.string('github').nullable()
      table.string('youtube').nullable()
      table.string('linkedin').nullable()
      table.string('twitter').nullable()
      table.string('instagram').nullable()
      table.string('site_blog').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('devs')
  }
}

module.exports = DevSchema
