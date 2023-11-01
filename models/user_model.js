import { Sequelize } from 'sequelize';

import db from '../config/db.js'

export const User = db.define('user', {
    user_id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_name: {
        type: Sequelize.STRING,
        // allowNull quiere decir que el campo no puede ir vacio
       
    },
    user_email: {
        type: Sequelize.STRING
        
    },
    user_password: {
        type: Sequelize.STRING
       
    },

    user_status: {
        type: Sequelize.CHAR
    }
},{
    //Sequelize inferirá que el nombre de la tabla es igual al nombre del modelo
    freezeTableName: true
});

//relacion de user 1 ---> m  sesion
// User.hasMany(Sesion, { foreignKey: 'user_id' });
// //relacion de user 1 ---> m  participant
// User.hasMany(Participant, { foreignKey: 'user_id' });
