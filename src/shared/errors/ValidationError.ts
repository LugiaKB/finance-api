import BaseError from "./BaseError";

class ValidationError extends BaseError {
    constructor(title: string, description: string) {
        if (description == "CPF inválido" || description == "CNPJ inválido")
            description = "Invalid document";
        super(400, "ValidationError", title, description);
    }
}

export default ValidationError;
