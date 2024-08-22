import React from 'react';
import HeroStyle5 from '../components/Hero/HeroStyle5';
import FeaturesSectionStyle4 from '../components/Section/FeaturesSection/FeaturesSectionStyle4';
import FeaturesSectionStyle2 from '../components/Section/FeaturesSection/FeaturesSectionStyle2';
import Section from '../components/Section';
import BannerSectionStyle2 from '../components/Section/BannerSection/BannerSectionStyle2';
import { pageTitle } from '../helpers/PageTitle';
import Spacing from '../components/Spacing';
import { ERdata, WhyUsDataER } from '../Constants/constants';



export default function EmergencyRooms() {
    pageTitle('ER');
    return (
        <>
            <HeroStyle5
                title="Emergency Rooms"
                subTitle="Streamlining Emergency Room Operations for Excellence"
                imgUrl="/images/home_5/hero_img.png"
                H="Proven Track Record in Emergency Room Management "
                p="With years of experience, we've helped numerous emergency rooms achieve remarkable financial and operational goals:"
                detail="Freestanding and hospital emergency rooms are critical resources for communities but can increase your staff's daily responsibilities, affecting patient care and revenue. Xphyre Health provides top-notch, custom emergency room billing and coding services.
                    With a decade of experience and skilled medical billers and coders, we ensure your emergency department runs smoothly and efficiently!"
                funfactList={[
                    { number: '20%', title: 'Accuracy Rate' },
                    { number: '95%', title: 'Reduction in AR Days' },
                    { number: '50%', title: 'Satisfied Clients' },
                    { number: '10%', title: 'Claim Approval' },
                ]}
            />
            <Spacing md="150" lg="7" xl="100" />
            <Section>
                <FeaturesSectionStyle4
                    sectionTitle="Comprehensive Services"
                    data={ERdata}
                />
            </Section>
            <Spacing md="150" lg="7" xl="100" />
            <Section>
                <FeaturesSectionStyle2
                    sectionTitle="Why Choose Xphyre Health for Emergency Rooms "
                    imgUrl="images/about/why_choose_us.jpeg"
                    para="Streamline patient care and enhance customer satisfaction with Xphyre Health's tailored emergency room billing and coding services! With our expertise and innovative technology, we help your team maximize revenue and focus on delivering quality patient care."
                    data={WhyUsDataER}
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
