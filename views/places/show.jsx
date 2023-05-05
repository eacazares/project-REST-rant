const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            <img src = {data.place.pic}/>
            
            <div>
            <h3>Description</h3>
            <h4>{data.place.city}</h4>
            <h4>{data.place.state}</h4>
            <h4>{data.place.cuisines}</h4>
            </div>

            <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                Edit
            </a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                <button type="submit" className='btn btn-danger'>
                    Delete
                </button>
            </form>

            <div>
                <h3>Rating</h3>
                <p>Not Rated</p>
            </div>

            <div>
                <h3>Comments</h3>
                <p>No comments yet</p>
            </div>
          </main>
        </Def>
    )
}

module.exports = show
