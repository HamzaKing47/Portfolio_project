import bcrypt from "bcrypt";

const hashPassword = async (password) => {
  try {
    return await bcrypt.hash(password, 10); 
  } catch (error) {
    console.log("hashPassword error: " + error.message);
  }
};


const comparePassword = (password, hashPassword) => {
  try {
    return bcrypt.compare(password, hashPassword);
  } catch (error) {
    console.log("comparePassword error: " + error.message);
  }
};

export { hashPassword, comparePassword };
