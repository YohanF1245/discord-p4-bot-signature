let str = `# Règles de gestion

## Configuration du bot
- Le bot possède une fonctionnalité pour s'arrêter.
- Le bot possède une fonctionnalité pour démarrer.
- Le bot possède une fonctionnalité pour redemarrer.
- Le bot possède une fonctionnalité pour créer un message dans le thread signature du channel des promos qui gère l'interface de vote (RGx a RGy).
- Le bot possède une fonctionnalité pour créér un message dans le thread signature du channel des promos qui gère l'interface de rappel de signature (RGx à RGy).
- Le bot possède une fonctionnalité pour créér un message dans le thread signature du channel des promos qui gère l'interface notification que les apprenants peuvent signer (RGx à RGy).
- Le bot possède une fonctionnalité pour créer les trois messages d'un coup
- Le bot possède une fonctionnalité pour créer les messages dans plusieurs threads signature d'un coup
- Le bot possède une fonctionnalité pour créer les messages dans tout les thread signature d'un coup (pour l'initialisation du bot)

## Rappeller a un formateur qu'il a oublié de faire signer
- Le message prend la forme d'un vote.
- Le message contient une liste de boutons.
- Il y a un bouton par formateur de la promo.
- Les boutons ont deux états: actif et inactif.
- Un seul bouton peut être actif à la fois.
- Activer un bouton désactive les autres
- Il faut un bouton actif pour lancer le vote.
- Il y a un bouton pour démarrer le vote.
- Il faut trois votes pour que le vote soit un succès.
- Dès que le vote est un succès le bot envoie un message privé au formateur pour l'avertir qu'il doit autoriser les apprenants à signer.

## Prévenir les apprenants qu'ils peuvent signer
- 

## Rappeller a un apprenant qu'il a oublié de signer
- Le message est lié à un channel de promo.
- Le message contient une liste de boutons.
- Seul les formateurs peuvent interragir avec les boutons.
- Il y a un bouton par apprenant de promo.
- Les boutons on deux états: actif et inactif.
- Plusieurs boutons peuvent etre actifs en meme temps
- Il y a un bouton pour valider l'envoi des rappels.
- Lorsqu'un rappel est validé le bot dresse une liste d'apprenants a notifier selon l'état activé des bouttons.
- Les apprenants sélectionnés sont notifiés par message privé.


## Journalisation
- Le bot enregistre chaque fois qu'un utilisateur fait appel à lui dans un journal.  
- Le journal écrit les informations de la manière suivante :
    - A quelle date à été lancée la commande.
    - Quel utilisateur à lancé la commande.
    - Quelle commande a été utilisée.
    - A quel l'utilisateur la commande est-elle destinée.

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
- Le bot doit avoir accès à l'ID des fils Discord de signature. `;

let count = 1; 
let result = '';
let previousChar = '';
for (let i = 0; i < str.length; i++) {
    if (str[i] === '#') {
      if (previousChar !== '#') {
        result += `<br>#`;
      } else {
        result += '#'; 
      }
    } else if (str[i] === '-' && str[i + 1] === ' ') {
      result += `<br>- R.G ${count}: `; 
      count++;
      i++;
    } else {
      result += str[i]; 
    }
    
    previousChar = str[i];
  }

document.getElementById("result").innerHTML = result;


