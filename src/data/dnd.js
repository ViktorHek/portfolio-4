const testingShit = function testingShit() {
  console.log("shit");
};
const dnd = {
  title: "My DnD Character",
  html: (
    <div className="content">
      <p>
        <strong>Name:&nbsp;</strong> Kichtor Sonson
      </p>
      <p>
        <strong>Class:&nbsp;</strong> Kichtor Sonson
      </p>
      <fieldset>
        <p>inside field</p>
      </fieldset>
      <p>
        <strong>Name:&nbsp;</strong> Kichtor Sonson
        <button onClick={() => testingShit()}>click</button>
      </p>
    </div>
  ),
};

export default dnd;
