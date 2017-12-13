const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://192.168.1.131:27017/test', (err, db)=> {
  if(err){
    return console.log(err);
  }
  console.log('Connected to MongoDB Server!');
/*
  db.collection('sample').insertOne({
    text:'Sample from nodejs!',
    status:'1'
  },(err, result)=>{
    if(err){
      return console.log('Unable to insert data', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  })
*/

  db.collection('Users').insertOne({
    name:'Sowjanya',
    age:'34',
    location:'Katpadi'
  },(err, result)=>{
    if(err){
      return console.log('Unable to insert due to: ', err);
    }
    // console.log(JSON.stringify(result.ops, undefined, 2));
    console.log(result.ops[0]._id.getTimestamp());
  })
  db.close();
});
