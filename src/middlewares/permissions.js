const permit = (...rolesAutorises) => {
  return (req, res, next) => {
    const userRole = req.user?.role; 

    if (!userRole) {
      return res.status(403).json({ error: "Accès refusé. Rôle manquant." });
    }

    if (!rolesAutorises.includes(userRole)) {
      return res.status(403).json({ 
        error: `Permission refusée. Requis: [${rolesAutorises.join(", ")}], Votre rôle: ${userRole}` 
      });
    }

    next();
  };
};

module.exports = { permit };