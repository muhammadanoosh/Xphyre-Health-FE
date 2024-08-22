import React from 'react';
import BannerSectionStyle5 from '../components/Section/BannerSection/BannerSectionStyle5';
import AboutSection from '../components/Section/AboutSection';
import BannerSectionStyle2 from '../components/Section/BannerSection/BannerSectionStyle2';
import Section from '../components/Section';
import { pageTitle } from '../helpers/PageTitle';
import Spacing from '../components/Spacing';


export default function OurProcesses() {
    pageTitle('OurProcesses');
    return (
        <>
            <BannerSectionStyle5
                bgUrl="/images/doctors/banner_bg.svg"
                title="Our Processes"
                subTitle=""
            />
            <Spacing md="150" lg="7" xl="100" />
            <Section>
                <AboutSection
                    imgUrl="/images/home_1/about.png"
                    spiningImgUrl="/images/home_1/about_mini.svg"
                    title="Streamline Billing"
                    subTitle="XPHYRE HEALTH"
                    featureList={[
                        {
                            featureListTitle:
                                'Xphyre Health is a team of experienced medical professionals',
                            featureListSubTitle:
                                `We understand how challenging and demanding running a top-quality healthcare practice is. Thus, our expert medical billing and coding specialists streamline operations by taking the stress of administrative, coding, and billing tasks off your shoulders. 
                                With more time to focus on patient care, Xphyre Health empowers healthcare practices to boost workplace efficiency and reinvent revenue cycles. `,
                        },
                    ]}
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
