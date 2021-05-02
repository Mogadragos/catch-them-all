# catch-them-all

Julien CAILLAUD / Clément GOMEZ

https://catch-them-all-nfc-pwa.netlify.app/

## Disclaimer 

Aucune compétence disponible dans le domaine graphique merci de votre compréhension.

## Qu'est-ce que c'est ?

Catch them all est un outil permettant d'ajouter une valorisation ludique à des événements tels que des portes ouvertes ou encore des visites, mais peut aussi être utiliser dans des jeux à part entière, comme des escape games ou des chasses au trésor.

## Comment ça marche ?

Dans un premier temps l'utilisateur scan une puce NFC pour signifier le départ de la recherche des autres balise NFC.
Pour rechercher ces balises, un "Radar" est à disposition qui indique la distance des balises les plus proches.
Une fois une balise trouvée, il suffit de la scanner pour avoir l'information disponible.
Pour recommencer une nouvelle recherchée sur une série de balises, il faut aller dans le menu paramètre et choisir l'option ' Réinitialiser l'activité. '
Un menu libraire permet de revoir le contenue des balises trouver.

## L'avenir de Catch them all

Un mode administrateur permettra de créer ses propres listes de contenu pour les puces NFC et de les injecter par la suite, lors de l'enregistrement, la position du téléphone est sauvegarder et ensuite associer à la puce. Les informations des puces seront enregistrées dans une base de données.
Une seconde amélioration est de mettre une carte géographique à disposition, permettant de voir les zones de recherche disponible, afin d'étendre la zone de jeu. Cette amélioration remplacera le système de radar.
Prévoir des récompenses pour avoir fini de trouver toutes les puces ou autre accomplissement.


## Documentation technique

### Initialisation 

Appuyer sur initialiser vos puces, cela permet d'associer les données au puces. Puis rafraichir la page.

### Components

- ActivityContent

    Composant au coeur de l'activité, il permet l'affichage et la gestion des trois *StylaxButton* principaux (Scan, Radar et Bibliothèque) et l'affichage de leurs *Modal* respectives: *ModalNfc*, *ModalMap* et *ModalLibrary*, ainsi que de la Modale de confirmation de lecture d'une puce, *ModalNfcConfirmation*.

- Admin

    WIP: Interface Administrateur permettant l'association des puces avec leurs données et leur localisation.

- AppContent

    Affichage de début d'une activité, il comprend le bouton de lancement *LaunchButton* et charge le composant *ActivityContent*.

- HeaderHelp

    Header, bouton des paramètres et chargement du menu des paramètres *ParamsMenu*.

- LaunchButton

    Bouton de lancement de l'application, il gère également le *StylaxButton* de changement d'activité si une activité est déjà en cours, ainsi que la *ModalNfc* du premier scan.

- Modal

    Popup modulable, on peut faire varier son z-index ("couche d'affichage"), sa largeur, sa largeur max, sa hauteur, la présence d'un bouton de fermeture en haut, les marges verticales de son bouton de fermeture, le texte du bouton de fermeture, et le titre de la modal.

- ModalLibrary

    Popup d'affichage de la bibliothèque, elle prend tout l'espace de l'écran et contient la liste des puces découvertes. Si le lien de la puce est une image, affichage l'image, sinon, affiche le lien cliquable.

- ModalMap

    Popup d'affichage du Radar, elle comprend une animation, ainsi que les distances par rapport aux 5 puces les plus proches.

- ModalNfc

    Popup d'affichage du Scanner NFC, elle comprend une animation, ainsi que la gestion du NFCService effectuant le scan. Ce composant émet le numéro de série de la puce scannée.

- ModalNfcConfirmation

    Popul d'affichage des données associées à la puce scannée. Si le lien de la puce est une image, affichage l'image, sinon, affiche le lien cliquable.

- ParamsMenu

    WIP : Menu déroulant des paramètres.
    - - Admin: Accès à l'interface utilisateur via un code de connexion fourni
    - - Mail: Envoi par mail de toutes les données relatives à l'activité, ainsi que la liste des puces détectées.
    - - Réinitialiser l'activité: Efface de l'appareil toutes les données relatives à l'activité.
    - - Crédits: Affichage des coordonnées des créateurs de l'application.

- StylaxButton

    Modèle de bouton stylisé au texte variable.

### Services

- GeolocService

    Gestion de la localisation et calcul des distances

- NFCService

    Lecture des puces NFC

- StorageService

    Sauvegarde des puces, association avec les données et vérification lors de la lecture.
    WIP: utiliser une base de données.

### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

#### Lints and fixes files
```
npm run lint
```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
