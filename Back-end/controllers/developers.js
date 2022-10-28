const express = require("express");

// for creating a new profile. When the user signs in.
const createDevProfile = (req, res) => {
  res.status(200).send("Dev Profile created");
};

// To get all developer profiles, depending on the query made by user.
const getAllDevProfiles = (req, res) => {
  res.status(200).send("List of all dev profiles");
};

// To get specifically requested Dev profile.
const getDevProfile = (req, res) => {
  res.status(200).send("Dev profile");
};

// To update dev profile.
const patchDevProfile = (req, res) => {
  res.status(200).send("Profile updated");
};
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
