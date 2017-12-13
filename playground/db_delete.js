const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://192.168.1.131:27017/test', (err, db)=>{
  if(err){
    console.log('Error in connecting', err);
  }
/*delete many
  //
  db.collection('sample').deleteMany({text:'Sample from nodejs!'}).then((res)=>{
    console.log(`This one deleted: ${res}`);
  })
  */

  /*delete one
  db.collection('sample').deleteOne({text:'Sample element for NodeJS'}).then(res=>{
    console.log(res);
  })
  */

  /*findone and delete */
  db.collection('sample').findOneAndDelete({text:'Sample element for NodeJS'}).then((res)=>{
    console.log(res);
  })



  //db.close();
})
