import { celebrate, Joi, Segments } from "celebrate";

export const AccountValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        branch: Joi.string().length(3).required(),
        account: Joi.string().length(9).required(),
    }),
});
