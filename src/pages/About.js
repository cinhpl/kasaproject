import accordionData from "../assets/content.json";
import '../assets/Styles/pages/About.css';

import Banner from '../components/Banner';
import Dropdown from '../components/Dropdown';

export default function About() {
  return (
    <section className='about'>
      <div>
        <Banner />
      </div>
      <div className="values">
        <div className="values_about">
          {accordionData.map( ({ id, title, content }) =>
          <div key={id} className="about_content">
          <Dropdown title={title} content={content}/>
          </div>
        )}
        </div>
      </div>
    </section>
  );
};


