import React from 'react';
import BannerSectionStyle5 from '../components/Section/BannerSection/BannerSectionStyle5';
import BannerSectionStyle4 from '../components/Section/BannerSection/BannerSectionStyle4';
import DepartmentSectionStyle2 from '../components/Section/DepartmentSection/DepartmentSectionStyle2';
import AboutSectionStyle2 from '../components/Section/AboutSection/AboutSectionStyle2';
import Section from '../components/Section';
import { pageTitle } from '../helpers/PageTitle';
import { MARSdata1, MARSdata2 } from '../Constants/constants';


export default function MedicalAccountsReceivableServices() {
    pageTitle('MARS');
    return (
        <>
            <BannerSectionStyle5
                bgUrl="/images/doctors/banner_bg.svg"
                imgUrl="/images/doctors/banner_img.png"
                title="Medical Accounts Receivable Services"
                subTitle=""
            />
            <Section topMd={135} topLg={100} topXl={100}>
        <AboutSectionStyle2
          title="Elevate Your Practice's Financial Health"
          p1="Healthy cash flow is the keystone for successful healthcare clinics. However, managing your accounts receivable while hitting your daily tasks can be daunting. That's where expert accounts receivable solutions enter the picture!"
          p2="Whether you lack the time and resources to recover overdue or are struggling with a disorganized collection process, trained AR specialists can help strengthen your working capital. These top-notch services empower you to optimize your practice's outstanding patient balances and insurance claims."
          p3="Moreover, healthcare facilities can eliminate the stress of tracking and following up on unpaid invoices and claims through accounts receivable services. Thus, at Xphyre Health, our diligent AR team handles every aspect of accounts receivable management, ensuring your practice receives timely payments."
          imgUrl="/images/departments/department_img_1.png"
        />
      </Section>

            <Section topMd={200} topLg={150} topXl={110}>
                <DepartmentSectionStyle2
                    sectionTitle="Empower Your Medical Facility"
                    data={MARSdata1}
                />
            </Section>
            <Section className="cs_footer_margin_0">
                <BannerSectionStyle4
                    bgUrl="images/doctors/banner_bg_2.jpeg"
                    title="Why Us?"
                    subTitle="Cultivate deep, long-lasting relationships with insurance companies and patients with Xphyre Health's expert staff"
                />
            </Section>
            <Section topMd={200} topLg={150} topXl={110}>
                <DepartmentSectionStyle2
                    sectionTitle="Revolutionize Your Cash Flow "
                    data={MARSdata2}
                />
            </Section>
        </>
    );
}
