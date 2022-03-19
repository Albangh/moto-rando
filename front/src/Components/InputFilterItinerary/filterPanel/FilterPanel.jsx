import React from "react";

import CheckboxProton from "../checkBox/CheckboxProton";
import SliderProton from "../sliderInput/SliderProton";
import FilterListCurve from "../filterListCurve/FilterListCurve";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ratingList = [
  {
    id: 1,
    value: "1",
    label: "1🏍️",
  },
  {
    id: 2,
    value: "2",
    label: "2🏍️",
  },
  {
    id: 3,
    value: "3",
    label: "3🏍️",
  },
  {
    id: 4,
    value: "4",
    label: "4🏍️",
  },
  {
    id: 5,
    value: "5",
    label: "5🏍️",
  },
];

const FilterPanel = ({
  selectedDistance,
  changeDistance,
  regions,
  changeChecked,
  selectedRating,
  changeRating,
}) => (
  <div>
    <div className="input-group">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            Où souhaitez-vous vous balader ?
            <span className="important"> *</span>{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={"span"} variant={"body2"}>
            {regions.map((region) => (
              <CheckboxProton
                key={region.id}
                region={region}
                changeChecked={changeChecked}
              />
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    <div className="input-group">
      <p className="label-range">Distance de la balade</p>
      <SliderProton value={selectedDistance} changePrice={changeDistance} />
    </div>
    <div className="input-group">
      <p className="label">Sinuosité des routes</p>
      <FilterListCurve
        options={ratingList}
        value={selectedRating}
        selectToggle={changeRating}
      />
    </div>
  </div>
);

export default FilterPanel;
