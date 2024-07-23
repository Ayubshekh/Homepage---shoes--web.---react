

const hero=()=>{
    return(
        <main className="hero">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary">Category</button>
            </div>

            <div className="shopping">
                <p>Also Available On</p>

                <div className="hero-brandicon">
                    <img src="/image/flipkart.png" alt="flipkart" />
                    <img src="/image/amazon.png" alt="amazon" />
                </div>
            </div>
        </div>
        <div className="hero-img">
            <img  src="/image/shoe_image.png" alt="" />
        </div>
        </main>
       
    )
}

export default hero