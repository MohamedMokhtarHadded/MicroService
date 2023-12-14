
const express = require("express")
const app = express()
const Eureka = require('eureka-js-client').Eureka;
const connectToDatabase = require('./config/database')

/*
app.get('/',(req,res)=>{
  res.send("it is working from web")
})  */


//bring users 
const users = require('./routes/user-routes')
app.use('/user',users)
//app.use('/events',events)  


//connect to database consumed from config/database.js
connectToDatabase()
/*const client = new Eureka({
  instance: {
    app: 'user-service',        // Nom de votre microservice
    hostName: 'usercont',       // Nom d'hôte de votre conteneur Docker
    ipAddr: '127.0.0.1',         // Adresse IP de votre conteneur Docker
    port: {
      '$': 3001,                 // Port de votre microservice
      '@enabled': true,
    },
    vipAddress: 'user-service', // Adresse VIP de votre microservice
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn',             // Nom de votre data center
    },
  },
  eureka: {
    host: 'eureka',             // Nom d'hôte de votre serveur Eureka (comme défini dans docker-compose.yml)
    port: 8761,                  // Port d'Eureka
    servicePath: '/eureka/apps/',
  },
});

// Démarrez le client Eureka
client.start((error) => {
  if (error) {
    console.log(error);
  }
  console.log('Eureka client started');
});*/


app.listen(3001,()=>{
  console.log(' app is working on port 3001')
})
