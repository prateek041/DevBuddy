const express = require("express");
const DevProfileSchema = require("../models/developer");
const asyncWrapper = require("../middleware/asyncWrapper");

// CREATE
// for creating a new profile. When the user signs in.
const createDevProfile = asyncWrapper(async (req, res) => {
  // creating the Devprofile
  const newUser = new DevProfileSchema();
  newUser.name = req.body.name;
  newUser.username = req.body.username;
  newUser.bio = req.body.bio;
  newUser.email = req.body.email;
  newUser.country = req.body.country;
  newUser.city = req.body.city;
  newUser.state = req.body.state;
  newUser.isCollegeStudent = req.body.isCollegeStudent;
  newUser.college = req.body.college;
  newUser.techStack = req.body.techStack;
  newUser.socials = req.body.socials;

  // creating entry in the Database.
  await newUser.save();
  res.status(200).json({ status: "success" });
});

// READ
// To get all developer profiles, depending on the query made by user.
const getAllDevProfiles = asyncWrapper(async (req, res) => {
  const { country, city, state, college, techStack } = req.query; // destructuring request params.

  const queryObject = {};

  if (college) {
    // if college is requested.
    queryObject.college = { $regex: college, $options: "i" };
  }
  if (country) {
    queryObject.country = { $regex: country, $options: "i" };
  }
  if (city) {
    queryObject.city = { $regex: city, $options: "i" };
  }
  if (state) {
    queryObject.state = { $regex: state, $options: "i" };
  }
  if (techStack?.length > 0) {
    queryObject.techStack = { $all: techStack };
  }

  console.log(queryObject);
  const profiles = await DevProfileSchema.find(queryObject);
  res.status(201).json({ status: "success", profiles: profiles });
});

// READ
// To get specifically requested Dev profile.
const getDevProfile = (req, res) => {
  res.status(200).send("Dev profile");
};

// UPDATE
// To update dev profile.
const patchDevProfile = (req, res) => {
  res.status(200).send("Profile updated");
};

// UPDATE
// To delete profile.
const deleteDevProfile = (req, res) => {
  res.status(200).send("profile deleted");
};

module.exports = {
  createDevProfile,
  getAllDevProfiles,
  getDevProfile,
  patchDevProfile,
  deleteDevProfile,
};
