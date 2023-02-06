const test = async (req, res) => {
  try {
    res.status(200).json({ msg: "test_ok" });
  } catch (error) {
    res.status(403).json({ msg: "test_fail" });
  }
};

module.exports = test;
