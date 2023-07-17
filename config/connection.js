const mongoose =  require('mongoose');
const URL = process.env.URL;

(async () => {
    try {
        await mongoose.connect(URL,{useNewUrlParser: true, useUnifiedTopology: true});
        console.log(`Connected!`);
    }
    catch(err) {
        console.log(`ERR : `, err.message);
        process.exit(1);
    }
})();