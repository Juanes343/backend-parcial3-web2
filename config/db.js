const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://softplay_user:DvKpmEbHcpLzmDE@cluster0.dz10n4y.mongodb.net/?appName=Cluster0');
    console.log('Conectado a MongoDB Atlas');
  } catch (error) {
    console.log('Error conectando a MongoDB:', error.message);
    console.log('Continuando sin base de datos...');
  }
};

module.exports = connectDB;
