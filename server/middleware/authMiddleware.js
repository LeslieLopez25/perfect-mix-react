const { auth, requiredScopes } = require("express-oauth2-jwt-bearer");

// Validate JWT with Auth0
const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`,
});

// Middleware to ensure user can only access their own data
const checkUserMatch = (req, res, next) => {
  const userIdFromToken = req.auth.payload.sub;
  const { auth0Id } = req.params;

  if (auth0Id && userIdFromToken !== auth0Id) {
    return res.status(403).json({ error: "Forbidden: Access denied" });
  }

  next();
};

module.exports = { checkJwt, checkUserMatch };
