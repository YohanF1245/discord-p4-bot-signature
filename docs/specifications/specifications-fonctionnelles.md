# Spécifactions fonctionnelles

Après entretien avec le client nous avons pu dégager les spécifications fonctionnelles nécécairre au bon fonctionnement du bot. 
Le bot discord signature a pour vocation de fluidifier la communication pour les échanges liés a l'émargement. Les oublis de signatures présentant un réél risque manque à gagner financier et entraînant une surchage administrative, il est primordial d'apporter une solution visant à reduire les risques d'oublis.
Les principaux utilisateurs finaux sont aménés a manipuler le bot sont les formateurs, les apprenants et les chargés de projets.
Diverses contraintes s'opposent a nous, à commencer par les api des outils externes d'émargement inacessibles. L'environnement discord propose lui aussi son lot de contraintes liées aux possiblités restraintes de l'api discord.

{Périmètre du projet?}{Ojbectis stratégique}{Principaux utilisateurs finaux}{Contraintes externes et internes}

processus métier :
Discord est l'outil de communication séléctionné par les centres Simplon Hauts de France. Il est utilisé par tout le personnel et les apprenants.
Il y a deux solutions d'émargements selon si la formation est financée par la région (SoWeSign) où nou (NetYparéo).
Il y a une disparité dans les systèmes d'exploitation: en grande majorité mac ou linux, windows dans une plus faible proportion.
Le groupe Simplon se scinde en plusieurs groupes par régions. Le méthodes de fonctionnement peuvent légérement différer d'une région a l'autre. L'utilisation d'un discord communautaire est une méthode propre à la région haut-de-france et la gestion des outils d'émargement est commune à toutes les régions.

Exigences fonctionnelles de haut niveau: 
- Le bot créé automatique un message permettant aux apprenants de voter pour rappeller aux formateurs de lancer la procédure d'émargement au début de chaque demi journées.

![image](/././assets/img/vote-student.png)

- Les chargés de projets peuvent utiliser une commande pour à un formateur de lancer la procédure d'émargement.

![image](/././assets/img/notify-teachers-command.png)

- ensuite: 
    - le bot s'occupe d'envoyer un message privé au formateur pour lui rappeller de faire signer les apprenants.

![image](/././assets/img/notify-teachers-message.png)

- Les formateurs peuvent utiliser une commande pour lancer la procédure d'émargement. Il peuvent ajouter un message supplémentaire (le code par exemple).

![image](/././assets/img/notify-student-command.png)

- ensuite:
    - le bot créé un message pour notifier les apprenants qu'ils peuvent signer. 
    - le bot créé en plus un message pour générer une liste de boutons pour selectioner la liste des apprenants et leur envoyer une notification.
        - Les formateurs peuvent cliquer sur un ou plusieurs boutons représentant un apprentant et valider pour leur envoyer un message privé qui leur indique qu'il n'ont pas signé.

![image](/././assets/img/notify-student-message.png)

- A la fin de la demi journée, le bot efface tout les messages du canal signature.

Configuration du bot?

Exigences non fonctionnelles:
- L'utilisation du bot doit etre la plus accessible pour les apprenants (utilisation de boutons)
- Le bot doit permerttre de centraliser au maximum les opérations.
- Le bot doit etre efficace pour notifier les parties concernées, sans pour autant devenir trop oppressant.