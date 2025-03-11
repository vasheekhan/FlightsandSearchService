const { CityService } = require("../services/index");
const cityService = new CityService();
const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully created a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a city",
      err: {
        message: error.message || "Something went wrong",
      },
    });
  }
};
const createCities = async (req, res) => {
  try {
    const city = await cityService.addMultipleCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully created a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a city",
      err: {
        message: error.message || "Something went wrong",
      },
    });
  }
};
const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully deleted a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the  city",
      err: error,
    });
  }
};
const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.params.id);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully fetched a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetched the  city",
      err: error,
    });
  }
};
const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully update a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the  city",
      err: error,
    });
  }
};
const getAll=async(req,res)=>{
  try {
    const cities=await cityService.getAllCities(req.query);
    return res.status(201).json({
      data: cities,
      success: true,
      message: "Successfully fetched a city",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get the  city",
      err: error,
    }); 
  }
}
module.exports = {
  create,
  createCities,
  destroy,
  update,
  get,
  getAll,
};
