const dnd = {
  title: "My DnD Character",
  html: (
    <div className="content">
      <p>
        <strong>Name:&nbsp;</strong>Kichtor Sonson
      </p>
      <br />
      <p>
        <strong>Level:&nbsp;</strong>3
      </p>
      <br />
      <p>
        <strong>Class:&nbsp;</strong>Warlock - Great Old One
      </p>
      <br />
      <p>
        <strong>Race:&nbsp;</strong>Lightfoot Halfling
      </p>
      <br />
      <p>
        <strong>Background:&nbsp;</strong>Noble
      </p>
      <br />
      <p>
        <strong>Pact Boon:&nbsp;</strong> Pact of the Tome
      </p>
      <br />
      <fieldset id="lang" name="lang">
        <legend className="title-s">Eldritch Invocations</legend>
        <ul>
          <li>Shroud of Ulban</li>
          <li>Agonizing Blast</li>
        </ul>
      </fieldset>
      <br />
      <fieldset id="lang" name="lang">
        <legend className="title-s">Skills</legend>
        <ul>
          <li>Arcana</li>
          <li>Deception</li>
          <li>History</li>
          <li>Persuasion</li>
        </ul>
      </fieldset>
      <br />
      <fieldset id="lang" name="lang">
        <legend className="title-s">Abilitys</legend>
        <ul>
          <li>STR - 8</li>
          <li>DEX - 15</li>
          <li>CON - 14</li>
          <li>INT - 12</li>
          <li>WIS - 10</li>
          <li>CHA - 16</li>
        </ul>
      </fieldset>
      <br />
      <fieldset id="lang" name="lang">
        <legend className="title-s">Spells</legend>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div>
            <p style={{ fontStyle: "italic" }}>Cantrips</p>
            <ul>
              <li>Eldritch Blast</li>
              <li>Minor Illusion</li>
            </ul>
          </div>
          <div style={{ marginLeft: "20px" }}>
            <p style={{ fontStyle: "italic" }}>Spells</p>

            <ul>
              <li>Expeditious Retreat</li>
              <li>Unseen Servant</li>
            </ul>
          </div>
        </div>
      </fieldset>
      <br />
      <fieldset id="lang" name="lang">
        <legend className="title-s">Backstory</legend>
        <p>
          Kichtor grew up in a life of luxury but was also quite separated from the rest of the
          world. His family owned a small case and made money scamming other towns and cities for
          generations. Kichtors great, great grandfather built a castle with his own hands (and
          magic). He did this for the sole purpose of creating his currency, woopies. The woopie
          currency has no real value and very low production costs. So the Sonson family does
          international trading with it for personal use and to resell to other towns.
        </p>
        <p>
          Kichtors father always told him about political and financial power. He used to say "Us
          halflings might be small, but our might is big!". But Kichtor doesn't want power, he wants
          knowledge.
        </p>
        <p>
          One day when Kichtor was in the library, he found a dusty book that he hadn't seen before.
          It was called "The Great Old One: the things mortals will never understand".
        </p>
        <p>
          Kichtors world was turned upside down when he learned about Cthulhu, Azathoth and (most
          importantly) Yog-Sothoth. No mortal has witnessed Yog-Sothoth and lived to tell the tale.
          Kichtor was going to be the first. Yog-Sothoth is a being that represents the entire
          universe and everything in it, so Kichtor came up with a theory.
        </p>
        <p>
          The reason why you die if you meet Yog-Sothoth is because your mind can't handle it. But
          if you see everything, you do everything and you understand everything. Nothing will be
          able to break your mind. Or that's what Kichtor believes anyway.
        </p>
        <p>
          So he goes on a journey to see, do and understand everything in the universe in order to
          meet his god.
        </p>
      </fieldset>
    </div>
  ),
};

export default dnd;
