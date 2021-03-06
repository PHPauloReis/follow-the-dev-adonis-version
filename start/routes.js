'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', 'DevController.index').as('dev.index')
Route.get('/create', 'DevController.create').as('dev.create')
Route.post('/store', 'DevController.store').as('dev.store').validator('StoreDev')
Route.get('/edit/:id', 'DevController.edit').as('dev.edit')
Route.put('/update/:id', 'DevController.update').as('dev.update').validator('StoreDev')
Route.delete('/delete/:id', 'DevController.delete').as('dev.delete')

Route.get('/about', ({ view }) => {
  return view.render('others.about')
}).as('others.about')

Route.on('/').render('welcome')
