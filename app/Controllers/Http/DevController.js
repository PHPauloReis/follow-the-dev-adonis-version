'use strict'

const Dev = use("App/Models/Dev")

class DevController {

  async index({ request, response, view }) {

    const devs = await Dev.all()

    return view.render('dev.listing', {
      'devs': devs.rows
    })
  }

  create({ request, response, view }) {
    return view.render('dev.create')
  }

}

module.exports = DevController
