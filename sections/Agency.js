import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Testimonial from "@/components/Testimonial";
import { Title, TitleSm } from "@/components/common/Title";

const Agency = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="ABOUT AGENCY" /> <br />
            <br />
            <Title
              title="The last digital agency you will ever need!"
              className="title-bg"
            />
          </div>

          <div className="content flex1">
            <div className="left w-60 py">
              <TitleSm title="Turning your business ideas into smart digital products since 2020" />
              <p className="desc-p">
                "Embark on a transformative digital voyage with our innovative
                solutions crafted since 2020. We specialize in turning your
                business ideas into cutting-edge digital products, empowering
                you to navigate the ever-evolving landscape of the digital realm
                with confidence. Our dedicated team is committed to providing
                tailored solutions that propel your journey forward, unlocking
                new opportunities and driving success in the digital age."
              </p>
              <div className="grid-3">
                <div className="box">
                  <h1 className="indigo">4+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">50+</h1>
                  <h3>Successful cases</h3>
                </div>
                <div className="box">
                  <h1 className="indigo">3+</h1>
                  <h3>Industry awards</h3>
                </div>
              </div>
            </div>
            <div className="right w-40 ml">
              <img
                src="/images/s1.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <div className="content flex">
            <div className="left w-40 py">
              <img
                src="/images/s4.jpg"
                alt="Img"
                className="round"
                width="100%"
                height="100%"
              />
            </div>
            <div className="right w-60 ml">
              <TitleSm title="Our mission" />
              <br />
              <p className="misson-p">
                At urbansoftwaresolution, our mission is to revolutionize the
                digital landscape by empowering individuals and businesses with
                innovative solutions that drive growth and success. We are
                committed to leveraging cutting-edge technologies and creative
                thinking to solve complex challenges and unlock new
                possibilities for our clients. With a focus on collaboration,
                integrity, and excellence, we strive to be a trusted partner in
                our clients' digital journeys, delivering impactful results that
                exceed expectations. Together, we are shaping the future of
                technology and making a positive impact on the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Agency;
