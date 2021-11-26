import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface iPayload {
  sub: string
}
export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({
      errorCode: 'token.invalid',

    })
  }

  const token = authToken.split(' ')[1]
  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as iPayload
    req.user_id = sub;

    return next()
  } catch (err) {
    res.status(401).json({ errorCode: 'token.expired' })
  }

}