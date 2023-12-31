//This is the Official IEEE Website for the year 2023
import { features } from "../../constants";
import styles, { layout } from "../../style";
import Button from "../Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt='star' className='w-[50%] h-[50%] object-contain' />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </div>
);

const WhyIEEE = () => (
  <section id='features' className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Why join
        <br className='sm:block hidden' /> IEEE NSUT ?
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        The Benefits of Joining IEEE, the world’s largest Professional
        Association for the Advancement Of Technology, quite a lot depends on
        how active the IEEE chapter is in your area and how you want to derive
        benefits out of it.
      </p>

      <Button styles={`mt-10`} text='Get Started' />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default WhyIEEE;
