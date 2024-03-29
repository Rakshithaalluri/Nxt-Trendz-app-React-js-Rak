// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <>
          <div className="cart-summary">
            <h1 className="order-total">
              {' '}
              Order Total: <span className="total-amount"> Rs {total} </span>
            </h1>
            <p className="items-count"> {cartList.length} Items in cart </p>
            <button type="button" className="check-out">
              {' '}
              Checkout{' '}
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
