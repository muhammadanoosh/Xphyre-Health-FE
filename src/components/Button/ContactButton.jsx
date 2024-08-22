import React from 'react'

const ContactButton = ({buttonName}) => {
    return (
        <>
            <a href="/ContactUs">
                <button className="cs_btn cs_style_1" type="submit" style={{ position: "relative"}}>
                    <span>{buttonName}</span>
                    <i>
                        <img src="/images/icons/arrow_white.svg" alt="Icon" />
                        <img src="/images/icons/arrow_white.svg" alt="Icon" />
                    </i>
                </button>
            </a>
        </>
    )
}

export default ContactButton