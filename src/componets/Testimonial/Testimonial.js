import React from "react";
import "./testimonial.css";
import { BsPersonCircle } from "react-icons/bs";
import { MdPeopleAlt } from "react-icons/md";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

export const Testimonial = (props) => {
  return (
    <>
      <div className='testimonial_container' ref={props.reference}>
        <h2>
          Our testimonial's <MdPeopleAlt color='ef7e7e' />
        </h2>
        <div className='testimonial_inner_container'>
          <TestimonialCard
            color={"#ff6cc5"}
            name={"Tanu Singh"}
            content={
              "I absolutely love the custom photo frame I ordered from this website! The attention to detail and craftsmanship are exceptional. Highly recommended!"
            }
          />
          <TestimonialCard
            color={"#c3ccf3"}
            name={"Vivek Something"}
            content={
              "The handmade bracelet I received as a gift was not only beautiful but also perfectly suited to my style. The quality and uniqueness exceeded my expectations!"
            }
          />
          <TestimonialCard
            color={"#ffb9b9"}
            name={"Somuya something"}
            content={
              "The gift basket I purchased was a hit! It was beautifully arranged with a great selection of goodies. The recipient was thrilled! Thank you!"
            }
          />
          <TestimonialCard
            color={"#ffb9b9"}
            name={"Random "}
            content={
              "I ordered a customized gift basket for my best friend's birthday, and it was a huge success. The personal touch and thoughtfulness made it truly special."
            }
          />
          <TestimonialCard
            color={"#55c3fe"}
            name={"Classmate"}
            content={
              "I received a handmade bracelet as a present, and I couldn't be happier with it. The design and craftsmanship are top-notch. I wear it every day!"
            }
          />
          <TestimonialCard
            color={"#ff9686"}
            name={"Mayank ladle"}
            content={
              "The custom photo frame I ordered for my parents' anniversary was a sentimental masterpiece. They were touched by the personalized touch and quality of the frame."
            }
          />
        </div>
      </div>
    </>
  );
};

const TestimonialCard = (props) => {
  return (
    <>
      <div className='testimonial_card'>
        <BsPersonCircle
          size={150}
          color={props.color}
          className='testimonial_icon'
        />
        <h3>{props.name}</h3>
        <p>
          {" "}
          <BiSolidQuoteAltLeft color='ef7e7e' /> {props.content}{" "}
          <BiSolidQuoteAltRight color='ef7e7e' />{" "}
        </p>
      </div>
    </>
  );
};
