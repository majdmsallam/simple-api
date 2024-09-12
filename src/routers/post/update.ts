import { NextFunction, Request, Response, Router } from 'express'
import Post from '../../models/post'
import { BadRequestError } from '../../../common'

const router = Router()

router.post('/api/post/update/:id', async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { title, content } = req.body;

    if (!id) {
        return next(new BadRequestError('post id is both required!'))
    }

    let updatedPost

    try {
        updatedPost = await Post.findOneAndUpdate({ _id: id }, { $set: { content, title } }, { new: true })
    } catch (err) {
        return next(new BadRequestError('post connot be updated'))
    }
    res.status(200).send(updatedPost)


})

export { router as updatePostRouter } 