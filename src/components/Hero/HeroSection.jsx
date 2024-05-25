import React from 'react';
import VideoModal from '../VideoModal';
import { heroBanner } from '../../assets/allAssets';



export default function HeroSection({
  title,
  subTitle,
  videoBtnText,
  videoUrl,
  funfactList,
  btnText,
  btnUrl,
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
          <h1 className="cs_hero_title cs_hero_color cs_fs_84">{title}</h1>
          <div className="cs_hero_text_in">
            <p className="cs_hero_subtitle cs_hero_color">{subTitle}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="cs_hero_bottom">
          <div className="cs_hero_bottom_left">
            <div className="cs_hero_btn_wrap">
              <VideoModal
                videoUrl={videoUrl}
                videoBtnText={videoBtnText}
                variant="cs_white_color"
              />
            </div>
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
    // <section
    //   className="cs_hero cs_style_2 cs_bg_filed"
    //   style={{ backgroundImage: `url(${bgImg})` }}
    // >
    //   <div className="container">
    //     <div id="myCarousel" className="carousel slide carousel-fade mb-6" data-bs-ride="carousel" data-bs-theme="light">
    //       <div className="carousel-inner">
    //         <div className="carousel-item active" style={{backgroundImage: `url(${bgImg})`}}>
    //           <div className="container">
    //             <div className="carousel-caption text-start">
    //               <div className="row">
    //                 <div className="col-xs-12 col-md-8 col-lg-6">
    //                   <div className="carousel-content">
    //                     <div className="carousel-desc">
    //                       <h2 className="carousel-desc-ttl">Beauty & Skin Center</h2>
    //                       <p className="carousel-desc-txt">Template comes with fully layered
    //                         & easily editable that are well-organized in layers & groups.</p>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="col-xs-12 col-md-4 col-lg-6">
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="carousel-item" style="background-image: url('https://placehold.co/1600x700/31343c/FFF');">
    //           <div className="container">
    //             <div className="carousel-caption text-start">
    //               <div className="row">
    //                 <div className="col-xs-12 col-md-8 col-lg-6">
    //                   <div className="carousel-content">
    //                     <div className="carousel-desc">
    //                       <h2 className="carousel-desc-ttl">Body Care Center</h2>
    //                       <p className="carousel-desc-txt">Template comes with fully layered
    //                         & easily editable that are well-organized in layers & groups.</p>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="col-xs-12 col-md-4 col-lg-6">
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="carousel-item" style="background-image: url('https://placehold.co/1600x700/31343c/FFF');">
    //           <div className="container">
    //             <div className="carousel-caption text-start">
    //               <div className="row">
    //                 <div className="col-xs-12 col-md-8 col-lg-6">
    //                   <div className="carousel-content">
    //                     <div className="carousel-desc">
    //                       <h2 className="carousel-desc-ttl">Face Studio Center</h2>
    //                       <p className="carousel-desc-txt">Template comes with fully layered
    //                         & easily editable that are well-organized in layers & groups.</p>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="col-xs-12 col-md-4 col-lg-6">
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
    //         <img src="./src/assets/img/left-arrow.png" alt="control-prev"/>
    //       </button>
    //       <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
    //         <img src="./src/assets/img/right-arrow.png" alt="control-next"/>
    //       </button>
    //       <div className="carousel-indicators">
    //         <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    //         <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    //         <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
