const {Airplane}=require("../models/index");
class AirplaneRepository{
    async getAirplane(airplaneId){
        try {
            const airplane=await Airplane.findByPk(airplaneId);
            return airplane;   
        } catch (error) {
            console.log("something went wrong in the airplane repo");
            throw error;
        }
 
    }
}
module.exports=AirplaneRepository;