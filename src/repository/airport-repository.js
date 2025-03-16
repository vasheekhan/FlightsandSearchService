const CrudRepository=require("./crud-repository");
class AirportRepository extends CrudRepository{
    constructor(model){
        super(model)
    }
}
module.exports=AirportRepository;