import { celebrate, Joi, Segments } from "celebrate";

export const PeopleValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string(),
        document: Joi.string().min(11).max(14),
        password: Joi.string(),
    }),
});
