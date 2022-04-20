import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index() {
    return await User.all()
  }

  public async store({ request }: HttpContextContract) {
    const payload = request.all()
    const user = new User()
    return await user.fill(payload).save()
  }

  public async show({ params }) {
    return await User.findOrFail(params.id)
  }

  public async update({ params, request }: HttpContextContract) {
    const payload = request.all()
    const user = await User.findOrFail(params.id)
    return await user.merge(payload).save()
  }

  public async destroy({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    return await user.delete()
}
