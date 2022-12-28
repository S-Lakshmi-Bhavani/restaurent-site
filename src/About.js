
import c1 from './pro/chef1.jpg'
import c2 from './pro/chef2.jpg'
import c3 from './pro/chef3.jpg'
// import './About.css' 
import v1 from './pro/videores.mp4'
import serving from './pro/serving.webp'

function App() {
    return (
        <>
            <h1 className='text-center'>About us</h1>
            
            <div className='container' style={{ backgroundColor: 'lightgrey' }}>
            <h2 className='text-center text-light bg-danger'>Our Proffesional Chefs</h2>
                <div className="row text-center">
                    <div className=" col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="card card1" >
                            <img src={c1} alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Sarah Jhonson</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className=" col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="card card1" >
                            <img src={c2} className='img-fluid' style={{width:'100%'}} alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Walter White</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className=" col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="card card1" >
                            <img src={c3} alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">William Anderson</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row border border-dark mb-3'>
                    <div className=' col-12  col-sm-12 col-md-12 col-sm-12 col-xl-6 col-xxl-6 p-3'>
                        <video width='100%' autoPlay='autoPlay' loop='loop' Center='center' controls>
                            <source src={v1} type="video/mp4" />
                        </video>
                        {/* <iframe src='https://www.youtube.com/watch?v=xNRJwmlRBNU'  title='videovideo'></iframe> */}

                    </div>
                    <div className=' col-12  col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 p-3'>
                        <h1 className='text-light text-center bg-danger'>Our Resturent</h1>
                        <p className='fw-semibold'>Some quick example text to build on the card title and make up the bulk of the card's content.
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p className='fw-semibold'>Some quick example text to build on the card title and make up the bulk of the card's content.
                            Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>


                <div className='row border border-dark mb-3'>
                <div className=' col-12  col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 p-3'>
                        <h1 className='text-light text-center bg-danger'>Good Serving</h1>
                        <p className='fw-semibold'>Some quick example text to build on the card title and make up the bulk of the card's content.
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p className='fw-semibold'>Some quick example text to build on the card title and make up the bulk of the card's content.
                            Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div className=' col-12  col-sm-12 col-md-12 col-sm-12 col-xl-6 col-xxl-6 p-3'>
                     <img src={serving}  className='img-fluid' alt="######" />                         

                    </div>
                   
                </div>
            </div>
        </>
    )
}
export default App