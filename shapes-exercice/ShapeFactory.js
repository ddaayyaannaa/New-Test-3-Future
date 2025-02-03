const Cylinder = require('./shapes/Cylinder');
const Cuboid = require('./shapes/Cuboid');
const TriangularPyramid = require('./shapes/pyramids/TriangularPyramid');
const SquarePyramid = require('./shapes/pyramids/SquarePyramid');
const RectangularPyramid = require('./shapes/pyramids/RectangularPyramid');

class ShapeFactory {
    static createShape(type, dimensions) {
        switch (type.toLowerCase()) {
            case 'cylinder':
                return new Cylinder(dimensions.radius, dimensions.height);
            case 'cuboid':
                return new Cuboid(dimensions.length, dimensions.width, dimensions.height);
            case 'pyramid':
                return this.createPyramid(dimensions);
            default:
                throw new Error(`Unknown shape type: ${type}`);
        }
    }

    static createPyramid(dimensions) {
        if (dimensions.baseType) {
            switch (dimensions.baseType.toLowerCase()) {
                case 'triangular':
                    return new TriangularPyramid(
                        dimensions.baseLength,
                        dimensions.baseHeight,
                        dimensions.pyramidHeight
                    );
                case 'square':
                    return new SquarePyramid(
                        dimensions.baseSide,
                        dimensions.height
                    );
                case 'rectangular':
                    return new RectangularPyramid(
                        dimensions.baseLength,
                        dimensions.baseWidth,
                        dimensions.height
                    );
                default:
                    throw new Error(`Unknown pyramid base type: ${dimensions.baseType}`);
            }
        }
        throw new Error('Pyramid base type must be specified');
    }
}

module.exports = ShapeFactory;