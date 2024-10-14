# Bot Discord

# Table des matières
1. [Contexte](#)
1.1 [A propos de SIMPLON](#)
1.2 [La communication et le discord](#)
2. [Problématiques](#)
 
# Contexte 

## A propos de SIMPLON

Simplon est un réseau de fabriques numériques et inclusives, implanté en France et à l'international. Depuis 2013, plus de 30 000 apprenants ont été formés, dont 30 % de femmes et 46 % de personnes peu ou pas diplômées. En tant qu'entreprise sociale et solidaire, l'objectif de Simplon est de faire du numérique un levier d'inclusion, en révélant des talents sous-représentés dans le secteur digital et les métiers techniques. Simplon accompagne les organisations dans leur transformation numérique, en veillant à ce qu'elle soit inclusive. En parallèle, l'entreprise contribue également à la médiation numérique et à l'apprentissage créatif des technologies auprès des enfants.

## A propos de la communication et de discord

La communication est la pierre angulaire du fonctionnement de toute organisation. Dans le cas de Simplon, s'assurer d'une communication fluide est crucial, aussi bien verticalement qu'horizontalement. La complexité de la circulation peut être résumée dans le schéma simplifié ci-dessous.
![image](/./assets/img/schema-communication.png)
(la flèche en pointillés entreprises-Simplon est un objectif d'amélioration qui sera détaillé plus tard).<br>
Il est à noter que si la distance physique entre les divers centres de formation et entre les centres et les alumni paraît évidente, une autre distanciation apparaît avec les formations ouvertes à distance, ce qui renforce encore le besoin d'un système de communication béton.<br>
Le plan à long terme est de former une communauté dans le but de créer du mentorat entre alumni et apprenants et de créer un canal de recrutement pour les entreprises. Cela mettra de surcroît l'accent sur la collaboration et le partage qui sont des principes clés dans le monde du développement (l'un des meilleurs exemples est le principe de l'open source qui colle parfaitement au mindset des valeurs susnommées).<br>
Le choix d'une plate-forme de communication s'avère compliqué car il faut tenir compte de plusieurs critères. Discord, malgré ses défauts que nous détaillerons plus bas, a été le meilleur compromis pour sa gratuité, son agnosticisme de plate-forme ainsi que sa popularité.


# Problèmatiques

<table>gi
    <tr>
        <td>Problématiques</td>
        <td>Problèmes</td>
        <td>Conséquences</td>
        <td>Solution</td>
    </tr>
    <tr>
        <td rowspan="4">Oubli de signature</td>
        <td>Rattrapages</td>
        <td>Perte de temps</td>
        <td rowspan="2"><a href="#">Automatisation des rappels</a></td>
    </tr>
    <tr>
        <td>Absence injustifiée non légitime</td>
        <td>Manque à gagner</td>
    </tr>
    <tr>
        <td>Difficulté à cibler les apprenants</td>
        <td rowspan="2">Perte de temps <br> Risque d'oublis</td>
        <td><a href="#">Centraliser les groupes d'apprenants</a></td>
    </tr>
    <tr>
        <td>Demander un envoi de signature au formateur</td>
        <td><a href="#">Système de vote</a></td>
    </tr>
    <tr>
        <td rowspan="2">Outils de signature externes</td>
        <td>Outils différents</td>
        <td>Dispersion entre les plateformes</td>
        <td><a href="#">Centraliser les rappels de signatures</a></td>
    </tr>
    <tr>
        <td>Rappels officiels pas assez efficaces</td>
        <td>Surcharge de travail administratif</td>
        <td><a href="#">Commande manuelle de notification</a></td>
    </tr>
</table>

## Oubli de signature

### Automatisation des rappels

Après avoir enquêté sur la question des émargements d'un point de vue fonctionnel, il apparaît clairement que les opérations liées a la gestion des émargements entraîne des manipulations fastidieuses et répétitives.

L'intégration d'un bot discord permettra de simplifier et de centraliser les procédures liées aux questions de l'émargement en un seul point central: Discord.

Une gestion unifiée de l'émargement réduira les problèmes d'oublis de signature en instaurant un rituel simple et commun à tout le monde sur les procédures liées a l'émargement.

Le bot consiste en une simplification de la communication bi-latérale entre coach et apprenant sur le sujet de l'émargement: 
- Coach -> apprenant:
    - Notification de l'envoi de signature: Le bot permettra de notifier lorsque la fenêtre de signature est ouverte, avec un endroit déterminé où retrouver le code d'accés.
    - Notification du rappel: Le bot permettra d'envoyer un message privé aux apprenants qui auraient omis de signer.
- Apprenant -> coach:
    - Demander l'ouverture des signatures.

### Centraliser les groupes d'apprenants

Chez simplon un coach peut gérer plusieurs groupes d'apprenants, rendant ainsi difficile la recherche d'un apprenant en particulier dans la liste des membres discord.

Le bot discord offrira une possibilité simple et intuitive de contacter un ou plusieurs apprenants{méthode a définir avec le iencli}

### Système de vote

Simplon dispense de formations qui peuvent être intensives, ainsi apprenants comme coachs ont souvent la tête pleine de problèmes a résoudre ce qui induit un potentiel oubli de l'émargement du coté du coach. 

Pour remédier a cela nous avons pensé a l'implémentation via le bot discord d'une solution de vote permettant de notifier le coach qu'il doit lancer la procédure d'émargement.

## Outils de signature externes

### Outils d'émargements différents

La gestion de l'émargement est séparée sur deux plates formes différentes: SoWeSign et NetYparéo. Cela entraînne plus de manipulations parcequ'il faut changer de plate-forme d'un jour a l'autre selon la méthode d'émargment disponible pour le groupe.

L'intégration d'un bot discord permettra de centraliser une partie des opérations liées aux opérations de gestion de l'émargement, attenuant ainsi la pénibilité  de ces dernières. 

### Commande manuelle de notification

La gestion des notifications de rappels des apprenants sur les applications officielles est peu adaptée. En effet, quelque soit la plateforme, le rappel se fait par mail, ce qui n'est pas optimal.

Les retours collectés des coachs l'ayant déjà utilisé démontrent que le mail passe souvent inaperçu.

Par opposition, l'utilisation de discord est l'épicentre d'une journée de travail, en particulier dans le cadre des jours de formations ouvertes à distance, où discord est l'endroit où transite toute l'information. Il apparaît alors évident que si toute l'information passe par discord, ce dernier devient le canal de discussion de prédilection pour faire passer les notifications de signatures manquantes.

L'intégration d'un bot discord permettra d'avoir une solution simple et intuitive pour envoyer une notification a un ou plusieurs apprenants. 
# Personas

# Conclusion