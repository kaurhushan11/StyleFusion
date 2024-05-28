import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = ()=>{
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-nevigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Welcome to STYLE-FUSION, your ultimate destination for fashion enthusiasts! Step into a world of sartorial splendor 
                    and discover a carefully curated collection of clothing that seamlessly blends style, comfort, and sophistication. 
                    Indulge in the latest trends and timeless classics as you browse through our diverse selection of tops, bottoms, 
                    dresses, outerwear, and more. Immerse yourself in a shopping experience that celebrates individuality and empowers 
                    you to express your unique sense of style with confidence.</p>
                <p>Join our fashion-forward community and elevate your 
                    wardrobe to new heights with STYLE-FUSION. Embrace your style evolution and discover the endless possibilities that 
                    await you!</p>
            </div>
        </div>
    )
}

export default DescriptionBox;