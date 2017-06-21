import React from 'react';

class DignityMealsPage extends React.Component {
  render() {
    return (
        <div className="standard-article">
            <div className="article-image large">
                <img src={require("../../assets/dignity-meals/Dignity-Meals.png")} alt="Dignity Meals" />	
            </div>

            <div className="text-wrapper">
                <h2 className="header-three">Dignity Meals: A Case Study on Eliminating Hunger and Food Waste</h2>

                <h3 className="header-three">What We Know</h3>

                <p className="paragraph-one">Food waste is a big, still growing, problem in the United States. In 2013, we disposed more than 35 million tons of food, according to the Environmental Protection Agency. Once in landfills, food breaks down to produce methane, a potent greenhouse gas which contributes to climate change. In the USA, <a href="http://www.worldfooddayusa.org/food_waste_the_facts" data-link-type="externalLink" className="article-link page-link">30-40% of the food supply is wasted,</a> equaling more than 20 pounds of food per person per month.</p>
                
                <p className="paragraph-one">On the flip side, <a href="http://www.worldhunger.org/hunger-in-america-2015-united-states-hunger-and-poverty-facts/" data-link-type="externalLink" className="article-link page-link">hunger and poverty remain high</a> in the United States. 1 in 6 Americans struggle with the reality of hunger and food insecurity. <a href="http://www.feedingamerica.org/hunger-in-america/impact-of-hunger/hunger-and-poverty/hunger-and-poverty-fact-sheet.html?referrer=https://duckduckgo.com/" data-link-type="externalLink" className="article-link page-link">48.1 million Americans lived in food insecure households,</a> including 32.8 million adults and 15.3 million children.</p>

                <h3 className="header-three">Problem</h3>

                <p className="paragraph-one">Local food merchants and grocers are throwing away significant amounts of food each day while needy and impoverished families, children and elderly could use this normally wasted food.</p>

                <h3 className="header-three">Research</h3>

                <p className="paragraph-one">To figure out which problems within the food collection and distribution space to tackle, I set out to answer the following questions:</p>

                <ul className="list-one">
                    <li>What is not effective or can be improved upon within the existing market?</li>
                    <li>What is the recipient's (institution and/or individual) experience like? How can Dignity Meals create a safe space for recipients?</li>
                    <li>Who are the donors (suppliers) with the highest impact?</li>
                    <li>How is the quality of food measured?</li>
                    <li>What are the donors' motivations?</li>
                </ul>

                <p className="paragraph-one">To capture informed empathy, I sought out stakeholders on each side: donors (suppliers), distributors, and recipients. I conducted secondary research, competitive analysis, surveyed and interviewed individuals, summarizing the methodologies and findings <a href="https://docs.google.com/document/d/1-bvpjkrDTklH3tsl-BfLh9r8Wmxkw7zXCXpBXlanJws/edit" data-link-type="externalLink" className="article-link page-link">here.</a></p>

                <h3 className="header-three">Research Findings</h3>

                <ul className="list-one">
                    <li>Food quality is commonly determined by visual cues: does the food <i>look</i> good?</li>
                    <li>Food quality is measured by three key factors: time, temperature, and quantity (capacity to refrigerate, what can be picked up, and how quickly it can be distributed).</li>
                    <li>Donors are motivated by willingness (social responsibility and community care) and assurance that they won't be held liable.</li>
                    <li>Some donors are still not aware nor informed of laws in effect (Good Samaritan Food Donation Act and AB-1826 Bill) and carry misunderstanding about liabilities.</li>
                    <li>Restaurants and grocery stores are among the donors (suppliers) with the highest impact.</li>
                    <li>Although there is some consistency with certain donors, volume of food being donated day to day fluctuates and is generally unknown, which creates complexities in the logistics of matching to agencies/recipients.</li>
                    <li>The type of food donation (prepared food, perishables, frozen food) has to match the needs and capacities of the food recipients.</li>
                    <li>Good UX and a streamlined process of working out logistics can be improved upon in the existing market.</li>
                    <li>Timing is everything: matching what is needed and when, what is available and who can pick it up, syncing up routes between donors and recipients to be in close proximity.</li>
                    <li>Distributors face challenges with logistics (coordinating between donors and recipients and making sure there is a good match between needs), educating and equipping donors, funding (financial means to bring on more people to help), and ensuring food safety and timeliness in consumption for recipients.</li>
                </ul>

                <h3 className="header-three">Strategy</h3>

                <p className="paragraph-one">Analyzing the findings, I developed a prioritized <a href="https://docs.google.com/document/d/1cO7AN4ZjCz2cH01PXux8JMZNahRPdZtWJjej4ywC7BI/edit" data-link-type="externalLink" className="article-link page-link">product roadmap</a> outlining proposed features and functionality for Version 1.0 of the Dignity Meals app, and created a UX Strategy Blueprint.</p>
            </div>

            <div className="article-image full">
                <img src={require("../../assets/dignity-meals/1-Strategy-Blueprints.png")} alt="Strategy Blueprints" />
                <span className="image-caption">UX Strategy Blueprint for Dignity Meals</span>
            </div>

            <div className="text-wrapper">
                <p className="paragraph-one">From there I created a sitemap to show the relationship between features and the touch points for each user type (donor, volunteer/distributor, agency/recipient).</p>
            </div>

            <div className="article-image large">
                <img src={require("../../assets/dignity-meals/2-Sitemap.png")} alt="Sitemap" />
                <span className="image-caption">Dignity Meals Sitemap</span>
            </div>
            
            <div className="text-wrapper">
                <p className="paragraph-one">Working off the structure of the sitemap, I create three major user tasks within the app: 1) donor side&mdash;making a donation, 2) agency/recipient side&mdash;finding food, and 3) picking up and redistributing food.</p>
            </div>

            <div className="article-image full">
                <img src={require("../../assets/dignity-meals/3-User-Flows.png")} alt="User Flows" />
                <span className="image-caption">Dignity Meals User Flows</span>
            </div>

            <div className="text-wrapper">
                <h3 className="header-three">Wireframes and Testing</h3>

                <p className="paragraph-one">I documented <a href="https://docs.google.com/document/d/1eMRPp9Xbybz6Bmgs4wWxdmtrSYaviC9s-6IHA9tV9TI/edit" data-link-type="externalLink" className="article-link page-link">UI requirements</a> to guide what the wireframes would contain for each user type. After I received feedback on initial wireframes, I sketched out three main user flows on which the subsequent iterations are based.</p>
            </div>

            <div className="article-image large">
                <img src={require("../../assets/dignity-meals/4-Sketches.png")} alt="User Flows Sketches" />
                <span className="image-caption">Sketches for Dignity Meals User Flows</span>
            </div>

            <div className="article-image full">
                <img src={require("../../assets/dignity-meals/5-Wireframes.png")} alt="Wireframes V2" />
                <span className="image-caption">Dignity Meals Wireframes V2</span>
            </div>

            <div className="text-wrapper">
                <p className="paragraph-one">
                    I conducted and recorded usability tests on a rough paper prototype comprised of these wireframes. While participants understood what the majority of screens were about and easily picked up on the functionality of features, there were misunderstandings with the microcopy, questions about pickup photos and/or labels as a way to identify the food, and trouble with the scheduling (donation form) experience. A few questions brought up in the tests were considerations beyond the scope of the project but good things to think about nevertheless.
                </p>

                <p className="paragraph-one">
                    From <a href="https://docs.google.com/document/d/18UoG3ZGRtU_5naLgp4GEfHKk_xzxmFIp2t_m7lUinFg/edit" data-link-type="externalLink" className="article-link page-link">user feedback,</a> I made recommendations for the succeeding iterations.
                </p>

                <ul className="list-one">
                    <li>Improve microcopy&mdash;think about word usage; words should inform and clarify</li>
                    <li>Anticipate the user's needs as she goes along (e.g. "Do you need help preparing this?", option to cancel a claim) and provide appropriate options</li>
                    <li>Reassure the user with clear language (e.g. "Steve has confirmed this pickup. Please confirm pickup.")</li>
                    <li>Only include information relevant to the primary tasks on a page</li>
                    <li>Show and/or give users the option to see their activities and history</li>
                    <li>If there's time, think about the opportunities within the app to delight</li>
                </ul>

                <h3 className="header-three">Brand Identity</h3>
            </div>

            <div className="article-image">
                <img src={require("../../assets/dignity-meals/6-Logo-Style-Tiles.png")} alt="Logo and Style Tiles" />
                <span className="image-caption">Dignity Meals Logo and Style Tile</span>
            </div>

            <div className="text-wrapper">
                <p className="paragraph-one">I chose green for its trustworthiness and sense of groundedness, and orange for its friendliness, warmth, and inviting nature. I chose Proxima Nova for its functionality and legibility. I wanted the UI to remain light to convey cleanliness, spaciousness, and freshness.</p>

                <h3 className="header-three">Evaluating the Donation Form Experience</h3>

                <p className="paragraph-one">The initial scrolling format (Variant 1) in making a donation made the navigation difficult to use. The user isn't able to see the CTA, "Post Donation" until he scrolled to the bottom, creating a sense of uncertainty of where he was, where he came from, and where he's going. I created the donation form as steps on a page (Variant 2), the clear winner upon testing.</p>
            </div>

            <div className="article-image full">
                <img src={require("../../assets/dignity-meals/7-Variants.png")} alt="Variants" />
            </div>

            <div className="text-wrapper">
                <h3 className="header-three">Weaving the User Stories Together</h3>

                <h3 className="header-three">Donor</h3>

                <p className="paragraph-one">Jordon, a regular food donor, is motivated by social and environmental responsibility and community care. He would like to donate the over-ripened avocados from the produce department he manages at the grocery store. He doesn't know who could use these avocados, an one-off donation, but doesn't want them to go to waste.</p>
            </div>

            <div className="article-image full">
                <img src={require("../../assets/dignity-meals/8-Steps.png")} alt="Jordon's Steps" />
            </div>

            <div className="text-wrapper">
                <h3 className="header-three">Agency</h3>

                <p className="paragraph-one">Lillian, a member of a local non-profit agency working directly with the needy and impoverished, is motivated to find any available food that her facility can accommodate. She logs into Dignity Meals to see what is available around her.</p>
            </div>

            <div className="article-image full">
                <img src={require("../../assets/dignity-meals/9-Steps-2.png")} alt="Lillian's Steps" />
            </div>

            <div className="text-wrapper">
                <h3 className="header-three">Volunteer</h3>

                <p className="paragraph-one">Steve, a Dignity Meals volunteer driver, is motivated to make a difference in his community. He was moved to get involved after encountering staggering statistics on poverty in his city and beyond. Upon joining Dignity Meals, he selected his pickup and delivery vicinity along with available days and hours to volunteer.</p>
            </div>

            <div className="article-image full">
                <img src={require("../../assets/dignity-meals/10-Steps-3.png")} alt="Steve's Steps" />
            </div>

            <div className="text-wrapper">
                <p className="paragraph-one">To see if those who were unfamiliar with the concept could follow along as they walked through the flows, I tested the aforementioned screens with <a href="https://usabilityhub.com/" data-link-type="externalLink" className="article-link page-link">UsabilityHub.</a> I noted the following from the <a href="https://docs.google.com/document/d/1ixqLrZo-Cl_Niue6CV__No6gMIIkYbtxkiVBTU8vsm8/edit" data-link-type="externalLink" className="article-link page-link">test findings.</a></p>

                <ul className="list-one">
                    <li>Donor flow: understood overall</li>
                    <li>Agency flow: understood overall, but there was some confusion around what the "food board" was meant for (perhaps this was a result of not setting up the context for the participant). I would recommend iterating on how language can be clarified to inform and instruct.</li>
                    <li>Volunteer flow: understood overall, but there was some confusion around the basic comprehension in the pickup and delivery routes. I would recommend iterating on the UI to rethink how present and next actions and its accompanying statuses can be made clearer.</li>
                </ul>

                <h3 id="finalSection" className="header-three">Concluding Thoughts and Next Steps</h3>

                <p className="paragraph-one">To ensure the product's usability and pleasurability, I would take the following steps to move the project forward:</p>

                <ul className="list-one">
                    <li>Build a prototype and invite stakeholders on each side (donors, distributors, and recipients) to interact with it.</li>
                    <li>Design the onboarding and new vendor sign-up experience. (To ensure food safety and quality, Dignity Meals is a members-only service; all users must be approved).</li>
                </ul>
                
                <p className="paragraph-one">The strength of Dignity Meals, a food collection and re-distribution service standing in the gap between food waste and hunger, lies within community-based principles. To extend Dignity Meals' influence, I would also reach out to local vendors and partner with distributors doing similar work.</p>
            </div>
        </div>
    );
  }
}

export default DignityMealsPage;
