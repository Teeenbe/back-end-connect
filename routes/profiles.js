const express = require("express");
const router = express.Router();

// const { getProfiles, addProfile } = require("../model/profiles");

const profilesArray = [
  {
    id: 0,
    type: "Mentee",
    firstName: "Hajoo",
    lastName: "Chung",
    aboutMe: "Used to be a mechanical engineer.",
    interests: ["JavaScript"],
    experience: "A little",
    emailAddress: "hajoo@soc.co.uk",
  },
  {
    id: 1,
    type: "Mentor",
    firstName: "Ben",
    lastName: "Lee",
    aboutMe: "Makes crazy jingles for SoC.",
    interests: ["Front-end"],
    experience: "0-5 years",
    emailAddress: "ben@soc.co.uk",
  },
  {
    id: 2,
    type: "Mentee",
    firstName: "Thomas",
    lastName: "Bennett",
    aboutMe: "Used to be a lifeguard.",
    interests: ["Node", "API", "Express"],
    experience: "A little",
    emailAddress: "tom@soc.co.uk",
  },
];

// GET PROFILES
router.get("/", function (req, res) {
  //   const profiles = getProfiles();
  res.json({ message: "Data sent", payload: profilesArray });
});

// ADD PROFILE
router.post("/", function (req, res) {
  const { payload } = req.body;
  // Insert into database
  profilesArray.push(payload);
  //   addProfile(payload);
  res.json({
    success: true,
  });
});

// DELETE PROFILE
router.delete("/:id", function (req, res) {
  const profileId = req.params.id;
  console.log("Profile to be deleted: " + profileId);
});

module.exports = router;
