import React from "react";

import CheckboxProton from "../checkBox/CheckboxProton";
import SliderProton from "../sliderInput/SliderProton";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FilterPanel = ({
  selectedDistance,
  changeDistance,
  regions,
  changeChecked,
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
  </div>
);

export default FilterPanel;
