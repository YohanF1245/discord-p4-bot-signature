# Spécifications fonctionnelles

Après entretien avec le client, nous avons pu dégager les spécifications fonctionnelles nécessaires au bon fonctionnement du bot.  
Le bot Discord "Signature" a pour vocation de fluidifier la communication pour les échanges liés à l'émargement. Les oublis de signatures présentant un réel risque de manque à gagner financier et entraînant une surcharge administrative, il est primordial d'apporter une solution visant à réduire les risques d'oublis.  
Les principaux utilisateurs finaux amenés à manipuler le bot sont les formateurs, les apprenants et les chargés de projets.  
Diverses contraintes s'opposent à nous, à commencer par les API des outils externes d'émargement inaccessibles. L'environnement Discord propose lui aussi son lot de contraintes liées aux possibilités restreintes de l'API Discord.

{Périmètre du projet?}{Objectifs stratégiques}{Principaux utilisateurs finaux}{Contraintes externes et internes}

## Processus métier :

Discord est l'outil de communication sélectionné par les centres Simplon Hauts-de-France. Il est utilisé par tout le personnel et les apprenants.  
Il y a deux solutions d'émargement selon si la formation est financée par la région (SoWeSign) ou non (NetYparéo).  
Il y a une disparité dans les systèmes d'exploitation : en grande majorité Mac ou Linux, Windows dans une plus faible proportion.  
Le groupe Simplon se scinde en plusieurs groupes par région. Les méthodes de fonctionnement peuvent légèrement différer d'une région à l'autre. L'utilisation d'un Discord communautaire est une méthode propre à la région Hauts-de-France, et la gestion des outils d'émargement est commune à toutes les régions.

## Exigences fonctionnelles de haut niveau : 

- Le bot crée automatiquement un message permettant aux apprenants de voter pour rappeler aux formateurs de lancer la procédure d'émargement au début de chaque demi-journée.

![image](/././assets/img/vote-student.png)

- Les chargés de projets peuvent utiliser une commande pour notifier un formateur de lancer la procédure d'émargement.

![image](/././assets/img/notify-teachers-command.png)

- Ensuite :
    - Le bot s'occupe d'envoyer un message privé au formateur pour lui rappeler de faire signer les apprenants.

![image](/././assets/img/notify-teachers-message.png)

- Les formateurs peuvent utiliser une commande pour lancer la procédure d'émargement. Ils peuvent ajouter un message supplémentaire (le code par exemple).

![image](/././assets/img/notify-student-command.png)

- Ensuite :
    - Le bot crée un message pour notifier les apprenants qu'ils peuvent signer.  
    - Le bot crée en plus un message pour générer une liste de boutons afin de sélectionner la liste des apprenants et leur envoyer une notification.  
        - Les formateurs peuvent cliquer sur un ou plusieurs boutons représentant un apprenant et valider pour leur envoyer un message privé qui leur indique qu'ils n'ont pas signé.

![image](/././assets/img/notify-student-message.png)

- À la fin de la demi-journée, le bot efface tous les messages du canal signature.<br>

## Configuration du bot :

- Le bot dispose d'une commande de démarrage.  
- Le bot dispose d'une commande d'arrêt globale.  
- Le bot dispose d'une commande d'arrêt spécifique à un canal/promo.  
- Le bot dispose d'une commande de redémarrage globale.  
- Le bot dispose d'une commande de redémarrage spécifique à un canal/promo.  
- Le bot dispose d'une pause globale.  
- Le bot dispose d'une commande de pause spécifique à un canal/promo pour une durée déterminée.

## Exigences non fonctionnelles :

- L'utilisation du bot doit être la plus accessible possible pour les apprenants (utilisation de boutons).  
- Les actions doivent nécessiter le moins de clics possibles.  
- Le bot doit permettre de centraliser au maximum les opérations.  
- Le bot doit être efficace pour notifier les parties concernées, sans pour autant devenir trop oppressant.  
- Le bot doit conserver le nombre de fois où chaque commande a été utilisée.  
- Le bot doit journaliser toutes les opérations (pour les statistiques et le débogage).  
- Le bot doit être capable de gérer automatiquement les nouvelles promos.  
- Le bot doit être capable de gérer automatiquement les nouvelles formations.  
- Le bot doit accorder le droit d'utiliser certaines commandes sous certaines conditions (exemple : le vote uniquement pour les rôles apprenant ET type de promo).  
- Le bot doit vérifier toutes les entrées utilisateur pour protéger la base de données des injections de commandes ou SQL.  
- **Performance** : le bot doit être performant sur un serveur VPS avec une petite configuration matérielle.  
- Le bot doit créer les premiers messages de vote dans les canaux signature afin d'éviter les problèmes de performance.
