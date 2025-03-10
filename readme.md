how to associate two models?
first go to their model file and associate them like this 
static associate(models) {
      // define association here
      this.belongsTo(models.City,{
        foreignKey:"cityId",
        onDelete:"CASCADE" //mean if the cities is delete the airport of that cities also get deleted
      })
    }
 static associate(models) {
      // Define associations here (if needed)
      this.hasMany(models.Airports,{
        foreignKey:"cityId"
      })
    }
  
  make one foreign key which is common in both the table and pass the foreign key as a second parameter

  cityId: {
        type: Sequelize.INTEGER,
        onDelete:"CASCADE",
        references:{
          model:"cities",
          key:"id",
          as:"cityId"
        },
then you have to make changes in the migration file as you have to add the references for that