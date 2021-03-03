process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const CosmosClient = require("@azure/cosmos").CosmosClient;
const endpoint = 'https://localhost:8081';
const key = 'C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw==';
const client = new CosmosClient({ endpoint, key });
const databaseId = "qandaDB"
const containerId = "answers"


module.exports = async function (context, req) {
  context.log('delete content')

  let document = context.bindings.inputDocument;
  if(document.length !== 0) {
    await client.database(databaseId).container(containerId).item({id:document.id,content: document.content}).delete()
    context.res = {
      status: 200,
      body: 'success'
    }
  } else{
    context.res = {
      status: 400,
      body: req
    }
  }

 
  context.done();
};