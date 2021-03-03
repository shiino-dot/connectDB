module.exports = function (context, input) {
  let documents = context.bindings.documents;

  context.res = {
    status: 200,
    body: documents
  };
  context.done();
};