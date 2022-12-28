import heropic from './pro/hero.png'
import c1 from './pro/c11.jpg'
import c2 from './pro/c2.jpg'
import c3 from './pro/c33.jpg'
import c4 from './pro/c4.jpg'
import res1 from './pro/restaurante2.jpg'
// import res2 from './pro/delicious2.png'
import res3 from './pro/restaurant3.png'
import gif from './pro/food3.gif'
import signup from './Signup'

function Home() {
    return (
        <>
            <div className="container-fluid navbg" >
                <div className="row p-5 text-center ">
                    {/* <div className='col-md-12 '> */}
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 p-4">
                        <span className="description ">ENJOY YOUR HEALTHY <br /> DELICIOUS FOOD</span>
                        <p className='mainpara fs-4'>
                            There are 12 template columns available per row, allowing you to create different combinations
                            of elements that span any number of columns. Column classNamees indicate the number of template
                            columns to span.
                        </p>
                    </div>
                    <div className="col-10 col-md-12 col-lg-12 col-xl-6 col-xxl-6  text-center pt-5 ">
                        <img className='img-fluid' id="imgdelicious" src={heropic} alt="####" />
                    </div>
                    {/* </div>  */}
                </div>

                <div className='row p-3'>
                    <h1 className='text-center text-dark' style={{ fontFamily: 'Dancing Script, cursive' }}> &#129316; FOOD ITEMS TYPES  ....DELICIOUS  &#129316;</h1>
                    <div className='col-12 col-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3 p-3 '>
                        <div className="card  border border-primary position-relation overflow-hidden" style={{
                            backgroundImage: `url(${c1})`, backgroundSize: 'cover', width: '100%', height: '350px'
                        }}>
                            <div className="card-body chover">
                                <h1 className='text-center text-light border border-dark border-3 rounded-pill cardbtn fs-3'>Breakfast....</h1>
                                <p className='fs-5'><b>We are providing good quality and healthy of breakfast  starting from  Delicious...</b></p>
                                <h2><b className='fs-3  pl-5'>  &#128523; $50</b></h2>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3 p-3'>
                        <div className="card  border border-primary position-relation overflow-hidden" style={{
                            backgroundImage: `url(${c2})`, backgroundSize: 'cover', width: '100%', height: '350px'
                        }}>
                            <div className="card-body chover">
                                <h1 className='text-center text-light border border-dark border-3 rounded-pill cardbtn fs-3'>Lunch....</h1>
                                <p className='fs-5'><b>We are providing good quality and healthy of breakfast  starting from  Delicious...</b></p>
                                <h2><b className='fs-3  pl-5'>  &#128523; $100</b></h2>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3 p-3'>
                        <div className="card border border-primary position-relation overflow-hidden" style={{
                            backgroundImage: `url(${c3})`, backgroundSize: 'cover', width: '100%', height: '350px'
                        }}>
                            <div className="card-body chover">
                                {/* <img src={c3} className="card-img-top" alt="..." /> */}
                                <h1 className='text-center text-light border border-dark border-3 rounded-pill cardbtn fs-3'>Snaks....</h1>
                                <p className='fs-5'><b>We are providing good quality and healthy of breakfast  starting from  Delicious...</b></p>
                                <h2><b className='fs-3  pl-5'>  &#128523; $40</b></h2>
                            </div>
                        </div>     
                    </div>
                    <div className='col-12 col-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3 p-3'>
                        <div className="card border border-primary position-relation overflow-hidden" style={{
                            backgroundImage: `url(${c4})`, backgroundSize: 'cover', width: '100%', height: '350px'
                        }}>
                            {/* <img src={heropic} className="card-img-top" alt="..." /> */}
                            <div className="card-body chover">
                                <h1 className='text-center text-light border border-dark border-3 rounded-pill cardbtn fs-3'>Dinner....</h1>
                                <p className='fs-5'><b>We are providing good quality and healthy of breakfast  starting from  Delicious...</b></p>
                                <h2><b className='fs-3  pl-5'>  &#128523; $100</b></h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* row closed */}
                <div className='row'>
                    <div className='col-12 col-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3 p-3'>
                        <div className="card  border border-primary position-relation overflow-hidden" style={{
                            backgroundImage: `url(${c1})`, backgroundSize: 'cover', width: '100%', height: '350px'
                        }}>
                            <div className="card-body chover">
                                <h1 className='text-center text-light border border-dark border-3 rounded-pill cardbtn fs-3'>Breakfast....</h1>
                                <p className='fs-5'><b>We are providing good quality and healthy of breakfast  starting from  Delicious...</b></p>
                                <h2><b className='fs-3  pl-5'>  &#128523; $50</b></h2>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3 p-3'>
                        <div className="card  border border-primary position-relation overflow-hidden" style={{
                            backgroundImage: `url(${c2})`, backgroundSize: 'cover', width: '100%', height: '350px'
                        }}>
                            <div className="card-body chover">
                                <h1 className='text-center text-light border border-dark border-3 rounded-pill cardbtn fs-3'>Lunch....</h1>
                                <p className='fs-5'><b>We are providing good quality and healthy of breakfast  starting from  Delicious...</b></p>
                                <h2><b className='fs-3  pl-5'>  &#128523; $100</b></h2>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3 p-3'>
                        <div className="card border border-primary position-relation overflow-hidden" style={{
                            backgroundImage: `url(${c3})`, backgroundSize: 'cover', width: '100%', height: '350px'
                        }}>
                            <div className="card-body chover">
                                {/* <img src={c3} className="card-img-top" alt="..." /> */}
                                <h1 className='text-center text-light border border-dark border-3 rounded-pill cardbtn fs-3'>Snaks....</h1>
                                <p className='fs-5'><b>We are providing good quality and healthy of breakfast  starting from  Delicious...</b></p>
                                <h2><b className='fs-3  pl-5'>  &#128523; $40</b></h2>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3 p-3'>
                        <div className="card border border-primary position-relation overflow-hidden" style={{
                            backgroundImage: `url(${c4})`, backgroundSize: 'cover', width: '100%', height: '350px'
                        }}>
                            {/* <img src={heropic} className="card-img-top" alt="..." /> */}
                            <div className="card-body chover">
                                <h1 className='text-center text-light border border-dark border-3 rounded-pill cardbtn  fs-3'>Dinner....</h1>
                                <p className='fs-5'><b>We are providing good quality and healthy of breakfast  starting from  Delicious...</b></p>
                                <h2><b className='fs-3  pl-5'>  &#128523; $100</b></h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* row2 careds closed */}
                <hr className="hrstyle" />
                
                <div className='container'>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-3 pb-0'>
                        <h1 style={{ fontFamily: 'Dancing Script, cursive', fontSize: '3em', textAlign: 'center' }}>Restuarent</h1>
                        <p className='parabesideres'>A restaurant is a business that prepares and serves food and  eaten on the premises, but many restaurants also offer take-out and food delivery services. Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines and service models ranging from inexpensive fast-food restaurants and cafeterias to mid-priced family restaurants, to high-priced luxury establishments.
                            A restaurant is a business that prepares and serves food and  eaten on the premises, but many restaurants also offer take-out and food delivery services. Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines and service models ranging from inexpensive fast-food restaurants and cafeterias to mid-priced family restaurants, to high-priced luxury establishments
                        </p>
                    </div>
                </div>
                    <div className='row'>
                        <h1 className='text-center text-dark' style={{ fontFamily: 'Dancing Script, cursive' }}> DELICIOUS RETUARENT &#129316;</h1>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6'>
                            <img src={res1} className='img-fluid' alt="*********" />
                        </div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 text-center'>
                            <p className='parabesideres'>A restaurant is a business that prepares and serves food and  eaten on the premises,
                                but many restaurants also offer take-out and food delivery services. Restaurants vary greatly in
                                appearance and offerings, a wide variety of cuisines and service models ranging from
                                inexpensive fast-food  and cafeterias to mid-priced family restaurants.
                            </p>
                            <img src={gif} alt="###" style={{ borderRadius: '50px 50px 0px 0px', background: 'none', width: '250px' }} />
                        </div>
                    </div>
                    <hr />
                    <div className='row bxshadow'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xl-6 col-xxl-6 p-3'>
                            <p className='parabesideres'>As of 2006, there are approximately 215,000 full-service restaurants in the United1 States, ac are growing almost twice as fast as the population.
                                As of 2006, there are approximately 215,000 full-service restaurants in the United States, ac are growing almost twice as fast as the population.</p>
                            <p className='parabesideres'>As of 2006, there are approximately 215,000 full-service restaurants in the United1 States, ac are growing almost twice as fast as the population.
                                As of 2006, there are approximately 215,000 full-service restaurants in the United States, ac are growing almost twice as fast as the population.</p>
                            <p className='parabesideres'>As of 2006, there are approximately 215,000 full-service restaurants in the United1 States, ac are growing almost twice as fast as the population.
                                As of 2006, there are approximately 215,000 full-service restaurants in the United States, ac are growing almost twice as fast as the population.
                                As of 2006, there are approximately 215,000 full-service restaurants in the United States, ac are growing almost twice as fast as the population As of 2006, there are approximately 215,000 full-service restaurants in the United States, ac are growing almost twice as fast as the population</p>
                        </div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6'>
                            <img src={res3} className='img-fluid pt-5 pb-0' alt="*********" />
                        </div>
                    </div>
                </div>
            </div >
            {/* main container */}



        </>
    )
}
export default Home