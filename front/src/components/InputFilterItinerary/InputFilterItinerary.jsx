import React, { useEffect, useState } from "react";


import CardItinerary from "../CardItinerary/CardItinerary";
import FilterPanel from "./filterPanel/FilterPanel";
import EmptyView from "./emptyView/EmptyView";

import "./inputFilterItinerary.scss";
import { Button } from "@material-ui/core";

const InputFilterItinerary = ({ data }) => {
  const [selectedDistance, setSelectedDistance] = useState([20, 2000]);

  const [resultsFound, setResultsFound] = useState(true);
  const [itinerary, setItinerary] = useState(data);


  const [regions, setRegions] = useState([
    { id: 1, checked: false, label: "Auvergne-Rhône-Alpes" },
    { id: 2, checked: false, label: "Bourgogne-Franche-Comté" },
    { id: 3, checked: false, label: "Bretagne" },
    { id: 4, checked: false, label: "Centre-Val de Loire" },
    { id: 5, checked: false, label: "Corse" },
    { id: 6, checked: false, label: "Grand Est" },
    { id: 7, checked: false, label: "Hauts-de-France" },
    { id: 8, checked: false, label: "Île-de-France" },
    { id: 9, checked: false, label: "Normandie" },
    { id: 10, checked: false, label: "Nouvelle-Aquitaine" },
    { id: 11, checked: false, label: "Occitanie" },
    { id: 12, checked: false, label: "Pays de la Loire" },
    { id: 13, checked: false, label: "Provence-Alpes-Côte dAzur" },
  ]);

  const handleChangeDistance = (event, value) => {
    setSelectedDistance(value);
  };


  const handleChangeCheckedDistrict = (id) => {
    const districtStateList = regions;
    const changeCheckedDistrict = districtStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setRegions(changeCheckedDistrict);
  };

  const applyFilters = () => {
    let updatedData = data;


    const districtsChecked = regions
      .filter((item) => item.checked)
      .map((item) => item.label);

    if (districtsChecked.length) {
      updatedData = updatedData.filter((item) =>
        districtsChecked.includes(item.districts[0].district_name)
      );
    }


    const minDistance = selectedDistance[0];
    const maxDistance = selectedDistance[1];

    updatedData = updatedData.filter(
      (item) =>
        item.itinerary_kilometer >= minDistance &&
        item.itinerary_kilometer <= maxDistance
    );

    setItinerary(updatedData);

    !updatedData.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDistance, regions]);

  const [isCrescent, setIsCrescent] = useState();
  const [isHighway, setIsHighway] = useState(false);

  const handleChangeUp = (e) => {
    e.preventDefault();
    setIsCrescent(false);
  };
  const handleChangeDown = (e) => {
    e.preventDefault();
    setIsCrescent(true);
  };

  const handleChangeHighwayYes = (e) => {
    e.preventDefault();
    setIsHighway(false);
  };
  const handleChangeHighwayNo = (e) => {
    e.preventDefault();
    setIsHighway(true);
  };


  return (
    <div>
      <h2 className="itinerary__title">RECHERCHE DE BALADE MOTO</h2>
      <div>
        <FilterPanel
          selectedDistance={selectedDistance}
          changeDistance={handleChangeDistance}
          regions={regions}
          changeChecked={handleChangeCheckedDistrict}
          data={data}
        />
      </div>
      <div className="filter-btn">
        <div className="filter-btn-changeFilter">
          <div>
            <p>Trier par</p>
            <Button size="small" variant="contained" onClick={handleChangeUp}>Longue distance</Button>
            <Button size="small" variant="contained" onClick={handleChangeDown}>Petite distance</Button>
          </div>

          <div>
            <p>
              Trier par <span>*</span>
            </p>
            <Button size="small" variant="contained" onClick={handleChangeHighwayYes}>Éviter l'autoroute</Button>
            <Button size="small" variant="contained" onClick={handleChangeHighwayNo}>Avec autoroute </Button>
          </div>
        </div>
      </div>
      <div>
        <div className="container__card">
          {resultsFound ? (
            itinerary
              .filter((highway) => {
                if (isHighway === false) {
                  return highway.is_highway === false;
                } else {
                  return highway.is_highway === true;
                }
              })
              .sort((a, b) => {
                if (isCrescent) {
                  return a.itinerary_kilometer - b.itinerary_kilometer;
                } else {
                  return b.itinerary_kilometer - a.itinerary_kilometer;
                }
              })
              .map((item) => (
                <CardItinerary
                  key={item.itinerary_id}
                  map={item.pictures[0].pic_link}
                  title={item.itinerary_title}
                  description={item.itinerary_description}
                  district={item.districts[0].district_name}
                  id={item.itinerary_id}
                  user={item.user_alias}
                  kilometer={item.itinerary_kilometer}
                  highway={item.is_highway}
                  hours={item.itinerary_hour}
                  minutes={item.itineray_minute}
                  longitude={item.districts[0].district_longitude}
                  latitude={item.districts[0].district_latitude}
                  zoom={item.districts[0].district_zoom}
                  trace={item.itinerary_trace}
                />

              ))
          ) : (
            <div className="empty">
              <EmptyView />
              <Button variant="disabled" color="error">
                Aucune balade trouver
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(InputFilterItinerary);