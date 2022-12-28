import { useState } from 'react'
import card from './card.json'
// import '../node_modules/bootstrap/dist/css/bootstrap.css'
function Menu() {
  var [search, setSearch] = useState('')
  return (
    <>
      <div className='container-fluid'>
        <div className='row text-center'>
          <div className=' col-md-4'></div>
          <div className='col-md-4 p-3'>
            <label ><b>search here.....</b></label>
            <input className='form-control border border-dark ' type='text' placeholeder='searchHere' 
            value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
          <div className='col-md-4'></div>
        </div>
        <div className='container'>
          <div className='row'>
            {card.filter(record => record.name.toLowerCase().includes(search.toLowerCase())).map((record => {
              return (
                <>
                  <div className=' col-12 col-md-4 p-3'>
                    <div className="card  border border-dark">
                      <img src={record.pic} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{record.name}</h5>
                        <p className="card-text">{record.description}</p>
                        <h3 className='fw-bold'>{record.price}</h3>
                      </div>
                    </div>
                  </div>
                </>
              )
            }))}
          </div>
        </div>
      </div>
    </>
  )
}
export default Menu
