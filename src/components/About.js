import aboutImg from './../images/IMG_20241216_145416_104.jpg';
import Title from './Title';
const About = () => {
  return (
        <section className="section" id="about">
          <Title title='about' subTitle='us' />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="community support" />
        </div>
        <article className="about-info">
          <h3>Empowering Africa's Future.</h3>
          <p>
            Welcome to Community of Support, an NGO dedicated to uplifting young
            Africans through education and healthcare support. Founded in 2022
            and inspired by the story of a promising young African child who
            overcame educational barriers with our help, we aim to create a
            strong grassroots support system across the continent. 
          </p>

            <p>Led by Doctor
            Abel, our Executive Director, and a team of dedicated field experts,
            we are committed to providing school placements, covering school
            fees, and supporting patients with minor medical bills. Our efforts
            have already enabled students to pursue degrees in engineering,
            nursing, and other fields, helped families afford critical medical
            treatments, and provided financial support to young graduates for
            their National Youth Service Corps (NYSC). Together, we strive to
            build a brighter future for Africa, one community at a time.
          </p>
          <a href="#about" className="btn">read more</a>;
        </article>
      </div>
    </section>
  );
};
export default About;