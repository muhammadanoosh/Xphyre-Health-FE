import React from 'react';
// import Rating from '../Rating';

export default function TestimonialStyle2({
  text,
  ratingNumber,
  avatarImgUrl,
  avatarName,
  avatarDesignation,
}) {
  return (
    <div className="cs_testimonial cs_style_2">
      <div className="cs_testimonial_text cs_radius_25 cs_white_bg cs_fs_24" style={{height:"28rem"}}>
        <div className="cs_quote_icon">
          <svg
            width={50}
            height={38}
            viewBox="0 0 50 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.5536 13.8357C39.4529 12.689 39.5299 9.57182 42.365 5.23719C42.5794 4.9101 42.5405 4.46895 42.2742 4.18851C41.1184 2.97105 40.4027 2.20281 39.9008 1.66522C39.2408 0.956385 38.9395 0.633403 38.4984 0.212251C38.204 -0.0665425 37.7584 -0.0713971 37.4609 0.201883C32.5193 4.73095 27.0307 14.0896 27.8249 25.5554C28.2903 32.2879 32.9527 37.1746 38.9105 37.1746C45.0246 37.1746 49.999 31.9359 49.999 25.4959C49.999 19.2832 45.3695 14.1884 39.5536 13.8357ZM38.9105 35.5288C33.7941 35.5288 29.788 31.2842 29.3829 25.4364C28.4895 12.5411 35.7671 4.1644 37.9659 1.94648C38.1803 2.16907 38.4252 2.43099 38.7861 2.81833C39.2209 3.28441 39.8161 3.92247 40.7163 4.87397C37.2747 10.459 37.924 14.4384 38.2085 15.0089C38.3436 15.2798 38.6205 15.4622 38.9105 15.4622C44.1633 15.4622 48.4365 19.9631 48.4365 25.4959C48.4365 31.0279 44.1633 35.5288 38.9105 35.5288Z"
              fill="#307BC4"
            />
            <path
              d="M11.8071 13.8355C11.7056 12.692 11.7803 9.57721 14.6185 5.23699C14.8321 4.90989 14.7939 4.46874 14.5277 4.1883C13.3741 2.97323 12.6592 2.20581 12.158 1.66822C11.4958 0.957825 11.1936 0.633938 10.7527 0.212046C10.4582 -0.0667479 10.0126 -0.0707801 9.7151 0.200854C4.77354 4.72993 -0.715834 14.087 0.0768219 25.5552C0.543775 32.2868 5.20682 37.1744 11.1646 37.1744C17.2789 37.1744 22.2532 31.9357 22.2532 25.4957C22.2532 19.2823 17.6237 14.1867 11.8071 13.8355ZM11.1646 35.5286C6.04917 35.5286 2.04065 31.284 1.63479 25.4354C0.743697 12.5369 8.02135 4.16337 10.2201 1.94627C10.4353 2.16886 10.681 2.43243 11.0426 2.82059C11.4767 3.28667 12.071 3.92391 12.9698 4.87377C9.52815 10.4596 10.1774 14.4381 10.462 15.0079C10.5971 15.2787 10.8747 15.462 11.1646 15.462C16.4175 15.462 20.6907 19.9629 20.6907 25.4957C20.6907 31.0277 16.4175 35.5286 11.1646 35.5286Z"
              fill="#307BC4"
            />
          </svg>
        </div>
        <p style={{textAlign:'justify'}}>{text}</p>
        {/* <Rating ratingNumber={ratingNumber} /> */}
      </div>
      <div className="cs_testimonial_meta">
        {/* <div className="cs_testimonial_avatar">
          <img src={avatarImgUrl} alt="Avatar" />
        </div> */}
        <div className="cs_testimonial_meta_right">
          <h3 className="cs_fs_24 cs_semibold m-0 text-uppercase">
            {avatarName}
          </h3>
          <p className="cs_heading_color m-0">{avatarDesignation}</p>
        </div>
      </div>
    </div>
  );
}
