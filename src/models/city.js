'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define associations here (if needed)
    }
  }

  City.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false, // Ensures 'name' cannot be NULL
        unique: true, // Ensures unique city names
      },
    },
    {
      sequelize,
      modelName: 'City', // Capitalized to follow Sequelize model conventions
    }
  );

  return City;
};
