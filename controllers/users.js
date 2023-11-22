import Users from "../models/Users.js";

export const getUsers = (_, res) => {
  res.send("users");
};

export const saveUser = async (req, res) => {
  const { email, username, tagline, password } = req.body;
  const user = new Users({
    email,
    username,
    tagline,
    password,
  });
  try {
    const saveduser = await user.save();
    res.json(saveduser);
  } catch (err) {
    res.send({ message: err });
  }
};

export const getSingleUser = (req, res) => {
  // const { id } = req.params;

  const id = parseInt(req.params.id);
  let filteredData = users.filter((item) => item.age === id);
  if (filteredData.length > 0) {
    const { password, ...restData } = filteredData[0];
    res.json({ ...restData });
  } else {
    res.json({
      message:
        "Oop's we did'nt find some related to your search, please try again",
      status: "failure",
      data: null,
    });
  }
};

export const deleteuser = (req, res) => {
  const { id } = req.params;
  users.filter((item) => item.age !== id);
  res.send("user with the id deleted");
};

export const signIn = (req, res) => {
  const { email, password } = req.body;
  if (email === "" || password === "") {
    res.send({ message: "Both fields are required", isLoggedIn: false });
  } else {
    let data = users.find(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase() &&
        user.password === password
    );
    if (data) {
      res.send({ message: "success", isLoggedIn: true });
    } else {
      res.send({
        message: "this email is not registerd in our system",
        isLoggedIn: false,
      });
    }
  }
};

// yaAyvvXPo7PQOH8T
// mongodb+srv://rest-api:<password>@cluster0.7yo8ti1.mongodb.net/
