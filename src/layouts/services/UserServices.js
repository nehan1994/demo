import { AxiosResponse } from "axios";

class UserService {
  static createUser(user) {
    return API.post(config.api.users.create, user);
  } //createUser

  static updateUser(id, user) {
    return API.put(config.api.users.update + id, user);
  } //updateUser

  static deleteUser(id) {
    return API.delete(config.api.users.delete);
  } //deleteUser

  static fetchOneUSser(id) {
    return API.get(config.api.users.getOne + id);
  } //fetchOneUSser

  static fetchAllUSser() {
    return API.get(config.api.users.getAll);
  } //fetchOneUSser
}

export default UserService;
