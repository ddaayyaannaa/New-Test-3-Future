const Cylinder = require('./shapes/Cylinder');
const Cuboid = require('./shapes/Cuboid');
const TriangularPyramid = require('./shapes/pyramids/TriangularPyramid');
const SquarePyramid = require('./shapes/pyramids/SquarePyramid');
const RectangularPyramid = require('./shapes/pyramids/RectangularPyramid');
const ShapeFactory = require('./ShapeFactory');

module.exports = {
  ShapeFactory,
  Cylinder,
  Cuboid,
  TriangularPyramid,
  SquarePyramid,
  RectangularPyramid
};