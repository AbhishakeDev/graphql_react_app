import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema.js';
import cors from 'cors';

const app = express();
//Allow CORS
app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    //go to local:4000/graphql for graphical interface fetching
    graphiql: true,
  })
);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log('Server started on PORT 4000'));
