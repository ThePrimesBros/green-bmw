const jsonData = require('../../../db/db.json');

export default async function handler(req, res) {
    const { carId } = req.query;
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const car = getCar(carId);
                res.status(200).json(car);
            }
            catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}

const getCar = (carId) => {
    const car = jsonData.cars.find((car) => car.id === parseInt(carId));
    return car;
}