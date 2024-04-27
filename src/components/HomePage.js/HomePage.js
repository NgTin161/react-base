import videoHomePage from '../../assets/video-homepage.mp4';
const HomePage = (props) => {
  return (
    <div className='homepage-container'>
      <video autoPlay loop muted>
        <source src={videoHomePage} type="video/mp4" />
      </video>
      <div className='homepage-content'>
        <div className='title-header'>No pain no gain</div>
        <div className='title-header-body'>Belive myself, and the success will be come for us</div>
        <div className='title-header-btn'><button>Get's started. It's free</button></div>
      </div>
    </div>
  )
}

export default HomePage;