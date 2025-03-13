const db = require('../models'); 
const {Op}=require("sequelize")
const City = db.City;

class CityRepository {
  async createCity({ name }) {
    try {
      return await City.create({ name });
    } catch (error) {
      console.error('Something went wrong in city repo:', error.message);
      throw new Error('Database Error: Unable to create city');
    }
  }
  async AddMultipleCity(multiplecity) {
    try {
        const result = await City.bulkCreate(multiplecity, { ignoreDuplicates: true }); // ✅ Prevent duplicate errors
        return result;
    } catch (error) {
        console.error('Something went wrong in city repo:', error.message);
        throw new Error('Database Error: Unable to add cities'); // ✅ Fix error message
    }
}

  async getAllCities(filter){
    try {
      if(filter.name){
        const cities=await City.findAll({
          where:{
            name:{
             [Op.startsWith]:filter.name
            }
          }
        })
        return cities;
      }
      const cities=await City.findAll();
      return cities;
      
    } catch (error) {
      console.error('Something went wrong in city repo:', error.message);
      throw new Error('Database Error: Unable to update city');
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

module.exports = CityRepository; 
