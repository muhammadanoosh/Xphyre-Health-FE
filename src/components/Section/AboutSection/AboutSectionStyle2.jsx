import React from 'react';

export default function AboutSectionStyle2({ title, imgUrl, p1, p2, p3 }) {
  return (
    <section className="cs_shape_wrap">
      <div className="cs_shape_1 cs_position_5" />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12" >
            <div className="cs_section_heading cs_style_1" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",}}>
              <h2 className="cs_section_title cs_fs_72 m-0 cs_main_heading_color ">{title}</h2>
              <div className="cs_height_54 cs_height_xl_30" />
              <p className="m-0 para_color" style={{ textAlign: "justify" }}>{p1}</p>
              <p className="m-0 para_color" style={{ textAlign: "justify" }}>{p2}</p>
              <p className="m-0 para_color" style={{ textAlign: "justify" }}>{p3}</p>
              <div className="cs_height_120 cs_height_xl_60" />
            </div>
          </div>
          {/* <div className="col-lg-7 offset-lg-1">
            <img src={imgUrl} alt={title} />
          </div> */}
        </div>
      </div>
    </section>
  );
}
