import { BadRequest } from "@bcwdev/auth0provider/lib/Errors";

class CarsService {

  async getAll() {
    const foundCars = await dbContext.Cars.find().populate('creator', 'name picture')
    return foundCars
  }

  async getById(carId) {

    const foundCar = await dbContext.cars.finById(carId).populate('creator', 'name picture')
    if (!foundCar) {
      throw new BadRequest('unable to find car')
    }
    return foundCar
  }
  async create(newCar) {
    const createdCar = await dbContext.Cars.create(newCar)
    return createdCar
  }

}

export const carsService = new CarsService();