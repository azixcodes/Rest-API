const users = [
  {
    name: "John",
    age: 42,
    country: "USA",
    password: "Somepasseorf",
  },
  {
    name: "Doe",
    age: 24,
    country: "Spain",
    password: "Somepasseorf",
  },
  {
    name: "Bale",
    age: 35,
    country: "Paris",
    password: "Somepasseorf",
  },
];

export const getUsers = (_, res) => {
  res.send(users);
};

export const saveUser = (req, res) => {
  res.send(req.body);
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
