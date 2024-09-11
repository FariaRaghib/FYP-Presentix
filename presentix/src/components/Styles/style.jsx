import heroBackground from '../../assets/Images/hero_background.jpg';


const herosection = {
  position: 'relative',
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 128, 0)), url(${heroBackground})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  zIndex: '1',
};


const textWrapperStyle = {
    display: 'inline-block',
    whiteSpace: 'nowrap', // Prevent the text from wrapping
    animation: 'textWriteIn 2s steps(20, end) forwards', // Adjust duration and steps as needed
  };
  const btnStyle = {
    color: 'white',
    backgroundColor: 'blue',
    padding: '10px 25px',
    borderRadius: '25px',
    marginTop : '10px'
  };
  const aboutIcon={
    width : '150px',
    heighht : '150px',
    margin : '0 auto'

  }

  const aboutMainTitle = {
    fontSize : '30px',
    fontWeight : '700',
    textAlign : 'center',
    paddingTop : '20px',
  }
  const aboutMainDescription = {
    fontSize : '18px',
    textAlign : 'center',
    paddingTop : '15px',
  }

export const styles = {
    herosection : herosection,
    textWrapperStyle: textWrapperStyle,
    btnStyle : btnStyle,
    aboutIcon : aboutIcon,
    aboutMainTitle : aboutMainTitle,
    aboutMainDescription : aboutMainDescription,
      
}