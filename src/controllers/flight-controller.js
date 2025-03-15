
const {FlightService}=require("../services/index");
const flightService=new FlightService();
const create=async(req,res)=>{
    try {
      const flight =await flightService.createFlight(req.body);
      return res.status(201).json({
        data:flight,
        success:true,
        err:{},
        message:"Successfully create the flight"
      })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create the flight",
            err: error,
          });   
    }
}
const getFlight=async(req,res)=>{
  try {
    const flight =await flightService.getFlight(req.body);
    return res.status(201).json({
      data:flight,
      success:true,
      err:{},
      message:"Successfully fetched the flight"
    })
  } catch (error) {
      return res.status(500).json({
          data: {},
          success: false,
          message: "Not able to get the flight",
          err: error,
        });   
  }
}
const getAllFlight=async(req,res)=>{
  try {
    const flight =await flightService.getAllFlight(req.query);
    return res.status(201).json({
      data:flight,
      success:true,
      err:{},
      message:"Successfully fetched the flight base on the filter"
    })
  } catch (error) {
      return res.status(500).json({
          data: {},
          success: false,
          message: "Not able to get the flight based on the filter",
          err: error,
        });   
  }
}



module.exports={
create,
getFlight,
getAllFlight
}

