import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  // Generate the token
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  // Store the generated token in the cookies
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    maxAge: 1000 * 60 * 60 * 24 * 30,
    sameSite: 'strict', // Lax or Strict based on your needs and security requirements
  });
};

export default generateToken;
