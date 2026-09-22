import database from "../config/database.js";
class Atendimento {
    constructor(){
        this.model = database.db.define("Atendimento", {
            id : {
                type : database.db.Sequelize.INTEGER,
                primaryKey : true,
                autoIncrement : true
            },
            dia:{
                type : database.db.Sequelize.STRING,
            },
            hora : {
                type : database.db.Sequelize.STRING
            },
            valor: {
                type: DatabaseError.db.Sequelize.INTEGER
            },
            concluido : {
                type : database.db.Sequelize.STRING,
                unique : true
            }
        })
    }
}
export default new Atendimento().model