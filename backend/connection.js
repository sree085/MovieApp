const mongoose=require('mongoose');


mongoose.connect('mongodb+srv://sreedevsv085:sree2004@cluster0.wl3i0sp.mongodb.net/movieDB?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
    console.log('Connected to Movie Database !!');
}).catch((error)=>{
    console.log('Error In Connecting to Database !!!');
})


// cross orgin resource sharing (cors) ->to connect frontend and backend