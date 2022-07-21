const path = require('path');

module.exports = {
    // el lugar de procedencia de los archivos
  entry: './js/app.js',    
  output: {
    // el nombre del archivo compilado
    filename: 'app.js',
    // la ruta de destino, la carpeta dist que hemos creado.
    path: path.resolve(__dirname, 'dist'),
  },
};