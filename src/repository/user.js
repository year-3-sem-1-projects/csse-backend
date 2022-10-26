import User from '../models/user'

export const getUsersRepository = async () => {
  try {
    return await User.find()
  } catch (error) {
    return { status: false, message: error.message }
  }
}
