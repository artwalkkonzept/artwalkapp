import { MongoClient } from 'mongodb';

let client;

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017'
export const initializeDbConnection = async () => {
    client = await MongoClient.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});
}

export const getDbConnection = dbName => {
    const db = client.db(dbName);
    return db;
}
