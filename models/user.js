const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String },
  password: { type: String },  //make this required true
  country: { type: String },
  position: { type: String },
  role: { type: String },
  email: { type: String },
  image: { type: String }
  // teamManagerOf: { type: mongoose.Schema.ObjectId, ref: 'Team', required: true },
  // racerManagerOf: { type: mongoose.Schema.ObjectId, ref: 'Racer', required: true },
  // creatorOf: { type: mongoose.Schema.ObjectId, ref: 'News', required: false }
});

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.pre('validate', function checkPassword(next) {
  if(this.isModified('password') && this._passwordConfirmation !== this.password) this.invalidate('passwordConfirmation', 'does not match');
  next();
});

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
