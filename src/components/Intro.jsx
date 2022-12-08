const Intro = ({ introData }) => {
    return (
        <div
            style={{
                backgroundImage: `url(${require('../assets/bg-01.jpg')})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                position: 'fixed-top',
                width: '100%',
                height: '100%',
            }} class="header About">
            <div className="row justify-content-center">

                <div class="row height-max col-lg-6 text-center Introduction  align-items-center">
                    <div className='Introduction  rounded' style={{ backdropFilter: "blur(7px)" }}>
                        <h1 className='font-weight-bold text-danger'>{introData.name}</h1>
                        <p className='mt-3 text-justify'>{introData.descriptionPart1}</p>

                        <p className='mt-3 text-justify'>{introData.descriptionPart2}</p>

                        <div className='row '>
                            
                            <div className='row justify-center justify-content-center text-center '>
                                <a href={introData.gitHubLink} className='col-1'>
                                    <i class="fa-brands text-danger fa-lg fa-github"></i>
                                </a>
                                <a href={introData.LinkedInLink} className='col-1'>
                                    <i class="fa-brands text-danger fa-lg fa-linkedin"></i>
                                </a>
                                <a href={introData.InstaLink} className='col-1'>
                                    <i class="fa-brands text-danger fa-lg fa-facebook"></i>
                                </a>
                                <a href={introData.twitterLink} className='col-1'>
                                    <i class="fa-brands text-danger fa-lg fa-twitter"></i>
                                </a>
                                <a href={introData.InstaLink} className='col-1'>
                                    <i class="fa-brands text-danger fa-lg fa-instagram"></i>
                                </a>

                            </div>
                        </div>
                        <a className='btn m-4 btn-outline-danger' href="#Contact">Contact</a>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Intro;