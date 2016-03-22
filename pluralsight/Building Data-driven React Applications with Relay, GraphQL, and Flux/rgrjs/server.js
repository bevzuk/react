import fs from 'fs';
import express from 'express';
import Schema from './data/schema';
import GraphQLHTTP from 'express-graphql';
import {MongoClient} from 'mongodb';
import {graphql} from 'graphql';
import {introspectionQuery} from 'graphql/utilities';

let app = express();

console.log("starting...");
app.use(express.static('public'));

(async () => {
    try {
        console.log("connect to db: ", process.env.MONGO_URL);
        let db = await MongoClient.connect(process.env.MONGO_URL);
        console.log("connected");

        let schema = Schema(db);

        app.use('/graphql', GraphQLHTTP({
            schema: schema,
            graphiql: true
        }));

        app.listen(3000, () => console.log('Listening on port 3000'));

        // Generate schema.json
        let json = await graphql(schema, introspectionQuery);
        fs.writeFile('./data/schema.json', JSON.stringify(json, null, 2), err => {
            if (err) throw err;

            console.log("JSON schema created");
        });
    } catch(e) {
        console.log(e);
    }
})();

