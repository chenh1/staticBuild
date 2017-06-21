import React from 'react';

class AboutPage extends React.Component {
  render() {
    return (
      <div className="about-content standard-article">
				<div className="article-image">
          <img src={require("../../assets/Mer.png")} alt="The Mer" />
					<span className="image-caption">Greetings from Mer</span>
				</div>

				<div className="text-wrapper">
					<p className="paragraph-one">I'm a UX and UI designer with a background in graphic design and a natural affinity for human behavior, based in Southern California. I'm driven by informed empathy; I enjoy experimentation and exploration; and I believe in constant growth. </p>

					<p className="paragraph-one">For a glimpse into how I got here, welcome to the Merlin and UX Design Story.</p>

					<h3 className="header-three">What's in a Name?</h3>

					<p className="paragraph-one">My name is Tracy Lin but I was known as Mer growing up. Mer is a hybrid animal; it can be described as a bear-rabbit creature. Mer travels in packs, finding strength in numbers and anonymity, and remains elusive as a species. As an individual, Mer is Tracy embodied, an alter ego of sorts. Mer's origin is unknown; its birth remains a mysterious and curious phenomenon.</p>

					<p className="paragraph-one">It wasn't until I came across Merlin the wizard of Arthurian legend that I realized, in a moment of indescribable connection, that Merlin was actually me. I had been Merlin all this time. While Mer still exists, I now understand (in the way clarity emerges from distance and time) that I was Mer in my childhood and youth because I didn't quite know how to be Tracy yet. Mer lent a perspective in which I could see and craft a new reality. Mer symbolizes purity, playfulness, and authenticity&mdash;root characteristics of Merlin.</p>

					<h3 className="header-three">From Design to Design</h3>

					<p className="paragraph-one">I grew up drawing Mer and everything around. Creative and highly inquisitive, I asked questions constantly, much to my mother's exasperated sighs. I always wanted to know the why behind outcomes, situations, and behaviors; nothing was too mundane for my curiosity.</p>

					<p className="paragraph-one">While studying art as an undergraduate, I found myself drawn to digital design, intrigued by design thinking and user-centered ideology. I began to think critically about the audience and how people were experiencing my work. Simultaneously, a compassion and empathy for people began to surface by an accumulation of interactions and relationships with those mentally, spiritually, and emotionally troubled. I learned to practice active listening and hearing unvoiced questions to anticipate the unique needs of people.</p>

					<p className="paragraph-one">After considering becoming a therapist, I decided to study graphic design during which time and thereafter I developed a foundation in design fundamentals and a curiosity to users. I wanted to know who I was designing for and asked questions to build this understanding. Unbeknownst to me, I was practicing aspects of UX design (pacing and setting up the flow to move people through my work, for example) under the conviction that good design was directed by the particular conditions of the user. When I later came across the term 'UX', it dawned on me that this was what I had been looking for, the term that encompassed what I had been wanting to do and what I had been practicing all along.</p>

					<p className="paragraph-one">Through graphic design and shifting into UX design, I learned to balance creative satisfaction and business goals while meeting people's needs. Through developing my skills in the UX design process, I learned that I enjoyed understanding user behavior and transforming complex tasks into intuitive, accessible, and meaningful experiences. My passion in UX design stems from the spirit of my childhood curiosities&mdash;value for aesthetics and empathy for people&mdash;and the belief that design carries infinite potential to make a positive and lasting difference in this world.</p>

					<p className="paragraph-one">Want to stir up some UX magic with Merlin? Contact me at <a id="aboutMailLink" className="article-link"></a></p>

					<p className="paragraph-one">First magic show in the works.</p>

					<p className="paragraph-one">Peace be with you.</p>
				</div>
			</div>
    );
  }
}

export default AboutPage;
