import React from 'react';
import HeroSection from '../components/Hero/HeroSection';
import Section from '../components/Section';
import AboutSectionStyle3 from '../components/Section/AboutSection/AboutSectionStyle3';
import TestimonialSectionStyle2 from '../components/Section/TestimonialSection/TestimonialSectionStyle2';
import WhyChooseUS from '../components/Section/WhyChooseUs/WhyChooseUs';
import BannerSectionStyle2 from '../components/Section/BannerSection/BannerSectionStyle2';
import DepartmentSection from '../components/Section/DepartmentSection';
import Spacing from '../components/Spacing';
import AppointmentSectionStyle2 from '../components/Section/AppointmentSection/AppointmentSectionStyle2';
import { pageTitle } from '../helpers/PageTitle';
import { WhoWeServeHome, tabData } from '../Constants/constants';


export default function HomeStyle2() {
  pageTitle('Home');
  return (
    <>
      <HeroSection
        title1="Empower Your"
        title2="Practice with"
        title3="Medical Billing Services"
        subTitle="Discover Custom Solutions to Redefine Your Practice's Financial Health"
        videoBtnText="See how we work"
        videoUrl="https://www.youtube.com/embed/VcaAVWtP48A"
        funfactList={[
          { number: '98%', title: 'Accuracy Rate' },
          { number: '30%', title: 'Reduction in AR Days' },
          { number: '98%', title: 'Satisfied Clients' },
          { number: '98%', title: 'Claim Approval' },
        ]}
      />
      {/* <Spacing md="150" lg="7" xl="100" /> */}
      <Section id="about">
        <AboutSectionStyle3
          titleUp="ABOUT US"
          title="We’ll take care of your payments"
          subTitle="Experience the simplicity of integrating our top-notch medical billing services into your practice with Xpyhre Health. We offer a holistic billing solution to support your practice’s growth by alleviating repetitive administrative tasks and speeding up claim submissions. 
          Our tailored services and expert medical billing specialists are proficient at eliminating billing errors and maximizing workplace efficiency. With attention to detail and a commitment to excellence, Xphyre Health helps you focus on what matters most – delivering excellent patient care!"
        />
      </Section>
      <Spacing md="150" lg="7" xl="100" />
      <Section
        className="cs_bg_filed"
        style={{ backgroundImage: `url(/images/home_2/testimonial_bg.svg)` }}
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <TestimonialSectionStyle2
          sectionTitle="What Our Clients Say."
          sectionTitleUp="TESTIMONIALS"
        />
      </Section>
      <Spacing md="150" lg="7" xl="100" />
      <Section>
        <BannerSectionStyle2
          bgUrl="/images/home_2/cta_bg.jpeg"
        />
      </Section>
      <Spacing md="150" lg="7" xl="100" />
      <Section>
        <WhyChooseUS
          sectionTitle="Why Choose Us"
          sectionTitleDown="Choosing the right partner for your healthcare billing needs can make all the difference in the efficiency and profitability of your practice. At Xphyre Health, we stand out by offering a blend of expertise, innovation, and personalized service. Here’s why healthcare providers across Houston and beyond trust us to handle their billing and coding challenges effectively."
          data={tabData}
        />
      </Section>
      <Spacing md="150" lg="7" xl="100" />
      <Section>
        <AppointmentSectionStyle2
          bgUrl="/images/home_2/appointment_bg.svg"
          imgUrl="/images/home_2/appointment_img.png"
          sectionTitle="Appointment"
          sectionTitleUp="BOOK AN"
        />
      </Section>
      <Spacing md="150" lg="7" xl="100" />
      <Section>
        <DepartmentSection
          sectionTitle="Serving Practices of All Sizes: Unlock Your Healthcare Practice's True Revenue Potential"
          bgUrl="images/home_1/department_bg.svg"
          data={WhoWeServeHome}
        />
      </Section>
    </>
  );
}
