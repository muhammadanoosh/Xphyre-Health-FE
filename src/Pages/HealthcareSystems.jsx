import React from 'react';
import HeroStyle5 from '../components/Hero/HeroStyle5';
import FeaturesSectionStyle4 from '../components/Section/FeaturesSection/FeaturesSectionStyle4';
import BannerSectionStyle2 from '../components/Section/BannerSection/BannerSectionStyle2';
import FeaturesSectionStyle2 from '../components/Section/FeaturesSection/FeaturesSectionStyle2';
import Section from '../components/Section';
import { pageTitle } from '../helpers/PageTitle';
import Spacing from '../components/Spacing';
import { HSdata, WhyUsDataHS } from '../Constants/constants';



export default function HealthcareSystems() {
    pageTitle('HS');
    return (
        <>
            <HeroStyle5
                title="Healthcare Systems"
                subTitle="Streamlining Emergency Room Operations for Excellence"
                imgUrl="/images/home_5/hero_img.png"
                H="Proven Results, Unmatched Expertise"
                p="Xphyre Health partners with nationwide healthcare systems to elevate operational efficiency and cash flow:"
                detail="With priorities growing and margins shrinking, healthcare systems need a reliable partner that cares for their business the way they care for patients. Xphyre Health enters the frame to streamline your operations and boost your financial health!
                With a decade of experience and cutting-edge technology, we provide healthcare systems with hassle-free billing and coding services. The result? Zero errors, better patient care, and speedier payments!"
                funfactList={[
                    { number: '98.99%', title: 'Accuracy Rate' },
                    { number: '30%', title: 'Reduction in AR Days' },
                    { number: '95%', title: 'Satisfied Clients' },
                    { number: '98%', title: 'Claim Approval' },
                ]}
            />
            <Spacing md="150" lg="7" xl="100" />
            <Section>
                <FeaturesSectionStyle4
                    sectionTitle="Our Comprehensive Services"
                    data={HSdata}
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
            <Spacing md="150" lg="7" xl="100" />
            <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
                <FeaturesSectionStyle2
                    sectionTitle="Why Choose Xphyre Health for Your Healthcare System?"
                    para="Partner with Xphyre Health's expert medical billers and coders to supercharge your practice's growth! Our deep industry knowledge, commitment to excellence, and innovative solutions empower your healthcare system to thrive."
                    imgUrl="images/about/why_choose_us.jpeg"
                    data={WhyUsDataHS}
                />
            </Section>
        </>
    );
}
