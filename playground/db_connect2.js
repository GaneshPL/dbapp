const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://192.168.1.131:27017/test',(err, db)=>{
  if(err){
    return console.log('Unable to connect', err);
  }
  console.log('Connected to DB');

  // db.collection('Users').find({_id: new ObjectId('5a2ecc4a91544b5647f18f48')}).toArray().then((data)=>{
  //   console.log(JSON.stringify(data, undefined, 2));
  // },(err)=>{
  //   console.log('Unable to get data', err);
  // })

  db.collection('Users').find().count().then((d)=>{
    console.log(`Total count of documents: ${d}`);
  },(err)=>{
    console.log('Error fetching', err);
  })

})
