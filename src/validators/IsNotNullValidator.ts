"use strict";

import { PropertyValidator } from "./PropertyValidator";

/**
 * Validates if a value is defined (!== undefined, !== null).
 * 
 * @export
 * @class IsDefinedValidator
 * @implements {PropertyValidator<any>}
 */
export class IsNotNullValidator implements PropertyValidator<any> {

    isValid(input: any): boolean {
        return input;
    }
}