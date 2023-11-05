import {Sequelize} from "sequelize";

let { PGHOST, PGDATABASE='', PGUSER='', PGPASSWORD } = process.env

export async function connectDb() {
    try {
        await sequelize.authenticate()
    } catch (e) {
        console.error(e)
    }
}

 const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD,
    {
        host: PGHOST,
        port: 5432,
        ssl: true,
        dialect: "postgres",
        dialectOptions: {
            ssl: true,
        }
    },
)