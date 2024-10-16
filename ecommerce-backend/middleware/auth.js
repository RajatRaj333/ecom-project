module.exports = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

  try {
    
    req.user = { id: 1, name: 'John Doe' }; 
    next();
  } catch (ex) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};
