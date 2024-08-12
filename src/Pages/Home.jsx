import React from 'react';
import HeroSection from '../components/Hero/HeroSection';
import Section from '../components/Section';
import AboutSectionStyle3 from '../components/Section/AboutSection/AboutSectionStyle3';
import TestimonialSectionStyle2 from '../components/Section/TestimonialSection/TestimonialSectionStyle2';
import BannerSectionStyle2 from '../components/Section/BannerSection/BannerSectionStyle2';
import FeaturesSectionStyle2 from '../components/Section/FeaturesSection/FeaturesSectionStyle2';
import Spacing from '../components/Spacing';
import AppointmentSectionStyle2 from '../components/Section/AppointmentSection/AppointmentSectionStyle2';
import { pageTitle } from '../helpers/PageTitle';
import { WhyUsData } from '../Constants/constants';


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
          { number: '80%', title: 'Accuracy Rate'},
          { number: '95%', title: 'Collection Rate'},
          { number: '89%', title: 'Satisfied Clients'},
          { number: '90%', title: 'Claim Approval'},
        ]}
      />
  {/* About Section  */}
    <Section id="about" bottomMd={190} bottomLg={145} bottomXl={105}>
        <AboutSectionStyle3
          titleUp="ABOUT US"
          title="We’ll take care of your payments"
          subTitle="Experience the simplicity of integrating our top-notch medical billing services into your practice with Xpyhre Health. We offer a holistic billing solution to support your practice’s growth by alleviating repetitive administrative tasks and speeding up claim submissions. 
          Our tailored services and expert medical billing specialists are proficient at eliminating billing errors and maximizing workplace efficiency. With attention to detail and a commitment to excellence, Xphyre Health helps you focus on what matters most – delivering excellent patient care!"
        />
      </Section>
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
      <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
        <FeaturesSectionStyle2
          sectionTitle="Why Choose Us"
          imgUrl="images/about/why_choose_us.jpeg"
          data={WhyUsData}
        />
      </Section>
      <Section>
        <BannerSectionStyle2
          bgUrl="/images/home_2/cta_bg.jpeg"
          title="Don’t Let Your Health Take a Backseat!"
          subTitle="Schedule an appointment with one of our <br />
          experienced medical professionals today!"
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
      {/* <Spacing md="150" lg="7" xl="100" /> */}
    </>
  );
}
