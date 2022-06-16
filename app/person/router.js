const express = require("express");
const {
  index,
  detail,
  create,
  destroy,
  update,
  updateProgram,
} = require("./controller");
const router = express.Router();

// get all data
router.get("/", index);
// get data by uuid
router.get("/:uuid", detail);
// create data
router.post("/", create);
// update data
router.put("/:uuid", update);
// update program data
router.patch("/program/:uuid", updateProgram);
// delete data
router.delete("/:uuid", destroy);

module.exports = router;
