const { Op } = require('sequelize');
const db = require('../models');
const flights=db.Flights;

class FlightRepository {
    #createFilter(data){
        let filter={};
        if(data.arrivalAirportId){
            filter.arrivalAirportId=data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId=data.departureAirportId;
        }
        //object.assign(objectname,(price:{[Op.gte]:data.minPrice}));
        let priceFilter=[];
        if(data.minPrice){
            priceFilter.push({price:{[Op.gte]:data.minPrice}});

        }
        if(data.maxPrice){
            priceFilter.push({price:{[Op.lte]:data.maxPrice}});
        }
        Object.assign(filter,{[Op.and]:priceFilter});
        return filter;
    }
    async createFlight(data) {  // Corrected method name
        try {
            const flight = await flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the flight repository");
            throw error; 
        }
    }
    async getFlight(data){
        try {
            const flight = await flights.findByPk(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the flight repository");
            throw error; 
        }
    }
    async getAllFlight(filter){
        try {
            const filterObject=this.#createFilter(filter);
            console.log("filter is");
            console.log(filter);
            console.log(filterObject)
            const flight = await flights.findAll({
                where:filterObject
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the flight repository");
            throw error; 
        }
    }
    async updateFlight(flightId,data){
        try {
            await flights.update(data,{
             where:{
                 id:flightId
             }
            }) 
            return true;
         } catch (error) {
           console.log("something went wrong in the repository layer");
           throw {error};
         }
         }
    }


module.exports = FlightRepository;
