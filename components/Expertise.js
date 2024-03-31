import React from "react";
import { Title } from "./common/Title";
import { expertise } from "@/assets/data/dummydata";
import { Card } from "./common/Card";

const Expertise = () => {
  return (
    <>
      <section className="expertise">
        <div className="container">
          <div className="heading-title">
            <Title title="Our expertise" />
            <p>
              At Urban Software Solutions, our expertise lies at the
              intersection of technology, urban planning, and community
              engagement. With years of experience and a proven track record, we
              bring a comprehensive set of skills and knowledge to the table,
              enabling us to tackle complex challenges and deliver innovative
              solutions that enhance urban living
            </p>
          </div>
          <div className="hero-content grid-4">
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption="learn more" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Expertise;
