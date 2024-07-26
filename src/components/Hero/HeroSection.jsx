import React from 'react';
import { heroBanner } from '../../assets/allAssets';



export default function HeroSection({
  title1,
  title2,
  title3,
  subTitle,
  videoBtnText,
  videoUrl,
  funfactList,
}) {
  return (
    <section
      className="cs_hero cs_style_2 cs_bg_filed"
      style={{
        backgroundImage: `url(${heroBanner})`,
        backgroundPosition: '0% center', // Adjust this value based on the image
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh', // Adjust this value as needed
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container">
        <div className="cs_hero_text">
          <h1 className="cs_hero_title cs_hero_color cs_fs_84">{title1}<br/>{title2}<br/>{title3}</h1>
          <div className="cs_hero_text_in">
            <p className="cs_hero_subtitle cs_hero_color">{subTitle}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="cs_hero_bottom">
          <div className="cs_hero_bottom_left">
            {/* <div className="cs_hero_btn_wrap">
              <VideoModal
                videoUrl={videoUrl}
                videoBtnText={videoBtnText}
                variant="cs_white_color"
              />
            </div> */}
          </div>
          <div className="cs_hero_bottom_right">
            {funfactList?.length > 0 && (
              <div className="cs_hero_funfact text-center">
                {funfactList?.map((item, index) => (
                  <div className="cs_hero_funfact_col" key={index}>
                    <h3 className="cs_hero_color cs_fs_72">{item.number}</h3>
                    <p className="cs_hero_color mb-0">{item.title}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
   
  );
}
