const express = require("express");
const router = express.Router();

const { getProfiles, addProfile, deleteProfile } = require("../model/profiles");

// GET PROFILES
router.get("/", async function (req, res) {
  const profiles = await getProfiles();
  res.json({ message: "Data sent", payload: profiles });
});

// ADD PROFILE
router.post("/", async function (req, res) {
  const { payload } = req.body;
  await addProfile(payload);

  res.json({
    success: true,
  });
});

// DELETE PROFILE
router.delete("/:id", async function (req, res) {
  const id = req.params.id;
  await deleteProfile(id);
  res.json({ success: true });
});

module.exports = router;
