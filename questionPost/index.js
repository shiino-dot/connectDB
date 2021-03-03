
module.exports = function (context, req) {
  context.log('create question')

  if(req.body) {
    const item = {
      "id": req.body.id,
      "title": req.body.title
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