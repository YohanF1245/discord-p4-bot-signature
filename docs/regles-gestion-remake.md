# Règles de gestion

## Configuration du bot
- Le bot possède une fonctionnalité pour s'arrêter.
- Le bot possède une fonctionnalité pour démarrer.
- Le bot possède une fonctionnalité pour redémarrer.
- Le bot possède une fonctionnalité pour créer un message dans le thread signature du channel des promos qui gère l'interface de vote (RGx à RGy).
- Le bot possède une fonctionnalité pour créer un message dans le thread signature du channel des promos qui gère l'interface notification que les apprenants peuvent signer (RGx à RGy).
- Le bot possède une fonctionnalité pour créer un message dans le thread signature du channel des promos qui gère l'interface de rappel de signature (RGx à RGy).
- Le bot possède une fonctionnalité pour créer les trois messages d'un coup.
- Le bot possède une fonctionnalité pour créer les messages dans plusieurs threads signature d'un coup.
- Le bot possède une fonctionnalité pour créer les messages dans tous les threads signature d'un coup (pour l'initialisation du bot).

## Rappeler à un formateur qu'il a oublié de faire signer
- Le message est lié à un channel de promo.
- Le message prend la forme d'un vote.
- Le message contient une liste de boutons.
- Il y a un bouton par formateur de la promo.
- Les boutons ont deux états : actif et inactif.
- Un seul bouton peut être actif à la fois.
- Activer un bouton désactive les autres.
- Il faut un bouton actif pour lancer le vote.
- Il y a un bouton pour démarrer le vote.
- Il faut trois votes pour que le vote soit un succès.
- Dès que le vote est un succès, le bot envoie un message privé au formateur pour l'avertir qu'il doit autoriser les apprenants à signer.

## Prévenir les apprenants qu'ils peuvent signer
- Le message est lié à un channel de promo.
- Le message possède un bouton.
- Seuls les formateurs peuvent utiliser le bouton.
- Le message est envoyé directement dans le thread signature.
- La promo est notifiée via un tag @.
- Le bot peut sauvegarder l'ID du message.
- Le bot peut supprimer le message quand il n'est plus utile.

## Rappeler à un apprenant qu'il a oublié de signer
- Le message est lié à un channel de promo.
- Le message contient une liste de boutons.
- Seuls les formateurs peuvent interagir avec les boutons.
- Il y a un bouton par apprenant de la promo.
- Les boutons ont deux états : actif et inactif.
- Plusieurs boutons peuvent être actifs en même temps.
- Il y a un bouton pour valider l'envoi des rappels.
- Lorsqu'un rappel est validé, le bot dresse une liste d'apprenants à notifier selon l'état "activé" des boutons.
- Les apprenants sélectionnés sont notifiés par message privé.

## Journalisation
- Le bot enregistre chaque fois qu'un utilisateur fait appel à lui dans un journal.
- Le journal écrit les informations de la manière suivante :
    - À quelle date a été lancée la commande.
    - Quel utilisateur a lancé la commande.
    - Quelle commande a été utilisée.
    - À quel utilisateur la commande est-elle destinée.

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

# Données nécessaires au bot
- Le bot doit avoir accès à la liste des formateurs.
- Le bot doit avoir accès à la liste des formations.
- Le bot doit avoir accès à la liste des promotions.
- Le bot doit avoir accès à la liste des apprenants.
- Le bot doit avoir accès à la liste des chargés de projets.
- Le bot doit avoir accès à l'ID Discord des utilisateurs.
- Le bot doit avoir accès à l'ID des canaux Discord des promotions.
- Le bot doit avoir accès à l'ID des fils Discord de signature.
