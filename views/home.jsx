const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>Home</h1>
                <div>
                    <img src = "/images/pasta.jpg" alt = "Spaghetti"/>
                    <div>
                        Photo by <a href="https://unsplash.com/ja/@mggbox?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mgg Vitchakorn</a> on <a href="https://unsplash.com/images/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <a href = '/places'>
                    <button className = 'btn btn-primary'>Places Page</button>
                </a>
            </main>
        </Def>

    )
}

module.exports = home 