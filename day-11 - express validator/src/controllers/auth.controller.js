export async function registerUser(req, res, next) {
  //   try {
  //     throw new Error("encounter an erroe while registering new user.");
  //   } catch (err) {
  //     next(err);
  //   }

  //   const err = new Error("password is too weak.");
  //   err.status = 400;
  //   next(err);

  try {
    throw new Error("password is too weak.");
  } catch (err) {
    err.status = 400;
    next(err);
  }
}
