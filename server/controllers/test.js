const test = async (req, res) => {
  try {
    res.status(200).json({ msg: req.user });
  } catch (error) {
    res.status(400).json({ msg: "SOMETHING WENT WRONG" });
  }
};

module.exports = test;
