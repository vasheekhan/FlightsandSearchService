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
    async getAllCities(){
        try {
            const cities=await this.cityRepository.getAllCities();
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