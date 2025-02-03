const ShapeFactory = require('./ShapeFactory');

try {
  const cylinder = ShapeFactory.createShape('cylinder', {
    radius: 3,
    height: 7
  });
  console.log('Cylinder Volume:', cylinder.getVolume());

  const cuboid = ShapeFactory.createShape('cuboid', {
    length: 3,
    width: 4,
    height: 5
  });
  console.log('Cuboid Volume:', cuboid.getVolume());

  const triangularPyramid = ShapeFactory.createShape('pyramid', {
    baseType: 'triangular',
    baseLength: 6,
    baseHeight: 4,
    pyramidHeight: 10
  });
  console.log('Triangular Pyramid Volume:', triangularPyramid.getVolume());

  const squarePyramid = ShapeFactory.createShape('pyramid', {
    baseType: 'square',
    baseSide: 5,
    height: 12
  });
  console.log('Square Pyramid Volume:', squarePyramid.getVolume());

  const rectangularPyramid = ShapeFactory.createShape('pyramid', {
    baseType: 'rectangular',
    baseLength: 5,
    baseWidth: 4,
    height: 12
  });
  console.log('Rectangular Pyramid Volume:', rectangularPyramid.getVolume());

} catch (error) {
  console.error('Error:', error.message);
}