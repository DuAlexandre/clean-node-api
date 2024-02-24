import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { type HttpResponse, type httpRequest } from '../protocols/http'

export class SignUpController {
  handle (httpRequest: httpRequest): HttpResponse {
    const requireFields = ['name', 'email']
    for (const field of requireFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }

    return {
      statusCode: 200,
      body: 'Success.'
    }
  }
}
