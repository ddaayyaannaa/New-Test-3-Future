class ShapeValidator {
    static validatePositiveNumber(...values) {
        values.forEach((value, index) => {
            if (typeof value !== 'number' || value <= 0 || !Number.isFinite(value)) {
                throw new Error(`Invalid dimension at position ${index + 1}: ${value}. All dimensions must be positive finite numbers`);
            }
        });
    }

    static validateShape(shape, expectedType) {
        if (!(shape instanceof expectedType)) {
            throw new Error(`Invalid shape type. Expected ${expectedType.name}`);
        }
    }

    static validateOptions(options, allowedOptions) {
        if (!options || typeof options !== 'object') {
            throw new Error('Options must be an object');
        }

        const unknownOptions = Object.keys(options).filter(key => !allowedOptions.includes(key));
        if (unknownOptions.length > 0) {
            throw new Error(`Unknown options: ${unknownOptions.join(', ')}`);
        }
    }

    static round(value, decimals = 2) {
        return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
    }
}

module.exports = ShapeValidator;