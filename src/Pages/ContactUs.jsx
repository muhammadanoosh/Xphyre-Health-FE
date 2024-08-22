import React from 'react';
import BannerSectionStyle5 from '../components/Section/BannerSection/BannerSectionStyle5';
import ContactForm from '../components/ContactForm';
import Section from '../components/Section';
import ContactInfoSection from '../components/Section/ContactInfoSection';
import Spacing from '../components/Spacing';
import { pageTitle } from '../helpers/PageTitle';


export default function ContactUs() {
  pageTitle('ContactUs');
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/contact/banner_bg.svg"
        imgUrl="/images/contact/banner_img.png"
        title="Contact Us"
        subTitle="Kindly reach us to get the fastest response and treatment"
      />
      <div className="container cs_mt_minus_110">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <ContactForm />
          </div>
        </div>
      </div>
      <Spacing md="150" lg="7" xl="100" />
      <Section>
        <ContactInfoSection sectionTitle="Find Us Here" />
      </Section>
    </>
  );
}
