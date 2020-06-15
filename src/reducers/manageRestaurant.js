
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants( 
  state = {restaurants: [], reviews: []}, action
) {
  switch(action.type) {

    case 'ADD_RESTAURANT':
      const newRestaurant = {
        ...action.restaurant,
        id: cuid()
      }
      return {
        ...state,
        restaurants: state.restaurants.concat(newRestaurant)
      }

    case 'DELETE_RESTAURANT':
      console.log(action)
      return {
        ...state,
        restaurants: state.restaurants.filter(r => r.id !== action.id)
      }

    case 'ADD_REVIEW':
      const newReview = {
        ...action.review,
        id: cuid()
      }
      return {
        ...state,
        reviews: state.reviews.concat(newReview)
      }

    case 'DELETE_REVIEW':
      return {
        ...state,
        reviews: state.reviews.filter(r => r.id !== action.id)
      }

    default:
      return state
  }
}
