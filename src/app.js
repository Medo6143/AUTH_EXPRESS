import express from "express";
import mongoose from "mongoose";
import User from "./shemas/User.js";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://medow6143:qCys9Imxv1NfnVer@myfirstculster.ve3izo4.mongodb.net/?retryWrites=true&w=majority&appName=MyFirstCulster"
  )
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log(err));

app.post("/register", async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const userDB = await User.findOne({ $or: [{ username }, { email }] });

    if (userDB) {
      res.send("User already exist");
      return;
    }

    // hashing password and salting

    const passwordHashing = await bcrypt.hashSync(password, 10);

    const user = new User({
      username,
      password: passwordHashing,
      email,
    });

    await user.save();
    res.send("user created");
  } catch (err) {
    res.send(err);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("Password or email is incorrect");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).send("Password or email is incorrect");
    }

    res.send("Login successful");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
