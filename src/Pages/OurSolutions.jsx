import React from 'react';
import BannerSectionStyle5 from '../components/Section/BannerSection/BannerSectionStyle5';
import AboutSection from '../components/Section/AboutSection';
import BannerSectionStyle2 from '../components/Section/BannerSection/BannerSectionStyle2';
import Section from '../components/Section';
import { pageTitle } from '../helpers/PageTitle';
import Spacing from '../components/Spacing';



export default function OurSolutions() {
    pageTitle('OurSolutions');
    return (
        <>
            <BannerSectionStyle5
                bgUrl="/images/doctors/banner_bg.svg"
                imgUrl="/images/doctors/banner_img.png"
                title="Our Solutions"
                subTitle=""
            />
            <Section topMd={180} topLg={130} topXl={100}>
                <AboutSection
                    imgUrl="/images/home_1/about.png"
                    spiningImgUrl="/images/home_1/about_mini.svg"
                    title="Maximize Your Practice’s"
                    subTitle="XPHYRE HEALTH"
                    featureList={[
                        {
                            featureListTitle:
                                'Xphyre Health is a team of experienced medical professionals',
                            featureListSubTitle:
                                `Healthcare practices across Houston turn to Xphyre Health to combat billing and coding challenges. Our highly trained and dedicated staff handles the intricate details of the revenue cycle, empowering you to focus on patient care without stressing financial management.
                                With our top-notch services that streamline medical providers’ operations and enhance cash flow, all-sized healthcare organizations can amplify their revenue. Want to know how our expert medical billing and coding experts transform your clinic?`,
                        },
                    ]}
                />
            </Section>
            <Spacing md="200" lg="100" xl="150" />
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
