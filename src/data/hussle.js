const hussle = {
  title: "Design",
  html: (
    <div className="content">
      <h2 style={{ textAlign: "center" }}>The styling behind this portfolio.</h2>
      <br />
      <p>
        The core theme is "gamification". I find normal portfolios quite boring and wanted to create
        something fun. Given that this portfolio is a representation of me, the rest of the styling
        decisions are based on personal preference.
      </p>
      <br />
      <fieldset>
        <legend className="title-s">Doodles</legend>
        <p>
          The doodles represent me. Like all other humans, I have many sides, but most of them are
          quite similar, and most of them are feeling okay. There is a message behind my art. It's
          okay to just feel okay. When we ask each other how we feel, "just okay" is seen as a
          negative response that calls for a follow-up question. The background is a happy, colorful
          image and only one of the characters is smiling. This is the idea. Not being happy is not
          the same as being sad. and I want to express that.
        </p>
      </fieldset>
      <br />
      <fieldset>
        <legend className="title-s">Windows</legend>
        <p>
          The pop-up windows are inspired by Windows 3.1 and is a representation of how my mind
          works. Cluttered, unorganized but packed with ideas, projects and information that
          interest me. Some windows might seem random and out of place. But this is (for better or
          worse) what occupies my mind every single day.
        </p>
        <p>
          And yes, I always have a ton of tabs open. The user's ability to minimize and move the
          windows around is to imitate my structuring process. it's possible, you just have to put
          in a little bit of work.
        </p>
        <p>
          There is very little styling when it comes to everything inside these windows. That's a
          flex. Very few people can design something that looks good with HTML. I take pride
          in being one of those few.
        </p>
        <p>
          Fun fact: I had an idea to add a function that opens a random window at random intervals.
          But desided it would be to annoying for the user
        </p>
      </fieldset>
      <br />
      <fieldset>
        <legend className="title-s">Game</legend>
        <p>
          The idea is stolen from a game developer. They created a open world game with characters
          the player can interact with to learn about the creator. Till this day, that's the best
          portfolio I have ever seen. Do to my lack of a game engine, I had to use my creativity to
          create something similar.
        </p>
        <p>
          The doodles was suposed to just be a background image. I fiddled around and found out that
          a group of SVGs can be targeted by a onClick event. That's when I relized I could use my
          background as a world and my doodles as characters.
        </p>
      </fieldset>
    </div>
  ),
};

export default hussle;
