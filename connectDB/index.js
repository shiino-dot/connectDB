module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };


    // let doc = context.bindings.inputDocument; 

    // if (doc !== null) {
        
    //     context.bindings.outputDocument = JSON.stringify({ 
    //         id: doc.id,
    //         title: req.body.title,
    //         summary: req.body.summary
    //     });
    // }
    // else {
        
    //     context.bindings.outputDocument = JSON.stringify({
    //         title: req.body.title,
    //         summary: req.body.summary,
    //     });
    // }

    // context.res = {
    //     status: 201,
    //     body: { 
    //         doc
    //     }
    // };

    // context.done();
}