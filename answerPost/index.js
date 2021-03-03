
module.exports = function (context, req) {
  context.log('create answer')

  if(req.body) {
    const item = {
      "id": req.body.id,
      "content": req.body.content
    }

    context.bindings.outputDocument = JSON.stringify(item)

    context.res = {
      status: 200,
      body: "success"
    };
  } else {
    context.res = {
      status: 400,
      body: "miss"
    };
  }
  context.done();
};