const Area = require("../Model/Model");

const getAllarea = async (req,res,next)=>{
    let areas;
    try{
        areas = await Area.find(); 
    } catch(err){
        console.log(err);
    }
    if(!areas){
        return res.status(404).json({message: " Area not found"});
    }
     return res.status(200).json({areas});
}
const addArea = async (req,res,next)=> {
    const{pincode,zone} = req.body;
    let areas;
    try {
        areas = new Area({
            pincode,
            zone
        });
        await areas.save();
    } catch(err){
        console.log(err);
    }

    if(!areas){
       return res.status(500).json({message: "Cant Add area"});
    }
    return res.status(201).json({areas})
}


    const checker = async (req,res,next) => {
        const id = req.params.id;
        let areas;
        try{
            areas = await Area.findById(id);
        } catch(err){
            console.log(err);
        } 
        if(!areas){
            res.status(404).json({message: "areas not found"});
        }
        res.status(200).json({areas});
    };

exports.getAllarea = getAllarea;
exports.addArea = addArea;
exports.checker = checker;