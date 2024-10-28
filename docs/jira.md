# E1 Interactions apprenants
- E1us2 : En tant qu'apprenant, je souhaite utiliser un bouton pour lancer un vote afin de créer le vote qui permet d'alerter le formateur qu'il a oublié de faire signer les apprenants.
    - Créer le squelette du message
    - Créer le label du message
    - Sélectionner la promo d'où vient l'action
    - Récupérer la liste des formateurs liés à la promo
    - Créer un bouton pour chaque formateur
    - Créer un bouton inactif par défaut qui permet de valider la création du vote
    - Si un formateur est sélectionné, rendre actif le bouton
    - L'action sur le bouton envoie un message dans le canal de la promo pour alerter la promo qu'ils peuvent voter à l'aide d'un tag @promo
- E1us2 : En tant qu'apprenant, je souhaite pouvoir voter afin d'alerter le formateur qu'il a oublié de faire signer les apprenants.
    - Créer le vote (discord poll)
    - Récupérer le formateur sélectionné
    - Comptabiliser le nombre de votants
    - Au bout de trois votes, envoyer un message privé au formateur sélectionné.

# E2 Interactions formateurs
- E2us1 : En tant que formateur, je souhaite avoir accès à un bouton afin de pouvoir notifier aux apprenants de mon groupe qu'ils peuvent signer.
    - Créer le squelette du message
    - Créer le label du message
    - Sélectionner la promo d'où vient l'action
    - Créer le bouton pour envoyer l'action
    - Créer l'envoi du message dans le channel associé à la promo à l'aide d'un tag @promo
- E2us2 : En tant que formateur, je souhaite avoir accès à une interface dédiée afin de pouvoir rappeler un ou n apprenants qu'ils peuvent signer.
    - Créer le squelette du message
    - Créer le label du message
    - Sélectionner la promo d'où vient l'action
    - Récupérer la liste de tous les apprenants
    - Créer un bouton pour chaque apprenant de la promo
    - Créer un bouton pour valider l'envoi des messages
    - Récupérer la liste de tous les apprenants sélectionnés
    - Envoyer un message privé aux apprenants sélectionnés

# E3 Interaction administrateur
- E3us1 : En tant qu'administrateur, je souhaite avoir accès à des commandes afin de configurer le bot signature.
    - Créer la commande de démarrage du bot
    - Créer la commande d'arrêt du bot
    - Créer la commande de pause du bot
    - Créer la commande de redémarrage du bot
