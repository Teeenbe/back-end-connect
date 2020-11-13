const { query } = require("../../index");

const profilesArray = [
  {
    type: "Mentee",
    firstName: "Hajoo",
    lastName: "Chung",
    aboutMe: "Used to be a mechanical engineer.",
    interests: ["JavaScript"],
    experience: "A little",
    emailAddress: "hajoo@soc.co.uk",
  },
  {
    type: "Mentor",
    firstName: "Ben",
    lastName: "Lee",
    aboutMe: "Makes crazy jingles for SoC.",
    interests: ["Front-end"],
    experience: "0-5 years",
    emailAddress: "ben@soc.co.uk",
  },
  {
    type: "Mentee",
    firstName: "Thomas",
    lastName: "Bennett",
    aboutMe: "Used to be a lifeguard.",
    interests: ["Node", "API", "Express"],
    experience: "A little",
    emailAddress: "tom@soc.co.uk",
  },
];

const sqlStatement = `
INSERT INTO profiles
    (type, first_name, last_name, about_me, interests, experience, email_address)
VALUES
    ($1, $2, $3, $4, $5, $6, $7)
;`;

async function populateTable() {
  let profileDataArray;
  for (profile of profilesArray) {
    profileDataArray = Object.values(profile);
    await query(sqlStatement, profileDataArray);
  }
}

populateTable();
