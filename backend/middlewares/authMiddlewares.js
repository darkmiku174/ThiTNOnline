import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import People from '../models/peopleSchema.js'

const protect = asyncHandler(async (req, res, next) => {
  let token
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1]
      console.log(req.headers.authorization)
      console.log(token)
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      console.log(decoded)
      req.user = await People.findById(decoded.id)
      next()
    } catch (error) {
      res.status(401)
      throw new Error("Not authorized, token failed")
    }
  }
  if (!token) {
    res.status(401)
    throw new Error("Not authorized, no token")
  }
})

export default protect
