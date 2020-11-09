import React from 'react'

const Cards = () => {
    return (
        <section className="container__cards">
            <div className="container ">
                <div className="row">
                    <div className="col-12 col-md-4 text-center ccard">
                        <img src="./images/icons/icon-one-op.svg" alt="Open English logo" />
                        <h3>Headline for icon number one</h3>
                        <p>Text below icon one, text below <b>icon one</b>, text below</p>
                    </div>

                    <div className="col-12 col-md-4 central text-center ccard">
                        <img src="./images/icons/icon-three-op.svg" alt="Open English logo" />
                        <h3>Headline for icon number two</h3>
                        <p>Text below icon two, text below <b>icon two</b></p>
                    </div>

                    <div className="col-12 col-md-4 text-center ccard">
                        <img src="./images/icons/icon-two-op.svg" alt="Open English logo" />
                        <h3>Headline for icon number threeone</h3>
                        <p>Text below third icon, text below <b>third icon</b></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Cards;
