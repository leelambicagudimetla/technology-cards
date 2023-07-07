// Write your code here.
import './index.css'

const UserDetails = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  return (
    <li className={className}>
      <h1 className="heading">{title}</h1>
      <p className="paragraph">{description}</p>
      <div className="img-div">
        <img className="img-page" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}
export default UserDetails
