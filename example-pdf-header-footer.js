
const pdf = require('html-pdf');

const content = `
<!doctype html>
    <html>
       <head>
            <meta charset="utf-8">
            <title>PDF Result Template</title>
            <style>
                h1 {
                    color: green;
                    text-align:center;
                }
            </style>
        </head>
        <body>
            <div id="pageHeader" style="border-bottom: 1px solid #ddd; padding-bottom: 5px; padding-left: 20px;">
                <p>Ricuesta - Ejemplo de encabezado en HTML PDF</p>
            </div> 
            <div id="pageFooter" style="border-top: 1px solid #ddd; padding-top: 5px;">
                <p style="color: #666; width: 70%; margin: 0; padding-bottom: 5px; padding-left: 20px; text-align: let; font-family: sans-serif; font-size: .65em; float: left;"><a href="https://github.com/Ricuesta86" target="_blank">https://github.com/Ricuesta86</a></p>
                <p style="color: #666; margin: 0; padding-bottom: 5px; text-align: right; font-family: sans-serif; font-size: .65em">Página {{page}} de {{pages}}</p>
            </div>
            <h1>Document PDF</h1>
            <p style="padding-left:20px;">Generando un PDF con un HTML sencillo</p>
        </body>
    </html>
`;

pdf.create(content).toFile('./html-pdf-header-footer.pdf', function(err, res) {
    if (err){
        console.log(err);
    } else {
        console.log(res);
    }
});