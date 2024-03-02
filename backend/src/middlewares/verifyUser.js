import jwt from 'jsonwebtoken'
export const verifyId = async (req, res, next) => {
    try {
        const header = req.headers['x-access-token']
        jwt.verify(header, 'uzer', (err, data) => {
            if (err) {
                return res.json({
                    status: false,
                    data: {},
                    error: err

                })
            }
            else {
                next();
            }
        });

    } catch (error) {
        console.log(error);
    }
}