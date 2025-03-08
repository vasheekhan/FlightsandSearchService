const db = require('../models'); // No need for '/index.js', Node picks it automatically

const City = db.City; // ✅ Use PascalCase 'City', not 'city'

class CityRepository {
  async createCity({ name }) {
    try {
      return await City.create({ name });
    } catch (error) {
      console.error('Something went wrong in city repo:', error.message);
      throw new Error('Database Error: Unable to create city');
    }
  }

  async deleteCity(cityId) {
    try {
      const result = await City.destroy({
        where: { id: cityId },
      });
      return result > 0; // Return true if deleted, false otherwise
    } catch (error) {
      console.error('Something went wrong in city repo:', error.message);
      throw new Error('Database Error: Unable to delete city');
    }
  }

  async updateCity(cityId, data) {
    try {
      //this will also work but will not return updated object 
      // const [updatedRows] = await City.update(data, {
      //   where: { id: cityId },
      // });
      // return updatedRows > 0; 
      // // Return true if updated, false otherwise
      const city=await City.findByPk(cityId);
      city.name=data.name;
      await city.save();
      return city;
    } catch (error) {
      console.error('Something went wrong in city repo:', error.message);
      throw new Error('Database Error: Unable to update city');
    }
  }

  async getCity(cityId) {
    try {
      return await City.findByPk(cityId);
    } catch (error) {
      console.error('Something went wrong in city repo:', error.message);
      throw new Error('Database Error: Unable to fetch city');
    }
  }
}

module.exports = CityRepository; // ✅ Capitalized class name
