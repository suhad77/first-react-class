import Hello from './Hello';
import Accordion from './Accordion';
const App = () => {
  return(
    <div>
      <Accordion 
        heading="Tell Me About Yourself"
        text="This question seems simple, so many people fail to prepare for it, but it’s crucial. Here's the deal: Don’t give your complete employment (or personal) history. Instead, give a pitch—one that’s concise and compelling and that shows exactly why you’re the right fit for the job. Muse writer and MIT career counselor Lily Zhang recommends using a present, past, future formula. Talk a little bit about your current role (including the scope and perhaps one big accomplishment), then give some background as to how you got there and experience you have that’s relevant. Finally, segue into why you want—and would be perfect for—this role."
      />
      <Accordion 
        heading="How Did You Hear About This Position?"
        text="Another seemingly innocuous interview question, this is actually a perfect opportunity to stand out and show your passion for and connection to the company. For example, if you found out about the gig through a friend or professional contact, name-drop that person, then share why you were so excited about the job. If you discovered the company through an event or article, share that. Even if you found the listing through a random job board, share what, specifically, caught your eye about the role."
      />
      <Accordion 
      heading= "Why Do You Want to Work at This Company?"
      text="Beware of generic answers! If what you say can apply to a whole slew of other companies, or if your response makes you sound like every other candidate, you’re missing an opportunity to stand out. Zhang recommends one of four strategies: Do your research and point to something that makes the company unique that really appeals to you; talk about how you’ve watched the company grow and change since you first heard of it; focus on the organization’s opportunities for future growth and how you can contribute to it; or share what’s gotten you excited from your interactions with employees so far. Whichever route you choose, make sure to be specific. And if you can’t figure out why you’d want to work at the company you’re interviewing with by the time you’re well into the hiring process? It might be a red flag telling you that this position is not the right fit."
      />
      <Accordion 
        heading="Why Do You Want This Job?"
        text= "Again, companies want to hire people who are passionate about the job, so you should have a great answer about why you want the position. (And if you don’t? You probably should apply elsewhere.) First, identify a couple of key factors that make the role a great fit for you (e.g., “I love customer support because I love the constant human interaction and the satisfaction that comes from helping someone solve a problem”), then share why you love the company (e.g., “I’ve always been passionate about education, and I think you’re doing great things, so I want to be a part of it”)."
      />
      <Accordion
        heading="Why Should We Hire You?"
        text="This interview question seems forward (not to mention intimidating!), but if you’re asked it, you’re in luck: There’s no better setup for you to sell yourself and your skills to the hiring manager. Your job here is to craft an answer that covers three things: that you can not only do the work, but also deliver great results; that you’ll really fit in with the team and culture; and that you’d be a better hire than any of the other candidates."
      />
      <Accordion
        heading= "What Can You Bring to the Company?"
        text= "When interviewers ask this question, they don’t just want to hear about your background. They want to see that you understand what problems and challenges they’re facing as a company or department as well as how you’ll fit into the existing organization. Read the job description closely, do your research on the company, and make sure you pay attention in your early round interviews to understand any issues you’re being hired to solve. Then, the key is to connect your skills and experiences to what the company needs and share an example that shows how you’ve done similar or transferable work in the past."
      />
      <Accordion 
        heading="What Are Your Greatest Strengths?"
        text="Here’s an opening to talk about something that makes you great—and a great fit for this role. When you’re answering this question, think quality, not quantity. In other words, don’t rattle off a list of adjectives. Instead, pick one or a few (depending on the question) specific qualities that are relevant to this position and illustrate them with examples. Stories are always more memorable than generalizations. And if there’s something you were hoping to mention because it makes you a great candidate, but you haven’t had a chance yet, this would be the perfect time."

      />
      <Accordion 
        heading="What Do You Consider to Be Your Weaknesses?"
        text="What your interviewer is really trying to do with this question—beyond identifying any major red flags—is to gauge your self-awareness and honesty. So, “I can’t meet a deadline to save my life” is not an option—but neither is “Nothing! I’m perfect!” Strike a balance by thinking of something that you struggle with but that you’re working to improve. For example, maybe you’ve never been strong at public speaking, but you’ve recently volunteered to run meetings to help you get more comfortable when addressing a crowd."
      /> 
      <Accordion 
        heading="What Is Your Greatest Professional Achievement?"
        text="Nothing says “hire me” better than a track record of achieving amazing results in past jobs, so don’t be shy when answering this interview question! A great way to do so is by using the STAR method: situation, task, action, results. Set up the situation and the task that you were required to complete to provide the interviewer with background context (e.g., “In my last job as a junior analyst, it was my role to manage the invoicing process”), then describe what you did (the action) and what you achieved (the result): “In one month, I streamlined the process, which saved my group 10 person-hours each month and reduced errors on invoices by 25%.”"
      /> 
      <Accordion 
        heading="Tell Me About a Challenge or Conflict You’ve Faced at Work, and How You Dealt With It."
        text="You’re probably not eager to talk about conflicts you’ve had at work during a job interview. But if you’re asked directly, don’t pretend you’ve never had one. Be honest about a difficult situation you’ve faced (but without going into the kind of detail you’d share venting to a friend). “Most people who ask are only looking for evidence that you’re willing to face these kinds of issues head-on and make a sincere attempt at coming to a resolution,” former recruiter Richard Moy says. Stay calm and professional as you tell the story (and answer any follow-up questions), spend more time talking about the resolution than the conflict, and mention what you’d do differently next time to show “you’re open to learning from tough experiences.”"
      /> 
    </div>
  )
}
export default App;