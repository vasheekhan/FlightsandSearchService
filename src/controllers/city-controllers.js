const { CityService } = require("../services/index");
const CityService = new CityService();
const create = async (req, res) => {
  try {
    const city = await CityService.createCity(req.body);
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
      err: error,
    });
  }
};
const destroy = async (req, res) => {
  try {
    const response = await CityService.deleteCity(req.params.id);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully created a city",
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
    const response = await CityService.getCity(req.params.id);
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
    const response = await CityService.updateCity(req.params.id, req.body);
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
module.exports = {
  create,
  destroy,
  update,
  get,
};
