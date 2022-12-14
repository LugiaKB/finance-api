import { celebrate, Joi, Segments } from "celebrate";
import validator from "cpf-cnpj-validator";

const joi = Joi.extend(validator);

export const PeopleValidation = celebrate({
    [Segments.BODY]: joi.object().keys({
        name: joi.string().required(),
        document: joi.alternatives().try(joi.document().cpf(), joi.document().cnpj()).required(),
        password: joi.string().required(),
    }),
});
