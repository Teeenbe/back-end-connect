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
      (type, first_name, last_name, about_me, interests, experience, email_address)
    VALUES
      ($1, $2, $3, $4, $5, $6, $7)
  ;`;
  profileData = Object.values(data);
  console.log(profileData);
  await query(sqlStatement, profileData);
}

async function deleteProfile(id) {
  const sqlStatement = `
    DELETE FROM profiles
    WHERE id = $1
  ;`;
  await query(sqlStatement, [id]);
}

module.exports = {
  getProfiles,
  addProfile,
  deleteProfile,
};
