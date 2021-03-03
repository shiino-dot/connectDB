process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const CosmosClient = require("@azure/cosmos").CosmosClient;
const endpoint = 'https://localhost:8081';
const key = 'C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw==';
const client = new CosmosClient({ endpoint, key });



module.exports = async function (context, req) {
  context.log('delete content')

  const id = req.query.id;
  const content = req.query.content;
  console.log(id + content);
  try {
    const databaseId = "qandaDB"
    const containerId = "answers"
    await client.database(databaseId).container(containerId).item(id, content).delete()
    context.res = {
      status: 200,
      body: 'success'
    }
  } catch(err){
    context.res = {
      status: 400,
      body: req
    }
  }

 
  context.done();
};