const jsonData = require('../../../db/db.json');

export default async function handler(req, res) {
    const { method } = req;

    const { pageParam } = req.query;

    switch (method) {
        case 'GET':
            try {
                const { itemPerPage, pageNumber } = req.query;

                // keep the previous page data
                const cars = jsonData.cars.slice((pageNumber - 1) * itemPerPage, pageNumber * itemPerPage);

                res.status(200).json({ success: true, data: cars });
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