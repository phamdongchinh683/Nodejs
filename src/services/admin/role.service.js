const Role = require("../../models/role.model");
const { nowDate } = require("../../controllers/auth/auth.method");
const { responseStatus } = require("../../utils/handler");

class RoleService {
  async saveRole(nameRole, res) {
    let roleExists = await Role.findOne({ name: nameRole });
    if (roleExists) {
      return responseStatus(res, 402, "failed", "Role already exists");
    }
    let roleCreated = await Role.create({
      name: nameRole,
      createdAt: nowDate(),
    });
    if (!roleCreated) {
      return;
    }
    return responseStatus(res, 200, "success", "Create role successful");
  }
  async roleList(res) {
    let roles = await Role.find();
    if (roles.length === 0) {
      return responseStatus(
        res,
        402,
        "failed",
        "There is currently no listing "
      );
    }
    return responseStatus(res, 200, "success", roles);
  }
  async updateRole(id, name, res) {
    let update = await Role.findByIdAndUpdate(id, { name: name });
    if (!update) {
      return responseStatus(res, 402, "failed", "No changes were made");
    }
    return responseStatus(res, 200, "success", "Updated role");
  }
  async deleteRole(id, res) {
    let removeRole = await Role.findByIdAndDelete(id);
    if (!removeRole) {
      return responseStatus(res, 402, "failed", "This role does not exist");
    }
    return responseStatus(res, 200, "success", "Deleted role");
  }
}

module.exports = new RoleService();