const { query } = require("../db/index");

async function getProfiles() {
  const sqlStatement = `
    SELECT *
    FROM profiles
    ;`;
  const res = await query(sqlStatement);
  return res.rows;
}

async function addProfile(data) {
  const sqlStatement = `
    INSERT INTO profiles
      (type, firstname, lastname, aboutme, interests, experience, emailaddress)
    VALUES
      ($1, $2, $3, $4, $5, $6, $7)
  ;`;
  profileData = Object.values(data);
  console.log(profileData);
  // await query(sqlStatement, profileData);
}

module.exports = {
  getProfiles,
  addProfile,
};
