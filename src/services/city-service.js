const {CityRepository}=require("../repository/index")
class CityService{
    constructor(){
this.cityRepository=new CityRepository();
    }
    async createCity(data){
        try {
const city=await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Error in City Service:", error);
            console.log(error.message)
      throw new Error(error.message || "Service error while creating city");  
        }
    }
    async addMultipleCity(multiplecity) {
        try {
          const result = await this.cityRepository.AddMultipleCity(multiplecity);
         return result;
        } catch (error) {
          console.error('Something went wrong in city repo:', error.message);
          throw new Error('Database Error: Unable to delete city');
        }
      }
    async deleteCity(cityId){
        try {
           const response=this.cityRepository.deleteCity(cityId) 
           return response;
        } catch (error) {
            console.log("Something went wrong in city repo");
            throw {error}  
        }
    }
    async updateCity(cityId,data){
        try {
            const city=await this.cityRepository.updateCity(cityId,data);
            return city;
        } catch (error) {
            console.log("Something went wrong in city repo");
            throw {error}  
        }  
    }
    async getAllCities(filter){
        try {
            const cities=await this.cityRepository.getAllCities(filter);
            return cities;
        } catch (error) {
            console.log("Something went wrong in city repo");
            throw error   
        }
    }
    async getCity(cityId){
        try {
           const city=await this.cityRepository.getCity(cityId) 
           return city;
        } catch (error) {
            console.log("Something went wrong in city repo");
            throw {error}  
        } 
    }
}
module.exports=CityService;