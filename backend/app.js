const express=require('express');
const app=new express();
const PORT=1234;

const cors=require('cors');

require('./connection')

const movieModel=require('./model/MovieData');

app.use(cors());

app.use(express.json())

app.get('/movies',async(req,res)=>{
    try{
        const data=await movieModel.find();
        res.send(data);
    }catch(error){
        res.send('Data not Found');
    }
})

app.post('/movieadd',async(req,res)=>{
    try{
        var item=req.body;
        const datasave=new movieModel(item);
        const saveddata=await datasave.save();
        res.send('Post Completed Successfully !!');
    }catch(error){
        console.log(error)
    }
})

app.put('/movieedit/:id',async(req,res)=>{
    try{
        const data=await movieModel.findByIdAndUpdate(req.params.id,req.body);
        res.send('Data Updated Successfully!!!')
    }catch(error){
        console.log(error)
    }
})

app.delete('/moviedelete/:id',async(req,res)=>{
    try {
        await movieModel.findByIdAndDelete(req.params.id);
        res.send('Data Deleted Successfully')
    }catch(error){
        console.log(error)
    }
})



app.listen(PORT,()=>{
    console.log('Server is running on port 1234')
}
)