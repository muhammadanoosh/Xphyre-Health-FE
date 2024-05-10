import React from 'react';
import AppointmentForm from '../../AppointmentForm';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import bgImg from '../../../assets/home_2/appointment_bg.svg';
import picImg from '../../../assets/home_2/appointment_img.png';

export default function AppointmentSectionStyle2({
  sectionTitle,
  sectionTitleUp,
}) {
  return (
    <section
      className="cs_appointment_section_1 cs_bg_filed"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="container">
        <div className="cs_height_132" />
        <div className="cs_appointment_img">
          <img src={picImg} alt="Appointment" />
        </div>
        <div className="row">
          <div className="offset-lg-6 col-lg-6">
            <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} />
            <Spacing md="57" />
            <AppointmentForm />
          </div>
        </div>
        <div className="cs_height_120" />
      </div>
    </section>
  );
}
