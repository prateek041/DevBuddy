const express = require("express");
const router = express.Router();

const {
  createDevProfile,
  getAllDevProfiles,
  getDevProfile,
  deleteDevProfile,
  patchDevProfile,
} = require("../controllers/developers");

router.route("/").get(getAllDevProfiles).post(createDevProfile);
router
  .route("/id")
  .get(getDevProfile)
  .patch(patchDevProfile)
  .delete(deleteDevProfile);

module.exports = router;
