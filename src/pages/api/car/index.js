const jsonData = require('../../../db/db.json');

export default async function handler(req, res) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                res.status(200).json(jsonData.cars);
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