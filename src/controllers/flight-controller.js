const {FlightService}=require("../services/index");
const {SuccessCodes,ServerErrorCodes}=require("../utils/error-codes")
const flightService=new FlightService();

const create=async(req,res)=>{
    try {
      const flightRequestData={
        flightNumber:req.body.flightNumber,
        airplaneId:req.body.airplaneId,
        departureAirportId:req.body.departureAirportId,
        arrivalAirportId:req.body.arrivalAirportId,
        arrivalTime:req.body.arrivalTime,
        departureTime:req.body.departureTime,
        price:req.body.price
      }
      const flight =await flightService.createFlight(flightRequestData);
      return res.status(SuccessCodes.CREATED).json({
        data:flight,
        success:true,
        err:{},
        message:"Successfully create the flight"
      })
    } catch (error) {
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: "Not able to create the flight",
            err: error,
          });   
    }
}
const getFlight=async(req,res)=>{
  console.log("hii");
  try {
    console.log(req.params.id);
    const flight =await flightService.getFlight(req.params.id);
    return res.status(SuccessCodes.OK).json({
      data:flight,
      success:true,
      err:{},
      message:"Successfully fetched the flight"
    })
  } catch (error) {
      return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
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
    return res.status(SuccessCodes.OK).json({
      data:flight,
      success:true,
      err:{},
      message:"Successfully fetched the flight base on the filter"
    })
  } catch (error) {
      return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
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

