import { celebrate, Joi, Segments } from "celebrate";

export const TransactCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        value: Joi.number().precision(2).required(),
        description: Joi.string().required(),
    }),
});

export const TransactRevertValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        description: Joi.string(),
    }),
});
