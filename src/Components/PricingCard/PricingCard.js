import React from 'react';
import styled from 'styled-components';
import cardImg from "../../images/tropical-spa-resort-concept-plumeria-hot-stones-to-N-1.jpg"
import cardLogo from "../../images/favlogo.png"






const PricingCard = ({height}) => {


const PricingCardDiv = styled.div`
    background: linear-gradient(131deg, white, pink);
    padding: 10px;
    box-sizing: border-box;
    height: ${(props) => props.height || "200px"};
    overflow: hidden;
    border: 2px double pink;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
        transform: translateY(-20px);
        box-shadow: 10px 30px 50px -20px pink;
    }
    .desc {
        h6,
        p {
            font-size: 12px;
        }
    }
    .card-logo {
        img {
            width: 80px;
        }
    }

    .img {
        img {
            height: 220px;
            object-fit: cover;
            transform: rotate(45deg) translateY(-40px);
            border-radius: 80px;
            width: 100%;
        }
    }
`;




    return (
        <PricingCardDiv height={height} className="">
            <div className="row align-items-center">
                <div className="col-md-6 desc ps-5">
                    <div className="card-logo mb-3"><img src={cardLogo} alt="" className=""/></div>

                    <h6>Lorem, ipsum.</h6>
                    <p className="text-dark text-start">
                        Pricing: <span className="color-theme">$405</span>
                    </p>
                </div>
                <div className="col-md-6 img">
                    <img className="img-fluid" src={cardImg} alt="" />
                </div>
            </div>
        </PricingCardDiv>
    );
};

export default PricingCard;