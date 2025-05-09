const { FlightRepository, AirplaneRepository } = require("../repository/index");
const {compareDate,compareTime}=require("../utils/helper");

class FlightService {
    constructor() {
        this.FlightRepository = new FlightRepository();
        this.AirplaneRepository = new AirplaneRepository();
    }

    async createFlight(data) {
    
        try {
            console.log(data);
            if(!compareDate(data.arrivalTime,data.departureTime)){
                throw new Error("date is not valid");
                console.log("here");
            }
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw new Error("time is not valid");
            }
            if (!data.airplaneId) {
                throw new Error("Airplane ID is required to create a flight.");
            }

            const airplane = await this.AirplaneRepository.getAirplane(data.airplaneId);
            if (!airplane) {
                throw new Error(`No airplane found with ID: ${data.airplaneId}`);
            }

            const flight = await this.FlightRepository.createFlight({  // Fixed function call
                ...data,
                totalSeats: airplane.capacity
            });

            return flight;
        } catch (error) {
            console.error("Error in FlightService.createFlight:", error.message);
            throw error;
        }
    }
    async getFlight(data){
        try {
           const flight=await this.FlightRepository.getFlight(data);
           return flight; 
        } catch (error) {
            console.error("Error in FlightService.getFlight:", error.message);
            throw error;  
        }
    }
    async getAllFlight(data){
        try {
           const flight=await this.FlightRepository.getAllFlight(data);
           return flight; 
        } catch (error) {
            console.error("Error in FlightService.getAllFlight:", error.message);
            throw error;  
        }
    }
    async updateFlights(flightId,data){
try {
    const response=await this.FlightRepository.updateFlight(flightId,data);
    return response;
} catch (error) {
    console.error("Error in FlightService.getAllFlight:", error.message);
    throw error;  
}
    }

}

module.exports = FlightService;
