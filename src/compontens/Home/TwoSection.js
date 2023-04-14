import React from 'react'

const TwoSection = () => {
    return (
        <div className='container'>
            <div className='row align-items-center '>
                <div className='col-6 p-5'>
                    <div className='p-5'>
                        <img src={require('../../asstes/img/two-section/mac.jpg')} alt="" />
                    </div>
                </div>
                <div className='col-6 '>
                    <div className='p-5 seo-section'>
                        <h1>SEO Friendly</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta voluptatibus culpa eligendi consequatur, aspernatur delectus assumenda! Commodi neque placeat consequuntur, quasi corrupti impedit? Enim deserunt quam ab reprehenderit possimus iure?</p>
                        <button>Reade more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TwoSection
