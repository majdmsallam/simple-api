import { Router, Request, Response, NextFunction } from 'express'
import {currentUser} from '../../../common/'

const router = Router()

router.get('/current-user',currentUser, async (req: Request, res:Response, next:NextFunction)=>{
    
} )

export { router as currentUserRouter } 