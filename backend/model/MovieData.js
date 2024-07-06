const mongoose=require('mongoose');

const MovieSchema=mongoose.Schema({
    mName:String,
    mDesc:String,
    mImg:String,
    mDir:String
})


const MovieData=mongoose.model('movie',MovieSchema);

module.exports=MovieData

