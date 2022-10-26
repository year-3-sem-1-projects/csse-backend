import { getUsersRepository } from '../repository/user'

export const getUsersService = async () => {
  return await getUsersRepository()
}
