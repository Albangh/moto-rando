BEGIN;

INSERT INTO "district" ("name", "latitude", "longitude", "zoom")
VALUES
('Auvergne-Rhône-Alpes', 45, 5, 6),
('Bourgogne-Franche-Comté', 47, 5, 6),
('Bretagne', 48, -2, 6),
('Centre-Val de Loire', 47, 2, 6),
('Corse', 42, 9, 6),
('Grand Est', 48., 5, 6),
('Hauts-de-France', 49, 2, 6),
('Île-de-France', 48, 2, 6),
('Normandie', 49, 0, 6),
('Nouvelle-Aquitaine', 45, 0, 6),
('Occitanie', 43., 1, 6),
('Pays de la Loire', 48, 0, 6),
('Provence-Alpes-Côte dAzur', 44, 5, 6),
('Toute la France', 47, 2, 6);

INSERT INTO "user" ("alias", "email", "password", "presentation")
VALUES
('marc13', 'm.mammmrc@email.fr', '$2b$10$IzG.uHBC1e73YX7AJZxRLODjFYjbMxSXHKznCrMYrJPFv/kn676rG', 'Venant de Narbonne je suis passioné d emoto depusi tout petit'),
('fabio22', 'q.fabimmmo@email.com', '$2b$10$IzG.uHBC1e73YX7AJZxRLODjFYjbMxSXHKznCrMYrJPFv/kn676rG', 'Salut je suis fabio je viens de Rome et je suis arrivé en France depuis 5 ans, quel beau pays !'),
('johanne005', 'z.johmmman@yahoo.pt', '$2b$10$Mp5CAkKzDdFSWlwgBIZm3eYI46KN8ywfm7edEqAvg3YERM6iqKmje', 'bonjour, je suis de gap , il me tarde de découvrir de nouvelles routes de montagnes'),
('jeanjean00006', 'harlmmeydu77@gmail.com', '$2b$10$ZaWEOcTpCNRY83./p0evmev3FBMHPL1xCWM36Eo0yeKek4Ctauje6', ' salut, motard regulier je pars en balade tout les weeks end'),
('maurice13200', 'popeymme13@gmail.com', '$2b$10$/1V85CxsfGd4hJLQH8Fc0.w2hSeQEJuKcKmjZi1UDddwgyuF5vPo.', 'Salut, jeanjean motard depuis 35 ans jai participé au paris dakard en 91 et maintenant je cherche des petites balades sympa près de Nice'),
('keKe93', 'kevinbmmg7@gmail.com', '$2b$10$oi10rWV8Qwphtk2C2X4J0.IVHGXCrG6.t0EBDeHMI8idFKrus3nDW', 'Hello, kevin de paris, jadore me ballader la nuit au coeur de paris à fond!');

INSERT INTO  "motorbike" ("brand", "model", "description", "user_id")
VALUES
('KTM', '790 Duke', 'Full origine, ma moto est la version noir et orange, avec un ajout de liseret orange sur les jantes', 1),
('Honda', 'CBR900RR', 'Moto Vintage, avec déco HRC, pot Devil et commandes reculées', 2),
('Kawasaki', 'Z900', 'Serie spécial 50th anniversary, Total look rouge', 3),
('harley davidson', 'sportster s', 'La Sportster™ S ouvre le premier chapitre d’un tout nouveau livre de la saga Sportster. Descendante d’une lignée apparue en 1957 qui a dominé la compétition, cette nouvelle-née a été repensée pour balayer les normes d’aujourd’hui.', 5),
('Yamaha','R1M','model de course', 6),
('Harley Davidson','road king','un petit bijou couleur métallique', 4);

INSERT INTO "itinerary" ("title", "description", "hour", "minute", "highway", "kilometer", "curve", "trace", "district_id", "user_id")
VALUES
('circuit par les gorges du Verdon', 'En partant de Palut sur verdon, profitez des gorges du verdon en revenant par la route de la crete et le super restaurant du chalet de la maline',  02, 30, FALSE, 206, 3, NULL , 13 ,1),
('saintes maries de la mer', 'venez découvrir le village des saintes marie de la mer lieux de pélerinage des gens du voyage au coeur de la camargue!', 00, 45, FALSE , 30, 3, NULL, 13, 6),
('abaye de frigolet', 'Depuis Avignon, Venez découvrir cette manifique abbaye du XIIe siècle dans un vallon sauvage au milieu des pins', 01, 00, FALSE , 30, 3 , NULL , 13, 4),
('Montpellier-Toulouse', 'Roadtrip, à faire sur plusieurs jours entre amis, de montpellier à toulouse en passant par Narbonne, Carcassonne, et castelnaudary. Un plaisir pour les yeux et pour les papilles!', 02, 49, TRUE, 250, 1, NULL, 11, 3),
('Vin de la vallée du rhone', 'En partant de beaume de venise, suivez la route des grands vin de la vallée du rhone', 48, 00, TRUE , 300, 2 , NULL , 13, 2),
('Mont saint michel', 'balade autour du lac de brennilis, avec magnifique vu sur le mont saint michel', 02, 00, FALSE , 50, 3 , NULL , 3, 1),
('Villages en Alsace', 'Découvrir les plus beaux village en Alsace ', 02, 00, FALSE , 180, 3 , NULL , 6, 1),
('les dunes du pilat', 'Depuis Arcachon tout en suivant la mer découvrez les Dunes du Pilat', 01, 30, FALSE , 100, 3 , NULL , 10, 5),
('Au coeur de la corse', 'En partant par ajaccio passez par corte et calvi pour un roadtrip au coeur de la Corse (attention aux coup de fusil) ', 05, 00, FALSE , 450, 3 , NULL , 5, 5),
('Les monuments Parisiens', 'tour eiffel, notre dame, arc de triomphe, louvre ... touts les monuments parisiens ', 05, 00, FALSE , 450, 3 , NULL , 8, 6);

COMMIT;
