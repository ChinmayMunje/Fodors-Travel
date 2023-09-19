import Tour from "../Models/Tour.js"

// CREATE NEW TOUR
export const createTour = async(req, res)=>{
    const newTour = new Tour(req.body);
    try{
        const savedTour = await newTour.save();
        res.status(200).json({success: true, message: "Successfully Created", data: savedTour});
    }catch(err){
        res.status(500).json({success: false, message: "Failed to Create. Try again"});
    }
};


// UPDATE TOUR
export const updateTour = async(req,res)=>{
    const id = req.params.id;
    try{
        const updateTour = await Tour.findByIdAndUpdate(id,{$set: req.body},{new: true});
        res.status(200).json({success: true, message: "Successfully Updated", data: updateTour});
    }catch(err){
        res.status(500).json({success: false, message: "Failed to Update. Try again"});
    }
};


// DELETE TOUR
export const deleteTour = async(req,res)=>{
    const id = req.params.id;
    try{
        await Tour.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Successfully Deleted"});
    }catch(err){
        res.status(500).json({success: false, message: "Failed to Delete. Try again"});
    }
};


// GET SINGLE TOUR
export const getSingleTour = async(req,res)=>{
    const id = req.params.id;
    try{
        const getSingleTour = await Tour.findById(id).populate("reviews");
        res.status(200).json({success: true, message: "Successfully Get the Tour Details of specific ID", data: getSingleTour});
    }catch(err){
        res.status(404).json({success: false, message: "Not Found"});
    }
};


// GET ALL TOURS
export const getAllTour = async(req,res)=>{
    const page = parseInt(req.query.page);
    try{
        const tours = await Tour.find({}).populate("reviews").skip(page * 8).limit(8);
        res.status(200).json({success: true, count: tours.length, message: "Successfully", data: tours});
    }catch(err){
        res.status(404).json({success: false, message: "Not Found"});
    }
};


// GET TOUR BY SEARCH
export const getTourBySearch = async(req,res)=>{
    const city = new RegExp(req.query.city, 'i');
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);
    
    try{
        // gte means Greater than equal

        const tours = await Tour.find({city, distance: {$gte: distance}, maxGroupSize: {$gte: maxGroupSize}}).populate("reviews");
        res.status(200).json({success: true, message: "Successfully", data: tours});

    }catch(err){
        res.status(404).json({success: false, message: "Not Found"});
    }
}


// GET FEATURED TOUR
export const getFeaturedTour = async(req,res)=>{    
    try{
        const tours = await Tour.find({featured: true}).populate("reviews").limit(8);
        res.status(200).json({success: true, message: "Successfully", data: tours});
    }catch(err){
        res.status(404).json({success: false, message: "Not Found"});
    }
}

// GET TOUR COUNTS

export const getTourCounts = async(req,res)=>{
    try{

        const tourCount = await Tour.estimatedDocumentCount();
        res.status(200).json({success: true, message: "Successfully", data: tourCount});

    }catch(err){
        res.status(404).json({success: false, message: "Failed to Fetch"});

    }
}
