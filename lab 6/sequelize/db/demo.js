
const { Sequelize, DataTypes } = require('sequelize');
const { toDefaultValue } = require('sequelize/lib/utils');

const sequelize = new Sequelize('node_demo', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  async function demoDB() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        createModles(sequelize)
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }

  async function createModles(sequelize) {
    const User = sequelize.define('user', {
        name: DataTypes.TEXT,
        favoriteColor: {
          type: DataTypes.TEXT,
          defaultValue: 'green',
        },
        age: DataTypes.INTEGER,
        cash: DataTypes.INTEGER,
      });
      
      (async () => {
        await sequelize.sync({ force: true });
        // Code here
        const jane = User.build({ name: 'Jane' });
        console.log(jane instanceof User); // true
        jane.age = 18;
        console.log(jane.name); // "Jane"
        jane.save();
      })();
  }
  demoDB();