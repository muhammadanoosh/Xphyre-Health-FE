import React from 'react';
import BannerSectionStyle5 from '../components/Section/BannerSection/BannerSectionStyle5';
import AboutSection from '../components/Section/AboutSection';
import BannerSectionStyle2 from '../components/Section/BannerSection/BannerSectionStyle2';
import Section from '../components/Section';
import { pageTitle } from '../helpers/PageTitle';
import Spacing from '../components/Spacing';
import AboutSectionStyle2 from '../components/Section/AboutSection/AboutSectionStyle2';
import WorkingProcess from '../components/Section/WorkingProcess';

export default function OurApproach() {
    pageTitle('OurApproach');
    return (
        <>
            <BannerSectionStyle5
                bgUrl="/images/doctors/banner_bg.svg"
                title="Our Approach"
                subTitle=""
            />
            <Spacing md="150" lg="7" xl="100" />

            <Section>
                <AboutSectionStyle2
                    title="Unlock Healthcare Excellence with Expert"
                    p1="At Xphyre Billing Services, we simplify the complexities of medical billing, offering a tailored and adaptable process that suits the unique needs of healthcare providers. Our approach is built on efficiency, accuracy, and transparency, ensuring smooth revenue management and claim handling. Here’s a general overview of how we make your billing process seamless"
                    p2=""
                    p3=""
                    imgUrl="/images/departments/department_img_1.png"
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
            <Section
            >
                <WorkingProcess
                />
            </Section>

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
                                `At Xphyre Billing Services, we are committed to making medical billing as smooth and efficient as possible. Our flexible approach allows us to adapt to your needs while ensuring that your practice thrives financially.`,
                        },
                    ]}
                />
            </Section>
        </>
    );
}
