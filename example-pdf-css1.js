const pdf = require('html-pdf');

const content = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document pdf with css</title>
    <style>
        .center{
            text-align: center;
        }

        .red{
            color: red;
        }
    </style>
</head>
<body>
    <h1 class="center">Documet pdf</h1>
    <p class="red"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, dolore qui. Minima nulla delectus, deleniti fuga veniam itaque autem culpa maxime natus accusantium assumenda corporis aperiam dolorum dolor perferendis adipisci.</p>
</body>
</html>
`;


pdf.create(content).toFile('./html-pdf-css.pdf', function(err, res){
    if(err){
        console.log(err);
    }else{
        console.log(res);
    }
});

