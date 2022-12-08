import ProgressBar from 'react-bootstrap/ProgressBar';

const Resume = ({ resumeData, skillsBackendDevelopment, skillsSpokenLanguages, skillsFrontendDevelopment }) => {

    return (
        <div id='Resume' className=' bg-white '>

            <div className='container text-dark py-5'>
                <div className="row mt-5">
                    <h3 className="col-lg-2">EDUCATION</h3>
                    <div className="col-lg-10 px-5 py-2 ">
                        <h4 className='row'>{resumeData.educationTitle}</h4>
                        <p className="row">{resumeData.educationPlace}</p>
                        <p className="row fw-lighter">{resumeData.educationDate}</p>
                        <p className="row fw-lighter">{resumeData.educationDiscription}</p>

                    </div>
                </div>
                <hr />
                <div className="row">
                    <h3 className="col-lg-2">WORK</h3>
                    <div className="col-lg-10 px-5 py-2 ">
                        <h4 className='row'>{resumeData.workTitle}</h4>
                        <p className="row">{resumeData.workPlace}</p>
                        <p className="row fw-lighter">{resumeData.workDate}</p>
                        <p className="row fw-lighter">{resumeData.workDiscription}</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <h3 className="col-lg-2">SKILLS</h3>
                    <div className="col-lg-10">
                        <h6 className='mt-3'>Here you can show a snapshot of your skills to show off to employers</h6>

                        <div className="row mt-3">
                            <div className="col-lg-6 justify-content-center">
                                <h5>Spoken languages</h5>
                                < div className='px-2' >
                                    <p className='float-start col-lg-3  mx-auto'>Persian</p>
                                    <ProgressBar className='col-lg-9  rounded-3' variant="danger" now={skillsSpokenLanguages.Persian} />
                                </div>
                                <br />
                                <div className='px-2'>
                                    <p className='float-start col-lg-3  mx-auto'>English</p>
                                    <ProgressBar className='col-lg-9  rounded-3' variant="danger" now={skillsSpokenLanguages.English} />
                                    <br />
                                </div>
                                <div className='px-2'>
                                    <p className='float-start col-lg-3  mx-auto'>Arabic</p>
                                    <ProgressBar className='col-lg-9  rounded-3' variant="danger" now={skillsSpokenLanguages.Arabic} />
                                    <br />
                                </div>
                            </div>
                            <div className="col-lg-6 justify-content-center">
                                <h5>Frontend development</h5>
                                <div className='px-2'>
                                    <p className='float-start col-lg-3  mx-auto'>Bootstrap</p>
                                    <ProgressBar className='col-lg-9  rounded-3' variant="danger" now={skillsFrontendDevelopment.bootstrap} />
                                    <br />
                                </div>
                                <div className='px-2'>
                                    <p className='float-start col-lg-3  mx-auto'>JavaScript</p>
                                    <ProgressBar className='col-lg-9  rounded-3' variant="danger" now={skillsFrontendDevelopment.JavaScript} />
                                    <br />
                                </div>
                                <div className='px-2'>
                                    <p className='float-start col-lg-3  mx-auto'>React</p>
                                    <ProgressBar className='col-lg-9  rounded-3' variant="danger" now={skillsFrontendDevelopment.React} />
                                    <br />
                                </div>
                            </div>
                            <div className="col-lg-6 justify-content-center">
                                <h5>Backend development</h5>
                                <div className='px-2'>
                                    <p className='float-start col-lg-3  mx-auto'>Asp.net</p>
                                    <ProgressBar className='col-lg-9  rounded-3' variant="danger" now={skillsBackendDevelopment.AspNetCore} />
                                    <br />
                                </div>
                                <div className='px-2'>
                                    <p className='float-start col-lg-3  mx-auto'>Mvc</p>
                                    <ProgressBar className='col-lg-9  rounded-3' variant="danger" now={skillsBackendDevelopment.Mvc} />
                                    <br />
                                </div>
                                <div className='px-2'>
                                    <p className='float-start col-lg-3  mx-auto'>Node Js</p>
                                    <ProgressBar className='col-lg-9  rounded-3' variant="danger" now={skillsBackendDevelopment.NodeJs} />
                                    <br />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Resume;