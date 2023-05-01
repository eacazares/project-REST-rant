const React = require('react')
const Def = require ('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src = "/images/flowers.jpg" alt = "flowers"/>
                    <div> Photo by <a href="https://unsplash.com/es/@ryunosuke_kikuno?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ryunosuke Kikuno</a> on <a href="https://unsplash.com/images/nature/flower?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
  
                </div>
            </main>
        </Def>
    )
}

module.exports = error404