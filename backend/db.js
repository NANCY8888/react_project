const mongoose= require('mongoose');

const mongoURI='mongodb+srv://project1:project1@cluster0.3jibllb.mongodb.net/chocodelight?retryWrites=true&w=majority'
const mongodb=async()=>{
    await mongoose.connect(mongoURI,{useNewUrlParser:true},async(err,result)=>{
        
        if (err) console.log("---",err)
        else{
            console.log("connected");
            const fetched_data=await mongoose.connection.db.collection("chocolate_items");
            fetched_data.find({}).toArray(function(err,data){
                if(err) console.log(err);
                else console.log(data);
            })
        }

    });
}
module.exports=mongodb();