const express = require('express');

const itineraryController = require('../controllers/itineraryController');
const authenticateToken = require('../helpers/auth');
// Il est prévu d'ajouter la validation des données via Joi et les schemas

const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

// Routes de récupération de tous les itinéraires et d'ajout d'itinéraire
router
  .route('/')
  .get(controllerHandler(itineraryController.findAll))
  .post(controllerHandler(itineraryController.new));

// Routes de récupération, de mise à jour ou de suppression d'1 itinéraire
router
  .route('/:id')
  .get(controllerHandler(itineraryController.findOne))
  .patch(controllerHandler(itineraryController.update))
  .delete(controllerHandler(itineraryController.delete));

module.exports = router;

/**
 * GET /itineraires
 * @summary Get all itineraries
 * @tags Itineraires - itinerary management
 * @return {Itinerary} 200 - itinerary object
 * @return {object} 404 - Input data invalid
 */

/**
 * POST /itineraires
 * @summary Send new word and get a itinerary
 * @tags Itineraires - itinerary management
 * @param {string} body.required - the first part of a sentence
 * @return {Itinerary} 200 - itinerary object
 * @return {object} 404 - Input data invalid

 */
/**
* GET /itineraires/{id}
 * @summary Get a one itinerary
 * @tags Itineraires - itinerary management
 * @param {string} id.path.required - the first part of a sentence
 * @return {Itinerary} 200 - itinerary object
 * @return {object} 404 - Input data invalid
 */
/**
 * PATCH /itineraires/{id}
 * @summary update one itinerary
 * @tags Itineraires - itinerary management
 * @param {number} id.path.required - the first part of a sentence
 * @return {Itinerary} 200 - itinerary object
 * @return {object} 404 - Input data invalid
 */
/**
 * DELETE /itineraires/{id}
 * @summary delete a one itinary
 * @tags Itineraires - itinerary management
 * @param {number} id.path.required - the first part of a sentence
 * @return {object} 404 - Input data invalid
 */
