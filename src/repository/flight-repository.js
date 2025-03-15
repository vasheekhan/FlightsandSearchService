const db = require('../models');
const flights=db.Flights;

class FlightRepository {
    async createFlight(data) {  // Corrected method name
        try {
            const flight = await flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the flight repository");
            throw error; 
        }
    }
}

module.exports = FlightRepository;
