import React, { useState } from "react";

const RegistrationBike = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [description, setDescription] = useState("");

  const handleOnsubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form>
      <label for="brand">Quelle est la marque de votre moto *</label>
      <input
        id="brand"
        type="text"
        placeholder="marque de la moto"
        onChange={(e) => setBrand(e.target.value)}
      />

      <label for="model">Quel est le modèle de votre moto *</label>
      <input
        id="model"
        type="text"
        placeholder="modèle"
        onChange={(e) => setModel(e.target.value)}
      />

      <label for="description">Description de votre moto </label>
      <input
        id="description"
        type="text"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={handleOnsubmit} disabled={brand === "" || model === ""}>
        valider
      </button>
    </form>
  );
};

export default React.memo(RegistrationBike);
