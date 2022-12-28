
import bgform from './pro/booktable.png'
import './BookTable.css'
function Book() {
    function bookt() {
        var em = document.getElementById('mail').value
        var fname = document.getElementById('name').value
        var ph = document.getElementById('phno').value
        var Date = document.getElementById('date').value
        var Time = document.getElementById('time').value
        var peo = document.getElementById('people').value
        if (fname == "") {
            alert('name souldnot be empty ')
        } else if (em == '') {
            alert('email souldnot be empty ')
        } else if (ph == '') {
            alert('phone number should not be empt')
        }
        else if (Date == '') {
            alert('date number should not be empt')
        }
        else if (Time == '') {
            alert('Time number should not be empt')
        } else if (peo == '') {
            alert('  enter number of people')
        }else {
            alert('Thank You')
        }
        
    }
    return (
        <>
            <div className="container">
                <div className="row border border-dark">
                    <h1 className='fs-3 fw-bold text-center bg-danger'>Book Table</h1>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                      {/* style={{
                            backgroundImage: `url(${bgform})`, backgroundSize: 'cover'
                        }}
                     */}
                        <img src={bgform} alt={444444444444} className='img-fluid' />

                    </div>
                    <div className="col-12 col-sm-12  col-md-8 col-lg-8 col-xl-8 col-xxl-8 ">
                        <form>
                            <input className='form-control' type='text' id='name' placeholder=" Your Name" required />
                            <br />
                            <input className='form-control' type='email' id='mail' placeholder=" Your Mail Id" required />
                            <br />
                            <input className='form-control' type='moblie' id='phno' placeholder=" Your  Phone Number" required /><br />
                            <input className='form-control' type='date' id='date' placeholder=" Mention Date" required />
                            <br />
                            <input className='form-control' type='time' id='time' placeholder=" Time" required />
                            <br />
                            <input className='form-control' type='number' id='people' placeholder=" # Of People" required /><br />
                            <textarea className='form-control' rows='3' cols='60' placeholder=' Write a message.......' required></textarea>
                            <br />
                            <input className='btn btn-danger m-3' type='sumbit' onClick={bookt} value='Book A Table' />

                            <input className='btn btn-danger m-3' type='reset' value='Clear' />
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Book