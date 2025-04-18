const express=require("express");
const {FlightMiddleWares}=require("../../middlerwares/index")
const CityController=require("../../controllers/city-controllers")
const FlightController=require("../../controllers/flight-controller")
const AirportController=require("../../controllers/airport-controller");
const { FlightRepository } = require("../../repository");
const router=express.Router();
router.post("/city",CityController.create)
router.delete("/city/:id",CityController.destroy)
router.get("/city/:id",CityController.get);
router.get("/city",CityController.getAll)
router.patch("/city/:id",CityController.update)
router.post("/createMultipleCities",CityController.createCities)
router.post("/createflight",FlightMiddleWares.validateCreateFlight,FlightController.create);
router.get("/getflight/:id",FlightController.getFlight);
router.get("/getAllFlight",FlightController.getAllFlight);
router.post("/airport",AirportController.create);
router.patch("/flights/:id",FlightController.update);
module.exports=router