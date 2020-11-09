import React from 'react'

const Banner = () => {
    return (
        <section className="container__banner">

                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <p className="txt-white-t">That’s not soon enough!</p>
                                <p className="txt-yellow-t">There’s only one <br/>course of action</p>
                                <p className="txt-white-b">I don't know what you did, Fry,<br/> but once again, you screwed up!</p>
                                <p className="txt-yellow-b">But you may have to!</p>
                            </div>

                            <div className="col-12 col-lg-6 video">
                                <img src="./images/videos/video.png" alt="Vimeo Hero" />
                            </div>
                        </div>

                        <div className="row btn">
                            <div className="col-sm">
                                <button>CLICK HERE!</button>
                            </div>
                        </div>
                    </div>
        </section>
    )
}
export default Banner;