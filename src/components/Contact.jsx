
const Contact = ({ contactData }) => {
    return (
        <div id='Contact' className="bg-secondary">
            <div className='container  py-5'>
                <div className="row px-3">
                    <span className="col-lg-1 mt-1 float-start "><i class="fa-solid  fa-3x fa-envelope"></i></span>
                    <h4 className="col-lg-3 mt-3 float-start">Get in touch.</h4>
                </div>
                <div className="row mt-2 mx-3">
                    <div className="col-lg-6 row">
                        <input type="text" className="rounded-2 border border-danger my-2" name="" id="" />
                        <input type="email" className="rounded-2 border border-danger my-2" name="" id="" />
                        <textarea className="form-control rounded-2 border border-danger  my-2" aria-label="With textarea"></textarea>
                    </div>
                    <div style={{ textAlign: "justify" }} className="col-lg-6">
                        <p >{contactData.discripton}</p>

                        <div className="row">
                            <i class="fa-solid col-1 fa-envelope"></i> <p className="col-3">{contactData.email}</p>
                        </div>
                        <div className="row">
                            <i class="fa-brands col-1 fa-instagram"></i> <p className="col-3">{contactData.instaId}</p>
                        </div>
                        <div className="row">
                            <i class="fa-brands col-1 fa-github"></i>  <p className="col-3">{contactData.githubId}</p>
                        </div>
                    </div>

                </div>
                <button className="rounded-2 btn btn-outline-danger  mx-3 float-start">Send Massage</button>
            </div>
        </div>
    )
}

export default Contact;