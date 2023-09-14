// Write your code here.
import './index.css'

const CardItem = props => {
  const {userDetails} = props
  const {title, description, imgUrl, className} = userDetails
  return (
    <li className={`${className} Card-background-container`}>
      <div>
        <h3 className="heading"> {title}</h3>
        <p>{description}</p>
      </div>
      <div className="card-image">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
