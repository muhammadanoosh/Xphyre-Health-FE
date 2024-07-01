import React from 'react';
import BannerSectionStyle5 from '../components/Section/BannerSection/BannerSectionStyle5';
import BannerSectionStyle4 from '../components/Section/BannerSection/BannerSectionStyle4';
import FeaturesSectionStyle4 from '../components/Section/FeaturesSection/FeaturesSectionStyle4';
import Section from '../components/Section';
import { pageTitle } from '../helpers/PageTitle';
import Spacing from '../components/Spacing';

import { CAICdata } from '../Constants/constants';



export default function ClinicsAndImagingCenters() {
    pageTitle('CAIC');
    return (
        <>
            <BannerSectionStyle5
                bgUrl="/images/doctors/banner_bg.svg"
                imgUrl="/images/doctors/banner_img.png"
                title="Clinics and Imaging Centers"
            />
            <Section topMd={200} topLg={150} topXl={110}>
                <FeaturesSectionStyle4
                    sectionTitle="Discover Our Diverse Services"
                    data={CAICdata}
                />
            </Section>
            <Spacing md="200" lg="10" xl="150" />
            <Section className="cs_footer_margin_0">
                <BannerSectionStyle4
                    bgUrl="images/doctors/banner_bg_2.jpeg"
                    title="Why Us?"
                    subTitle="Cultivate deep, long-lasting relationships with insurance companies and patients with Xphyre Health's expert staff"
                />
            </Section>
            <Spacing md="200" lg="10" xl="150" />
        </>
    );
}
