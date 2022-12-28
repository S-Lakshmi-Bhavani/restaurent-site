import bdy1 from './pro/bdyy1.webp'
import bdy2 from './pro/bdy2.jpg'
import bdy3 from './pro/bdy3.jpg'
// import p1 from './pro/party1.jpg'
// import p2 from './pro/party2.jpg'
import p3 from './pro/party3.jpg'
function Events() {
    return (
        <>
            <div className="container bg-light">
                <div className="row ">
                    <div className="col-md-12">
                        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="10000">
                                    <img src={bdy3} className="d-block w-100  h-50" alt="..." />
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src={bdy2} className="d-block w-100 h-50" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={bdy1} className="d-block w-100 h-50" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='row'>
                    <div className='col-md-12'>
                        <h1 className='fs-2 fw-bold text-center text-center'>Birthday parties</h1>
                        <p>parents celebrate my birthday with great joy and excitement. They invite all my friends and relatives on
                            my special day. My mother bakes a delicious cake and prepares mouth-watering dishes on my birthday.
                            My father decorates the whole house with colourful balloons and streamers.</p>
                        <p>parents celebrate my birthday with great joy and excitement. They invite all my friends and relatives on
                            my special day. My mother bakes a delicious cake and prepares mouth-watering dishes on my birthday.
                            My father decorates the whole house with colourful balloons and streamers.</p>
                    </div>
                </div>
                <hr />
                <div className='row'>
                    <div className='col-md-6'>
                        <h1 className='fs-2 fw-bold text-center text-center'> Family Gatherins</h1>
                        <p>parents celebrate my birthday with great joy and excitement. They invite all my friends and relatives on
                            my special day. My mother bakes a delicious cake and prepares mouth-watering dishes on my birthday.
                            My father decorates the whole house with colourful balloons and streamers.</p>
                        <p>parents celebrate my birthday with great joy and excitement. They invite all my friends and relatives on
                            my special day. My mother bakes a delicious cake and prepares mouth-watering dishes on my birthday.
                            My father decorates the whole house with colourful balloons and streamers.</p>
                    </div>
                    <div className='col-md-6 '>
                        <img src={bdy2} className="d-block w-100 " alt="..." />
                    </div>
                </div>
                <hr />
                <div className='row'>
                    <div className=" col-12 col-md-6 ">
                        <img src={p3} className="d-block w-100 h-80 " alt="..." />
                    </div>
                    <div className=' col-12 col-md-6'>
                        <h1 className='fs-2 fw-bold text-center text-'>Team Lunch</h1>
                        <p>parents celebrate my birthday with great joy and excitement. They invite all my friends and relatives on
                            my special day. My mother bakes a delicious cake and prepares mouth-watering dishes on my birthday.
                            My father decorates the whole house with colourful balloons and streamers.</p>
                        <p>parents celebrate my birthday with great joy and excitement. They invite all my friends and relatives on
                            my special day. My mother bakes a delicious cake and prepares mouth-watering dishes on my birthday.
                            My father decorates the whole house with colourful balloons and streamers.</p>
                    </div>
                </div> 
            </div>
        </>
    )
}
export default Events
