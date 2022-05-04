import PropTypes from 'prop-types';

function GridItem({ title, url }) {


  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

GridItem.prototype = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired 
}

export default GridItem

