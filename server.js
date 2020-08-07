const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://InvMiqx:charlie18530@cluster0.lbj32.mongodb.net/Cluster0?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', ()=>{
  console.log("MONGOOSE CONNECTION ESTABLISHED!");
});

var postSchema = new mongoose.Schema({
  ups: Number,
  title: String,
  created_utc: Number,
  url: String,
  subreddit: String,
  rate: Number,
  flipper: Boolean
});

var post = mongoose.model('Post', postSchema);

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());

app.get('/ping', function (req, res) {
 return res.send('pong');
});

//api stuff
app.get('/api/query', async(req, res) => {
  //all sorted by default
  try{

    if(req.query.limit){

      let temp = await post.find({}).limit(1);
      isFlipped = temp[0].flipper;

      let posts;
      let limit = parseInt(req.query.limit);

      switch(limit){ //common limits are imposed for efficiency
        case 10:
          posts = await post.find({flipper: isFlipped}).sort( {"rate" : -1} ).hint("rate_index").limit(10);
          res.json(posts);
          break;
        case 50:
          posts = await post.find({flipper: isFlipped}).sort( {"rate" : -1} ).hint("rate_index").limit(50);
          res.json(posts);
          break;
        case 100:
          posts = await post.find({flipper: isFlipped}).sort( {"rate" : -1} ).hint("rate_index").limit(100);
          res.json(posts);
          break;
        case 200:
          posts = await post.find({flipper: isFlipped}).sort( {"rate" : -1} ).hint("rate_index").limit(200);
          res.json(posts);
          break;
        case 250:
          posts = await post.find({flipper: isFlipped}).sort( {"rate" : -1} ).hint("rate_index").limit(250);
          res.json(posts);
          break;
        case 500:
          posts = await post.find({flipper: isFlipped}).sort( {"rate" : -1} ).hint("rate_index").limit(500);
          res.json(posts);
          break;
        case 1000:
          posts = await post.find({flipper: isFlipped}).sort( {"rate" : -1} ).hint("rate_index").limit(1000);
          res.json(posts);
          break;
        default:
        posts = await post.find({flipper: isFlipped}).sort( {"rate" : -1} ).hint("rate_index");
        //you can't pass in a variable for .limit in mongodb
        res.json(posts.slice(0, limit));
      }

    }
    else if(req.query.all){ //slow

      let temp = await post.find({}).limit(1);
      isFlipped = t[0].flipper;

      let posts = await post.find({flipper: isFlipped}).sort( {"rate" : -1} ).hint("rate_index");
      res.json(posts);
    }
    else if(req.query.nosort){ //slow

      let temp = await post.find({}).limit(1);
      isFlipped = t[0].flipper;

      let posts = await post.find({flipper: isFlipped});
      res.json(posts);
    }
    else if(req.query.subreddit){

      let temp = await post.find({}).limit(1);
      isFlipped = t[0].flipper;

      let posts = await post.find({flipper: isFlipped, subreddit: req.query.subreddit}).sort( {"rate" : -1} ).hint("rate_index");
      res.json(posts);
    }
    else if(req.query.bounds){

      let temp = await post.find({}).limit(1);
      isFlipped = t[0].flipper;

      let bounds = req.query.bounds.split("-");
      let lowerBound = parseInt(bounds[0]);
      let upperBound = parseInt(bounds[1]);
      let posts;
      switch(upperBound){
        case 10:
          posts = await post.find({flipper: isFlipped}).sort( {"rate" : -1} ).hint("rate_index").limit(10);
          res.json(posts.slice(lowerBound));
          break;
        case 50:
          posts = await post.find({flipper: isFlipped}).sort( {"rate" : -1} ).hint("rate_index").limit(50);
          res.json(posts.slice(lowerBound));
          break;
        case 100:
          posts = await post.find({flipper: isFlipped}).sort( {"rate" : -1} ).hint("rate_index").limit(100);
          res.json(posts.slice(lowerBound));
          break;
        case 200:
          posts = await post.find({flipper: isFlipped}).sort( {"rate" : -1} ).hint("rate_index").limit(200);
          res.json(posts.slice(lowerBound));
          break;
        case 250:
          posts = await post.find({flipper: isFlipped}).sort( {"rate" : -1} ).hint("rate_index").limit(250);
          res.json(posts.slice(lowerBound));
          break;
        case 500:
          posts = await post.find({flipper: isFlipped}).sort( {"rate" : -1} ).hint("rate_index").limit(500);
          res.json(posts.slice(lowerBound));
          break;
        case 1000:
          posts = await post.find({flipper: isFlipped}).sort( {"rate" : -1} ).hint("rate_index").limit(1000);
          res.json(posts.slice(lowerBound));
          break;
        default:
          posts = await post.find({flipper: isFlipped}).sort( {"rate" : -1} ).hint("rate_index");
          res.json(posts.slice(lowerBound, bounds[1]));
      }

    }
    else res.send("invalid api syntax");
  }
  catch(e){
    console.log(e);
  }

});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
