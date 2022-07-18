import registerSchema from '../schemas/registerSchema.js';

export default function registerSchemaValidation(req, res, next) {
    const { error } = registerSchema.validate(req.body, { abortEarly: false });
    if (error) return res.status(400).json({error, status:400});

    next()
}