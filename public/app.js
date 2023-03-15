
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(__dirname + '/'));

// router.get('/',function(req,res){
//   res.download('/Users/stevenpak/Projects/DOCK6_web/src/img/rizzo_logo.png')
//   res.sendFile(path.join(__dirname+'/index.html'));
//   //__dirname : It will resolve to your project folder.
// });

// //add the router
//app.use('/', router);

//This is how to download. 
// app.use('/', (req,res)=>{
//   res.download('/Users/stevenpak/Projects/DOCK6_web/src/img/rizzo_logo.png')
// });

app.listen(process.env.port || 3000);

console.log('Running at Port 3000');