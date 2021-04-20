'use strict'

const Dev = use("App/Models/Dev")

class DevController {

  async index({ view }) {

    const devs = await Dev.all()

    return view.render('dev.listing', {
      'devs': devs.rows
    })
  }

  create({ view }) {
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

  async edit({ request, view }) {
    const dev = await Dev.find(request.params.id)

    return view.render('dev.edit', { dev })
  }

  async update({ request, response, session }) {

    const dev = await Dev.find(request.params.id)

    dev.merge(request.only([
      'name', 'subject', 'avatar', 'github', 'youtube', 'linkedin', 'twitter', 'instagram', 'site_blog'
    ]))

    console.log(dev)

    await dev.save()

    session.flash({
      success: 'Registro atualizado com sucesso!'
    })

    response.redirect('back')

  }

  async delete({ request, response, session }) {
    const dev = await Dev.find(request.params.id)

    await dev.delete()

    session.flash({
      success: 'Registro removido com sucesso!'
    })

    response.redirect('back')
  }

}

module.exports = DevController
