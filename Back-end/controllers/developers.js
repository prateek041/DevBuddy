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
  const { name, country, city, state, college } = req.query;
  const profiles = await DevProfileSchema.find({});
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
