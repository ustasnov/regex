export default class Validator {
  constructor(userName) {
    this.userName = userName;
  }

  validateUsername() {
    return /^[^\d_-][\w-]*[^\d_-]$/.test(this.userName) && !/[\d]{4,}/.test(this.userName);
  }
}
