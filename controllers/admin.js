var Tour = require('../models/tour');
//List Tours
exports.inq = function (req, res) {
    Tour.find(function (err, tour) {
        //console.log(tour);
        if (err) return console.log(err);
        res.send(tour);
        console.log("tours encontrados...");
        //console.log(tour);
    })
};


//Get Tour by ID
exports.inqId = (req, res) => {
    Tour.findById(req.params.id, (err, tour) => {
    console.log(tour);
    if (err) return console.log(err);
    res.send(tour);
    console.log("tour encontrado: "+req.params.id);
    })
};
//Get Tour by Name
exports.inqByName = (req, res) => {
    Tour.findOne({tourName:req.params.name}, (err, tour) => {
    if (err) return console.log(err);
    res.send(tour);
    console.log("tour encontrado: "+req.params.name);
    })
};
// add 
exports.add = (req, res) => {
    tour = new Tour({
        tourName: req.body.tourName,
        tourLength: req.body.tourLength,
        tourPrice: req.body.tourPrice,
        tourDifficulty: req.body.tourDifficulty,
        tourDescription: req.body.tourDescription
    })
    console.log(tour);
    tour.save(function (err, tour) {
        if (err) return console.error(err);
        res.send(tour.tourName + " insertado en la coleccion tours . . .");
        //console.log("Tour insertado " +req.params.name);
        console.log("Tour insertado: " +tour.tourName);
    });
}

// Delete Tour by ID
exports.delete = (req, res) => {
    Tour.findByIdAndDelete(req.params.id, (err, tour) => {
    if (err) return console.log(err);
    res.send(tour.tourName + " eliminado de la coleccion tours . . .");
    console.log("tour eliminado " +req.params.id);
    })
};