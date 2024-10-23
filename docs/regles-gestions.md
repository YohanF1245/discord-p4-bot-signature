# Règles de gestion

## Automatisation de la création et de la suppression des messages
- ### Création de message
    - Le bot à besoin de l'autorisation de créer des messages dans le Discord.
    - Le bot doit créer un message pour proposer le vote de rappel au formateur dans chaque canal une fois le matin et une fois l'après-midi. 

- ### Suppression de message
    - Le bot à besoin de l'autorisation de supprimer des messages dans le Discord.
    - Le bot doit supprimer chaque message dans les canaux signature à la fin de chaque demi-journée de cours.

## Rappeler à un formateur qu'il a oublié de faire signer les apprenants
- Les chargés de projets ou les formateurs peuvent contacter les formateurs via une commande.  
- Les apprenants peuvent signaler aux formateurs qu'ils ont oublié de lancer la procédure d'émargement via un vote. 
- Il faut trois votes pour que le vote soit un succès.
- En cas de succès d'un vote le bot contacte les formateurs par message privé.

## Envoi d'un message pour signaler aux apprenants qu'ils peuvent signer
- Le bot doit posssèder l'autorisation d'envoyer des messages dans le fil signature.
- Le bot doit posssèder l'autorisation de tagger les promos dans un message.
- Le formateur a accès à une commande pour annoncer au groupe qu'il doit signer.
- Cette commande prend en paramètre un message contenant par exemple le code de signature ou un lien.
- Cette commande peut s'utiliser sans paramètre, dans ce cas seul le paneau pour rappeller à l'ordre les son-signataire est généré.
- Le bot envoie un message dans le fil signature en taggant la promo associée au canal en leur indiquant qu'ils peuvent signer ainsi que le message du formateur.
- Cette commande génère un message éphèmere visible uniquement par celui qui à utilisé la commande.

## Rappel à l'ordre des non-signataires
- Le message contient une liste de bouttons représentant la liste toute les apprenants de la promo liés a ce canal.
- Ces bouttons ont deux états (activé/non activé).
- Le bot récupère une la liste de tout les apprenants via les bouttons selectionnés.
- Le bot contacte les apprenants selectionés par message privé pour leur signalé qu'ils n'ont pas signé.

## Structuration de l'organisation

- Un formateur est lié à une ou plusieurs promotions.  
- Une promotion est liée à un ou plusieurs formateurs.  
- Un apprenant suit une formation à la fois.  
- Une promotion regroupe plusieurs apprenants.  
- Un apprenant appartient à une promotion.  
- Une promotion a un chargé de projets.  
- Un chargé de projets a une ou plusieurs promotions.  
- Une formation peut être dispensée dans un ou plusieurs centres.  
- Un centre peut proposer une ou plusieurs formations. 

# Données nécéssaires au bot
- Le bot doit avoir accès à la liste des formateurs.  
- Le bot doit avoir accès à la liste des formations.  
- Le bot doit avoir accès à la liste des promotions.  
- Le bot doit avoir accès à la liste des apprenants.  
- Le bot doit avoir accès à la liste des chargés de projets.  
- Le bot doit avoir accès à l'ID Discord des utilisateurs.  
- Le bot doit avoir accès à l'ID des canaux Discord des promotions.  
- Le bot doit avoir accès à l'ID des fils Discord de signature.  

## Journalisation et statistiques
- Le bot enregistre chaque fois qu'un utilisateur fait appel à lui dans un journal.  
- Les statistiques sont conservées de la manière suivante :
    - Quelle commande a été utilisée.
    - Quel utilisateur à lancé la commande.
    - A quelle date à été lancée la commande.
    - A quel l'utilisateur la commande est-elle destinée.
- L'affichage des 
- Le système permet un tableau avec une liste des mauvais signeurs.
- Cette liste peut être filtrée par promo.
- Cette liste peut être filtrée par période de temps.
- Le système permet de générer un graphique en barre pour avoir un appercu visuel des incidents.
- Le graphique peut afficher des statistiques globales ou être filtrée par promo
- Le graphique possède prend en ordonnée le nombre d'incidents et en abscisse les jours de la semaine.
- Les types d'incidents affichables sont: 
    - Le nombre de fois où la commande de rappel au formateur a été utilisée.
    - Le nombre de fois où la commande de rappel à un apprenant a été utilisée.
    - Le nombre de fois où le vote de rappel au formateur s'est soldé par un succès.


## Configuration du bot

- Le bot enregistre l'état (démarré/arrêté/pause).
- Le bot dispose d'une fonction de redémarrage.
- L'arrêt du bot peut se faire à l'échelle globale ou pour des canaux spécifiques
- La mise en pause du bot peut se faire à l'échelle globale ou pour des canaux spécifiques
- Le bot enregistre la durée prévue de la mise en pause pour se réactiver automatiquement à la fin de la période.
