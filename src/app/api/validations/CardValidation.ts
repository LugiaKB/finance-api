import { celebrate, Joi, Segments } from "celebrate";

export const CardValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        type: Joi.string().valid("virtual", "physical").required(),
        number: Joi.string().creditCard().required(),
        cvv: Joi.string().length(3).required(),
    }),
});
