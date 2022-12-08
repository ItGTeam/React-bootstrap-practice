
const AboutMe = ({ aboutMeData }) => {

    return (
        <div id="About" className='bg-dark   AboutMe'>
            <div className='container'>
                <div className='row align-items-center p-5 container'>
                    <img src={require(`../assets/prof.jpg`)} style={{ width: '15%', minWidth: '15%' }} className="rounded-circle col-lg-4  m-lg-5  img-fluid float-left" alt="" />
                    <div className='col-lg-8 '>
                        <h2 className='float-start text-white'>About Me</h2>
                        <br />
                        <p style={{ textAlign: "justify" }} className='float-start '>{aboutMeData.description}</p>
                        <div className='row'>
                            <div className='row col-lg-6'>
                                <span className='col-1'><i class="fa-solid fa-location-crosshairs"></i></span>
                                <h6 className='col-lg-4'>Location:</h6>
                                <p className='col-lg-4'>{aboutMeData.Location}</p>
                            </div>
                            <div className='row col-lg-6'>
                                <span className='col-1'><i class="fa-solid fa-flag"></i></span>
                                <h6 className='col-lg-4'>Nationality:</h6>
                                <p className='col-lg-4'>{aboutMeData.Nationality}</p>
                            </div>
                            <div className='row col-lg-6'>
                                <span className='col-1'><i class="fa-solid fa-school"></i></span>
                                <h6 className='col-lg-4'>Study:</h6>
                                <p className='col-lg-4'>{aboutMeData.Study}</p>
                            </div>

                            <div className='row col-lg-6'>
                                <span className='col-1'><i class="fa-solid fa-child"></i></span>
                                <h6 className='col-lg-4'>Age:</h6>
                                <p className='col-lg-4'>{aboutMeData.Age}</p>
                            </div>
                            <div className='row col-lg-6'>
                                <span className='col-1'><i class="fa-solid fa-thumbs-up"></i></span>
                                <h6 className='col-lg-4'>Interests:</h6>
                                <p className='col-lg-4'>{aboutMeData.Interests}</p>
                            </div>
                            <div className='row col-lg-6'>
                                <span className='col-1'><i class="fas fa-users"></i></span>
                                <h6 className='col-lg-4'>Employment:</h6>
                                <p className='col-lg-4'>{aboutMeData.Employment}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;