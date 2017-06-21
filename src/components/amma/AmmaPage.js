import React from 'react';

class AmmaPage extends React.Component {
  render() {
    return (
        <div className="standard-article">
            <div className="article-image large">
                <img src={require("../../assets/amma/amma-original.png")} alt="AMMA" />
            </div>

            <div className="text-wrapper">
                <h2 className="header-three">AMMA: A Case Study on Managing Asthma</h2>

                <h3 className="header-three">Background</h3>

                <p className="paragraph-one">As part of my Design Lab course, I was tasked with designing the companion mobile app for AMMA (Asthma Monitoring and Managing App), a wearable health tracking and monitoring device for asthma sufferers.</p>
                
                <h3 className="header-three">Research</h3>
                <p className="paragraph-one">With the product requirements from the brief and my research plan in tow, I set out to answer three questions:</p>

                <ul className="list-one">
                    <li>Who are the users and what are their priorities?</li>
                    <li>What are the use cases of this product?</li>
                    <li>What are the opportunities for design enhancements related to product desirability (utility, usability, and delight)?</li>
                </ul>

                <p className="paragraph-one">Recruiting asthmatic participants from online forums with screening surveys and prompts for a chat about their condition proved to be more difficult than I had anticipated. When potential leads fell flat, I sought out secondary research. Through synthesizing research data from asthma-related studies and personal narratives from bloggers living with asthma, I created a provisional persona, Lynn.</p>

                <p className="paragraph-one">While motivation and engagement levels are high in parents and caretakers as users, I was interested in adult-onset asthma that can potentially develop at any point in one's life. My provisional persona, Lynn, is a young adult in her twenties motivated by the long-term consequences from not taking care of her health and the desire to contribute to medical research through her experience with adult-onset asthma.</p>
            </div>

            <div className="article-image large">
                <img src={require("../../assets/amma/PersonaLynn.png")} alt="AMMA" />
                <span className="image-caption">Provisional persona, Lynn</span>
            </div>

            <div className="text-wrapper">
                <h3 className="header-three">UX Strategy Blueprint</h3>

                <h3 className="sub-header-one">Problems I'm trying to solve:</h3>

                <ul className="list-one">
                    <li>Asthmatics lack an easy, simple, and effective way to record and track asthma symptoms, detect potential triggers, and organize medications and treatment plans all in one place.</li>
                    <li>Managing asthma is overwhelming and anxiety-inducing; the disease has significant impact on the quality of life (loss of control over health and well-being).</li>
                    <li>Discouragement in not feeling better/lack of tangible progress despite following doctor's orders.</li>
                    <li>Lack of understanding and knowledge about their condition.
                    </li>
                </ul>

                <h3 className="sub-header-one">Obstacles to overcome:</h3>

                <ul className="list-one">
                    <li>Constraints in finding qualified participants to validate my assumptions</li>
                    <li>Capturing accurate perception and facts of an user's unique condition and addressing it appropriately</li>
                    <li>Convincing/motivating the user to adopt yet another tool for managing asthma/self-monitoring</li>
                </ul>

                <h3 className="sub-header-one">Aspirations:</h3>

                <ul className="list-one">
                    <li>Transformational impact on users while supporting business goals</li>
                    <li>Easy to use, helpful, and desirable product that effectively manages and monitors asthma according to the user's specific needs (knows when to prompt/push notifications at any given moment, reflects and adapts to the user's input: implement contextual design)</li>
                    <li>Deliver an encouraging experience, foster reliability and predictability, and engage users in their journey</li>
                </ul>

                <h3 className="sub-header-one">Guiding Principles:</h3>

                <ul className="list-one">
                    <li>Simplify the complicated and help users do more through doing less</li>
                    <li>Drive users to return and make the product a part of their routine</li>
                    <li>Create moments of encouragement and rest</li>
                </ul>

                <h3 className="sub-header-one">Measurements:</h3>

                <ul className="list-one">
                    <li>Over 90% task completion</li>
                    <li>High frequency of use (ideally, daily)</li>
                    <li>High user satisfaction (measured through qualitative research)</li>
                </ul>

                <p className="paragraph-one">
                    <a href="https://docs.google.com/document/d/1acZaCFZHrOMPzuNcmgTB_Z2KGZ1q6-3yFrUI7yZZUAE/edit" data-link-type="externalLink" className="article-link page-link">Product roadmap</a>
                    outlining short and long-term mobile opportunities.
                </p>

                <h3 className="header-three">Early Low-Fidelity Design</h3>

                <p className="paragraph-one">In the application map below, I documented a set of product features and functionalities categorized into the app's key screens. I assumed the hierarchy of needs in the diagram based on research findings.</p>		
            </div>
            
            <div className="article-image">
                <img src={require("../../assets/amma/AMMA-App-Map.png")} alt="Application Map" />
                <span className="image-caption">Application Map</span>
            </div>

            <div className="text-wrapper">
                <p className="paragraph-one">To determine the user paths, I looked at the times AMMA would and should be used. Lynn, my provisional persona, not only needs AMMA daily for routine maintenance, but also in a crisis moment&mdash;during an asthma attack, for instance&mdash;when the illness is out of her control. Two primary modes emerged: default and emergency. I then created work flows for these two primary use cases.</p>
            </div>				

            <div className="article-image large">
                <img src={require("../../assets/amma/AMMA-Workflow.png")} alt="Workflow" />
            </div>

            <div className="text-wrapper">
                <p className="paragraph-one">I designed initial wireframes from the identified work flows, then built a wireframe-based prototype in InVision to test.</p>
            </div>

            <div className="article-image full">
                <img src={require("../../assets/amma/AMMA-Design-Patterns-Default.png")} alt="Design Patterns Default State" />
                <span className="image-caption">AMMA Workflow (Default Mode); Wireframes V1</span>
            </div>

            <div className="article-image large">
                <img src={require("../../assets/amma/AMMA-Design-Patterns-Emergency.png")} alt="Design Patterns Emergency State" />
                <span className="image-caption">AMMA Workflow (Emergency Mode): Wireframes V1</span>
            </div>

            <div className="text-wrapper">
                <h3 className="header-three">Iterations and Testing</h3>

                <p className="paragraph-one">I conducted in-person usability testing with friends and remote testing via <a href="https://usabilityhub.com/" data-link-type="externalLink" className="article-link page-link">UsabilityHub</a>. The usability tests revealed a few major problems. Navigating the app required too much effort; the app didn't feel personal and didn't address the user's specific condition. Next steps were vague, and much of the information presented to the user was either superfluous or only necessary to show once.</p>

                <p className="paragraph-one">Around this time, I discovered that an acquaintance in his twenties (aligning with my persona, Lynn) had seasonal asthma and reached out to interview him mid-process to gain more empathy.</p>

                <p className="paragraph-one">His asthma was situational and most frequently triggered by allergies. External factors like windiness or an action performed like running could easily set it off. To prepare for those moments, he would take Claritin as a precaution and do a few warm-up tests to gauge how he felt. He self-monitored based on being mindful of his feelings but was at a loss of what to do when an unpredictable situation occurred.</p>

                <p className="paragraph-one">In addition to sharing personal stories about what it was like living with seasonal asthma, he spoke to the experiences of colleagues who had severe asthma. The insights gained from the interview challenged my assumptions and reframed my approach. I wondered...How can I make AMMA dependable in times of need so that users continue to return? How can I give users information about how they're doing and help them make a decision to take an action?</p>

                <h3 className="sub-header-one">Goals for AMMA Wireframes V2</h3>

                <ul className="list-one">
                    <li>Be intentional with the UI. Push users to focus on what should be done next and treat features differently accordingly.</li>
                    <li>Help users create a ritual and build habits, and think about the reward for doing so. What's at the end when I complete this or that action?</li>
                    <li>Give users information about how they're doing</li>
                </ul>
            </div>

            <div className="article-image full">
                <img src={require("../../assets/amma/AMMA-Wireframes-V2-Work-Flow.png")} alt="Wireframes V2" />
                <span className="image-caption">AMMA Workflow (Check-in and Emergency): Wireframes V2</span>
            </div>

            <div className="text-wrapper">
                <p className="paragraph-one">The default workflow evolved into a check-in workflow prompted upon signing in, AMMA would provide instructions on next steps based on the user's input. The home screen also gave information instead of remaining passive.</p>

                <p className="paragraph-one">From user testing and overall feedback, priorities for the next set of iterations were to eliminate distractions on the screen to create focus for the user. Because the app works in tandem with the wearable device, I wanted to bring the wearable device into the workflows. I also thought about the user's motivation behind each action and looked into fitness and health-tracking apps for reference.</p>

                <h3 className="sub-header-one">Goals for AMMA Wireframes V3</h3>

                <ul className="list-one">
                    <li>Eliminate distractions and create focus for the user</li>
                    <li>Convey how the wearable device triggers a use case</li>
                    <li>Make things faster and easier to do</li>
                </ul>
            </div>

            <div className="article-image full">
                <img src={require("../../assets/amma/AMMA-Wireframes-V3-workflow.png")} alt="Wireframes V3" />
                <span className="image-caption">AMMA Workflows (Check-in and Emergency): Wireframes V3</span>
            </div>

            <div className="text-wrapper">
                <h3 className="header-three">Brand Identity</h3>

                <p className="paragraph-one">Before moving onto the next set of iterations, I took a break to think about what the AMMA voice was like. To develop the AMMA voice, I considered the emotional needs and created a mood board to explore what it could be like. I kept in mind the brand adjectives given in the creative brief&mdash;friendly, innovative, memorable, intelligent, and reliable.</p>
            </div>

            <div className="article-image large">
                <img src={require("../../assets/amma/Mood-Board.png")} alt="Mood Board" />
                <span className="image-caption">Mood board comprised of views from other products</span>
            </div>

            <div className="text-wrapper">
                <p className="paragraph-one">A couple of themes and patterns emerged from this exercise. Against a neutral background, color was used to direct attention and as a means of expression. The soft pastel colors conveyed approachability, comfort, and a sense of safety. There was also a quality of lightness in the mood board that would work well with the AMMA concept of alleviating burden and diffusing tension for the user.</p>

                <p className="paragraph-one">Working from this mood board, I designed a style tile, sketched a few logo ideas before creating a final logo for the product line. I wanted color to accent and express but remain subdued overall as to create calmness and lightness.</p>
            </div>

            <div className="article-image large">
                <img src={require("../../assets/amma/Style-Tile-Logo.png")} alt="Style Tile and Logo" />
            </div>

            <div className="text-wrapper">
                <h3 className="header-three">Iterations and Testing Continued</h3>

                <p className="paragraph-one">After receiving feedback, I considered how I could build excitement into using AMMA, use typography expressively, and show impact of action taken.</p>

                <h3 className="sub-header-one">Goals for AMMA Wireframes V4</h3>

                <ul className="list-one">
                    <li>Continue to create focus on each screen with typography and hierarchy&mdash;fewer things means less options</li>
                    <li>Show impact of action taken</li>
                    <li>Use color to amplify the experience. Create a neutral background in which color is used to accent and express</li>
                </ul>
            </div>

            <div className="article-image full">
                <img src={require("../../assets/amma/AMMA-workflows-V4.png")} alt="Workflows V4" />
                <span className="image-caption">AMMA Workflows V4</span>
            </div>

            <div className="article-image full">
                <img src={require("../../assets/amma/AMMA-workflows-V5.png")} alt="Workflows V5" />
                <span className="image-caption">AMMA Workflow V5</span>
            </div>
            
            <div className="text-wrapper">
                <p className="paragraph-one">In this iteration, I began to think more about AMMA's stance in asking for permission on releasing sensitive matters such as medical records. Was it a better experience for the user to be asked in context of an action or up-front during onboarding? While this consideration was beyond the scope of the project, I decided that within the constraints of the project, AMMA would handle medical release upon installation and first launch.</p>

                <h3 className="header-three">Final Design</h3>

                <h3 className="sub-header-one">Goals for the Final Design</h3>

                <ul className="list-one">
                    <li>Re-think the timeline format to distinguish activities in the past and those that are active</li>
                    <li>Implement AMMA's stance on medical release</li>
                    <li>Create uniformity in the notification design</li>
                </ul>
            </div>

            <div className="article-image full">
                <img src={require("../../assets/amma/Final-Key-Screens-Annotations.png")} alt="Final Key Screens Annotations" />
                <span className="image-caption">Final Screens for AMMA Workflows</span>
            </div>

            <div className="text-wrapper">
                <h3 id="finalSection" className="header-three">Taking it Further</h3>

                <p className="paragraph-one">These key screens show how AMMA works in the main use cases identified early on, and is optimized for the returning user.</p>

                <p className="paragraph-one">Steps on how I would take this further:</p>

                <ul className="list-one">
                    <li>Build a prototype and have people suffering from asthma interact with it</li>
                    <li>Partner with doctors to understand how to best manage the patient-doctor relationship</li>
                    <li>Design the remaining use cases for a complete AMMA experience</li>
                    <li>Iterate and user test before handing it over for implementation</li>
                </ul>
            </div>
        </div>
    );
  }
}

export default AmmaPage;
