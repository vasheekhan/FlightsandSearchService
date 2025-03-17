const express=require("express");
const CityController=require("../../controllers/city-controllers")
const FlightController=require("../../controllers/flight-controller")
const AirportController=require("../../controllers/airport-controller");
const router=express.Router();
router.post("/city",CityController.create)
router.delete("/city/:id",CityController.destroy)
router.get("/city/:id",CityController.get);
router.get("/city",CityController.getAll)
router.patch("/city/:id",CityController.update)
router.post("/createMultipleCities",CityController.createCities)
router.post("/createflight",FlightController.create);
router.get("/getflight",FlightController.getFlight);
router.get("/getAllFlight",FlightController.getAllFlight);
router.post("/airport",AirportController.create);
module.exports=router