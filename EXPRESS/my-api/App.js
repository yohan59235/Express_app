// CONFIGURATION DU SERVEUR

const express = require("express");
const app = express();

// MES DATAS / TABLEAUX

const cars = [
    { id: 1, name: "Porsche"},
    { id: 2, name: "Ferrari"},
    { id: 3, name: "Lamborghini"},
    { id: 4, name: "BMW"},
    { id: 5, name: "Bugatti"},
    { id: 6, name: "Dodge"},
    { id: 7, name: "Ford"},
    { id: 8, name: "Mercedes-Benz"},
    { id: 9, name: "Toyota"},
    { id: 10, name: "Nissan"},
    { id: 11, name: "Bentley"},
    { id: 12, name: "Alpine"},
]

// MES FONCTIONS

const home = (req, res) => {
    res.send("Welcome to the best cars list")
}

const getCars = (req, res) => {
    const limit = parseInt(req.query.limit) || 10;
    const limitedList = cars.slice(0, limit)
    res.json(limitedList)
}

const getCarsById = (req, res) => {
    const carId = parseInt(req.params.id)

    const car = cars.find((car) => car.id === carId);

    if(car != null) {
        res.json(car)
    } else {
        res.status(404).send("Error 404 Not Found");
    }
};

const getFilteredCars = (req, res) => {
    const filter = req.query.name;

    const filteredList = cars.filter(
        (car) => car.name.toLowerCase() === filter.toLowerCase()
    );

    if(filteredList.length){
        res.json(filteredList)
    } else {
        res.send("Désolé la marque n'éxiste pas")
    }
}



// MES ROUTES

app.get("/", home);
app.get("/cars", getCars)
app.get("/cars/:id", getCarsById)
app.get("/filter", getFilteredCars)


module.exports = app;