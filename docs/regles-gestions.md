# Règles de gestion

## Automatisation du bot
- ### 1 Créer le vote pour notifier les formateurs qu'ils ont oublié de faire signer les apprenants (début de cours, le matin et l'après midi)
    - 1.1 Récupérer la liste de toutes les promos
    - 1.2 Itérer sur la liste des promos
        - 1.2.1 Sélectionner une promo
        - 1.2.2 Sélectionner le canal associé à une promo
        - 1.2.3 Sélectionner le fin associé a ce cal
        - 1.2.4 Créer un vote
            - 1.2.4.1 Ajouter le titre du vote
            - 1.2.4.2 Ajouter l'option pour voter

- ### 2 Effacer les messages de la demi journée, à la fin de la demi journée de cours
    - 2.1 Récupérer la liste des promos
    - 2.2 Itérer sur la liste des promos
        - 2.2.1 Sélectionner une promo
        - 2.2.2 Sélectionner le channel associé à une promo
        - 2.2.3 Sélectionner le fil signature de ce channel
        - 2.2.4 Appeller la méthode de suppression des messages
        - 2.2.5 Tenter de selectionner le dernier messages
            - 2.2.5.1 S'il reste au moins un message dans le channel
            - 2.2.5.2 Sélectionner le dernier message
            - 2.2.5.3 Supprimer le message séléctionné
            - 2.2.5.4 Appeller la méthode de suppression de messages

- ### 3 Utiliser le vote pour notifier les formateurs qu'ils ont oublié de signer
    - 3.1 Surveiller le nombres de votants
    - 3.2 Si le nombre de votants est supérieur ou égal à 3
        - 3.2.1 Sélectionner la promo qui à réussi le vote
        - 3.2.2 Séléctionner les mortanteurs associés à la promo
        - 3.2.3 Itérer sur la liste des formateurs
            - 3.2.3.1 Sélectionner un formateur
            - 3.2.3.2 Envoyer un message prvié au formateur

- ### 4 Register la commande pour notififier les apprenants qu'ils ont oublié de signer
    - 4.1 Définir l'attribut "name"
    - 4.2 Définir l'attribut "description"
    - 4.3 Définir les options
        - 4.3.1 Définir l'attribut "name"
        - 4.3.2 Définir l'attribut "description"
        - 4.3.3 Définir l'attribut required à false

- ### 5 Utiliser la commande pour notifier les apprenants qu'ils peuvent signer
    - 5.1 Lire dans quelle promo la commande à été utilisée
    - 5.2 Sélectionner le channel de la promo 
    - 5.3 Sélectionner le fil signature
    - 5.4 Tenter de lire le message passé en paramètre par le formateur
         - 5.4.1 Créer un message dans le channel avec le paramètre passé par le formateur si il a entré un message en écrivant un message dans le fil et en mentionnant la prommo
         - 5.4.2 Créer un message générique pour signaler à tout les apprenants qu'il peuvent signer en écrivant un message dans le chan mentionnant la promo dans le fil
         - 5.4.3 Lire l'ID discord du message créé
         - 5.4.4 Enregistrer l'id du message créé
    - 5.5 Créer l'embed avec l'interface de notification des apprenants
        - 5.5.1 Créer les boutons pour sélectionner les apprenants
        - 5.5.2 Créer les boutons pour valider le rappel apprenant

- ### 6 Utiliser l'embed pour prévenir les apprenants qu'ils ont oublié de signer
    - 6.1 Récuperer l'id des apprenants sélectionnés via les boutton (checkbox)
    - 6.2 Itérer sur la liste des apprenants séléctionnées
        - 6.2.1 Sélectionner un apprenant
        - 6.2.2 Envoyer un message à l'apprenant sélectioné

- ### 7 Register la commande pour notifier les formateurs
    - 7.1 Définir l'attribut "name"
    - 7.2 Définir l'attribut "description"
    - 7.3 Définir les options
        - 7.3.1 Définir l'attribut "name"
        - 7.3.2 Définir l'attribut "description"
        - 7.3.3 Récupérer la liste des formateurs
        - 7.3.4 Créer l'array des choices
            - 7.3.4.1 Récupérer la liste des formateurs
            - 7.3.4.2 Itérer sur la liste des formateurs
                - 7.3.4.2.1 Sélectionner un formateur
                - 7.3.4.2.2 Récupérer le nom du formateur
                - 7.3.4.2.3 Attribuer le nom formateur à "name"
                - 7.3.4.2.4 Récupérer l'id du formateur
                - 7.3.4.2.5 Attribuer l'id du formateur à value"
            - 7.3.4.3 Définir l'attribut required à true

- ### 8 Utiliser la commande pour notifier les formateurs
    - 8.1 Lire l'identifiant discord de l'utilisateur qui a utilisé la commande
    - 8.2 Lire le nom choisi par l'utilisateur de la commande
    - 8.3 Récupérer l'id discord du formateur via la commande
    - 8.4 Sélectionner le formateur correspondant a la l'id du formateur
    - 8.5 Envoyer un message privé au formateur qui est identifié via l'id séléctionnée
    - 8.6 Renvoyer un message pour avertir que la commande à bien été éxecutée
-----


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
