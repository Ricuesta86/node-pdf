const pdf = require('html-pdf');


const content = `
<h1>Hola Mundo</h1>
<p>Este es un ejemplo de pdf con html. </p>
`;


pdf.create(content).toFile('./html-pdf-1.pdf', function(err, res){
    if(err){
        console.log(err);
    }else{
        console.log(res);
    }
});
