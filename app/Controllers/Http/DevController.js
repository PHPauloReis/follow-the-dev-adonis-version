'use strict'

const Dev = use("App/Models/Dev")

class DevController {

  async index({ view, session }) {

    const devs = await Dev.all()

    return view.render('dev.listing', {
      'devs': devs.rows
    })
  }

  create({ view, session }) {
    return view.render('dev.create')
  }

  async store({ request, response, session }) {

    await Dev.create(request.only([
      'name', 'subject', 'avatar', 'github', 'youtube', 'linkedin', 'twitter', 'instagram', 'site_blog'
    ]))

    session.flash({
      success: 'Registro gravado com sucesso!'
    })

    response.redirect('back')

  }

}

module.exports = DevController
