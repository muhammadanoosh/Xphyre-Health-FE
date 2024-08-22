import React from 'react';
import BannerSectionStyle5 from '../components/Section/BannerSection/BannerSectionStyle5';
import FeaturesSectionStyle5 from '../components/Section/FeaturesSection/FeaturesSectionStyle5';
import BannerSectionStyle2 from '../components/Section/BannerSection/BannerSectionStyle2';
import Section from '../components/Section';
import { pageTitle } from '../helpers/PageTitle';
import Spacing from '../components/Spacing';
import { TheXphyreEdgedata } from '../Constants/constants';



export default function TheXphyreEdge() {
    pageTitle('TXE');
    return (
        <>
            <BannerSectionStyle5
                bgUrl="/images/doctors/banner_bg.svg"
                imgUrl="/images/doctors/banner_img.png"
                title="The Xphyre Edge"
                subTitle=""
            />
            <Spacing md="150" lg="7" xl="100" />

            <Section
                className="cs_gray_bg_1"
            >
                <FeaturesSectionStyle5
                    sectionTitle="Experience the Xphyre Health Difference to Streamline Healthcare Billing "
                    data={TheXphyreEdgedata}
                />
            </Section>
            <Spacing md="150" lg="7" xl="100" />
            <Section>
                <BannerSectionStyle2
                    bgUrl="/images/home_2/cta_bg.jpeg"
                    title="Transform Your Practice with Effortless Billing Solutions from Xphyre Health"
                    subTitle=""
                />
            </Section>
        </>
    );
}
