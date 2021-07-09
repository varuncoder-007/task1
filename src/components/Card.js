import React from "react";
import "./Card.css";
import Checkbox from "@material-ui/core/Checkbox";

function Card() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="card">
      <div className="card__top">Exam Logo</div>
      <div className="card__content">
        <h3>NAME OF THE EXAM</h3>
        <div className="checkbox_content">
          <Checkbox
            checked={checked}
            onChange={handleChange}
            size="small"
            color="black"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <p>69 Full Test</p>
        </div>
        <div className="checkbox_content">
          <Checkbox
            checked={checked}
            onChange={handleChange}
            size="small"
            color="black"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <p>129+ tests</p>
        </div>
      </div>
      <div className="card__bottom">
        <button>View all tests</button>
        <button className="success">BUY NOW</button>
        <button className="mock">Attempt Free Mock</button>
      </div>
    </div>
  );
}

export default Card;
