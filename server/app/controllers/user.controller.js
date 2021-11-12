exports.allAccess = (req, res) => {
  res.status(200).send("Public Content page.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content page.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Administrator please add some content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator please add some content.");
};
