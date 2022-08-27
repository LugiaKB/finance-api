import { celebrate, Joi, Segments } from "celebrate";

export const CardValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        type: Joi.string().valid("virtual", "physical"),
        number: Joi.string().creditCard(),
        cvv: Joi.string().length(3),
    }),
});
