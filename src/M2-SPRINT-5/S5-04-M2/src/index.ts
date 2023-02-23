import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import AppError from './errors/appError'
import { routes } from './routes'

export const prisma = new PrismaClient()

export const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof AppError) {
    return response.status(err.statusCode).send({message: err.message})
  }

  console.log(err)

  return response.status(500).json({message: 'Internal server Error'})
})