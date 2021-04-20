'use strict'

class StoreDev {
  get rules () {

    const rules = {
      name: 'required|min:3',
      subject: 'required',
      avatar: 'required|url'
    }

    const data = this.ctx.request.all()

    if(data.github) {
      rules.github = 'url'
    }

    if(data.youtube) {
      rules.youtube = 'url'
    }

    if(data.linkedin) {
      rules.linkedin = 'url'
    }

    if(data.twitter) {
      rules.twitter = 'url'
    }

    if(data.instagram) {
      rules.instagram = 'url'
    }

    if(data.site_blog) {
      rules.site_blog = 'url'
    }

    return rules
  }
}

module.exports = StoreDev
