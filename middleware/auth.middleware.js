import Jwt from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';

const authentication = (req, res, next) => {
  const authHeader = req.headers.authorization;

  const token = authHeader && authHeader.split(' ')[1];

  Jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) {
      console.error(err);
      return res.status(StatusCodes.FORBIDDEN).send({
        success: false,
        message: 'Authentication error'
      });
    }
    req.user = user;
    next();
  });
};

export default authentication;
