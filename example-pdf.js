const pdf = require('html-pdf');

const content = `
<h1>Hola mundo</h1>
<p>Generando un pdf con un html sencillo.</p>
`;

pdf.create(content).toFile('./html-pdf.pdf', function(err,res){
    if(err){
        console.log(err);
    }else{
        console.log(res);
    }
});