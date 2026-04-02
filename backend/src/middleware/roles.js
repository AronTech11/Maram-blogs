/**
 * Role hierarchy: superadmin > admin > user
 *
 * superadmin: Full access — manage all blogs, users, promote/demote anyone
 * admin: Can create/edit/delete THEIR OWN blogs, manage comments
 * user: Can read blogs and post comments only
 */

// Check if user is at least an admin (admin or superadmin)
const isAdminOrAbove = (req, res, next) => {
  if (!req.role || (req.role !== "admin" && req.role !== "superadmin")) {
    return res.status(403).json({
      success: false,
      message: "Access denied. Admin privileges required.",
    });
  }
  next();
};

// Check if user is superadmin
const isSuperAdmin = (req, res, next) => {
  if (req.role !== "superadmin") {
    return res.status(403).json({
      success: false,
      message: "Access denied. Super Admin privileges required.",
    });
  }
  next();
};

module.exports = { isAdminOrAbove, isSuperAdmin };
