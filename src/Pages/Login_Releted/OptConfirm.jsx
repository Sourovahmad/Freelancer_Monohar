import React from "react";
import './new.css';

const OptConfirm = () => {
    return (
        <div id="sign-in">
            <section class="third-page">
                <div class="sign-in-box">
                    <div class="sign-in">
                        <h4>OTP varification</h4>
                        <p>Enter the otp You have received</p>
                        <div class="otp-inputs">
                            <input type="number" />
                            <input type="number" />
                            <input type="number" />
                            <input type="number" />
                        </div>

                        <div class="box-footer">
                            <a href="">Resend OTP &#62; </a>
                            <div class="btn">
                                <a href="">Create an account</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OptConfirm;
