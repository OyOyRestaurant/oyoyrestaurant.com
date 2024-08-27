import { User } from "~~/server/models/user-model";
import { Reservation } from "~~/server/models/reservation-model";
const result = {
  success: {
    success: true,
    status: 'success',
    message: {
      title: "Your reserve has been accepted",
      subtitle: "We look forward to seeing you in our restaurant"
    }
  },
  error: {
    success: false,
    status: 'error',
    message: {
      title: "There was an error",
      subtitle: "We're already dealing with her"
    }
  }
}

export default defineEventHandler( async (event) => {
    const body = await readBody(event)
    console.log('body: ' + JSON.stringify(body))
    const newReservation = new Reservation(body);
    const saving = await newReservation.save();
    console.log('saving ', saving)
    if (saving) {
      return result.success
    } else {
      return result.error
    }
})