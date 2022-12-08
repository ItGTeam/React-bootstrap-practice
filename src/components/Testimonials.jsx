import './testimonials.css';

const Testimonials = ({ testimonialsData }) => {
    return (
        <div id='Testimonials' className="Testimonials py-5">
            <div class="container-lg">
                <div class="row">
                    <div class="col-sm-12">
                        <div id="myCarousel" className="carousel  slide" data-ride="carousel">
                            <h2 className='text-white'>Customer <b>Testimonials</b></h2>
                            <ol className="carousel-indicators ">
                                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1" className=""></li>
                                <li data-target="#myCarousel" data-slide-to="2" className=""></li>
                            </ol>

                            <div className="carousel-inner">

                                {testimonialsData.map(t => (

                                    < div class={`carousel-item ${t.active}`} >
                                        <div class="row  mx-5 px-5 text-center Introduction  ">
                                            <div style={{ backdropFilter: "blur(7px)" }} className="row rounded-3 ">
                                                <div class="testimonial">
                                                    <p>{t.testimonials}</p>
                                                </div>
                                                <div class="media float-start">
                                                    <img src={require("../assets/14.jpg")} class="mr-3" alt="" />
                                                    <div class="overview mx-5  px-5 ">
                                                        <div class="name"><b>{t.name}</b></div>
                                                        <div class="details">{t.job}</div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))

                                }

                            </div>

                            <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
                                <i className="fa fa-chevron-left"></i>
                            </a>
                            <a className="carousel-control-next" href="#myCarousel" data-slide="next">
                                <i className="fa fa-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Testimonials;
