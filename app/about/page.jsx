const AboutPage = () => {
  return (
    <div className="col text-center display-5">
      <p>About</p>
      <p>
        This webpage was created using next and Bootstrap, here we use the new app routing functionality of next, and consume the data of an free api to display the users data in a list group and the user details in another page.
      </p>
      <div className="mt-5">
        <h2>Developed with:</h2>
        <div className="row justify-content-center align-items-center">
          <img style={ { width: '200px'}} className="m-2" src='/next.svg' alt='next logo' />
          <img style={ { height: '80px', width: '80px'}} className=" m-2" src='/bootstrap.svg' alt='bootstrap logo' />
        </div>
      </div>
      
      
    </div>
  )
}

export default AboutPage;