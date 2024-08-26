import React from 'react';
import HeroStyle5 from '../components/Hero/HeroStyle5';
import FeaturesSectionStyle4 from '../components/Section/FeaturesSection/FeaturesSectionStyle4';
import Section from '../components/Section';
import { pageTitle } from '../helpers/PageTitle';
import Spacing from '../components/Spacing';
import FeaturesSectionStyle2 from '../components/Section/FeaturesSection/FeaturesSectionStyle2';
import { WhyUsDataCAIC } from '../Constants/constants';
import BannerSectionStyle2 from '../components/Section/BannerSection/BannerSectionStyle2';
import { CAICdata } from '../Constants/constants';



export default function ClinicsAndImagingCenters() {
    pageTitle('CAIC');
    return (
        <>
            <HeroStyle5
                title="Clinics and Imaging Centers"
                subTitle="Streamlining Your Operations to Drive Growth and Success"
                imgUrl="/images/home_5/hero_img.png"
                H="Proven Track Record in Emergency Room Management "
                p="With a dedicated team of skilled experts, we've helped numerous clinics and imaging centers increase revenue, reduce billing errors, and unlock success!"
                detail="Is your clinic or specialty center overwhelmed with administrative tasks? Seeking an economical solution to your billing, coding, and authorization needs? Xphyre Health, boasting intimate industry knowledge and a decade of experience, enters the picture.
                Our certified medical billers and coders utilize state-of-the-art tech and reliable strategies to optimize operations, enhance efficiency, and maximize revenue!"
                funfactList={[
                    { number: '99%', title: 'Accuracy Rate' },
                    { number: '80%', title: 'Reduction in AR Days' },
                    { number: '99%', title: 'Satisfied Clients' },
                    { number: '98%', title: 'Claim Approval' },
                ]}
            />
            <Spacing md="150" lg="7" xl="100" />
            <Section>
                <FeaturesSectionStyle4
                    sectionTitle="Discover Our Diverse Services"
                    data={CAICdata}
                />
            </Section>
            <Spacing md="150" lg="7" xl="100" />
            <Section>
                <FeaturesSectionStyle2
                    sectionTitle="Why Choose Xphyre Health?"
                    imgUrl="images/about/why_choose_us.jpeg"
                    para="Take advantage of our tailored billing and coding services to supercharge your imaging or specialty center's success! Here's how our experts take your success to the next level"
                    data={WhyUsDataCAIC}
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
