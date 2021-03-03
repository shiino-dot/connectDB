
module.exports = function (context, req) {
  context.log('create answer')

  if(req.body) {
    if(req.body.kind === 'answer'){
      const item = {
        "id": req.body.id,
        "content": req.body.content
      }

      context.bindings.outputDocument = JSON.stringify(item)

      context.res = {
        status: 200,
        body: "success,answer"
      };
    } else if(req.body.kind === 'question') {
      const item = {
        "id": req.body.id,
        "title": req.body.title
      }
  
      context.bindings.outputquestions = JSON.stringify(item)
  
      context.res = {
        status: 200,
        body: "success,questions"
      };
    } else {
      context.res = {
        status: 400,
        body: "not-correct-kind"
      };
    }
  } else {
    context.res = {
      status: 400,
      body: "miss"
    };
  }
  context.done();
};