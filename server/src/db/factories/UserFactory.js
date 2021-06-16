import faker from "faker"

class UserFactory {
  static create({ firstName, lastName, email }) {
    return {
      firstName: firstName || faker.name.firstName(),
      lastName: lastName || faker.name.lastName(),
      email: email || faker.internet.email(),
    }
  }
}

export default UserFactory
