# Cadrage de la demande client

# Global

# Contexte 

## A propos de SIMPLON

Simplon est un réseau de fabriques numériques et inclusives, implanté en France et à l'international. Depuis 2013, plus de 30 000 apprenants ont été formés, dont 30 % de femmes et 46 % de personnes peu ou pas diplômées. En tant qu'entreprise sociale et solidaire, l'objectif de Simplon est de faire du numérique un levier d'inclusion, en révélant des talents sous-représentés dans le secteur digital et les métiers techniques. Simplon accompagne les organisations dans leur transformation numérique, en veillant à ce qu'elle soit inclusive. En parallèle, l'entreprise contribue également à la médiation numérique et à l'apprentissage créatif des technologies auprès des enfants.

## A propos de la communication et de discord

La communication est la pierre angulaire du fonctionnement de toute organisation. Dans le cas de Simplon s'assurer d'une communication fluide est cruciale aussi bien verticalement qu'horizontalement. La compléxité de la circulation peut être résumée dans le schéma simplifié ci-dessous.
![image](/./assets/img/schema-communication.png)
(la flèche en pointillés entreprises-Simplon est un objectif d'amélioration qui sera détaillé plus tard).<br>
Il est a noter que si la distance physique entre les divers centres de formation et entre les centres et les alumnis parait évidente, une autre distanciation apparait avec les formations ouvertes à distance, ce qui renforce encore le besoin d'un système de communication béton.<br>
Le plan a long terme est de former une communauté dans le but de créer du mentorat entre alumnis et apprenant et de créer un canal de recrutement pour les entreprises. Cela mettra de surcroit l'accent sur la collaboration et le partage qui sont des principes clés dans le monde du développement (l'un des meilleurs exemples est le principe de l'open source qui colle parfaitement au mindset des valeurs sus-nommées).<br>
Le choix d'une plate-forme de communication s'avère compliqué car il faut tenir compte de plusieurs critères. Discord, malgré ses défauts que nous détaillerons plus bas, a été le meilleur compromis pour sa gratuité, son agnosticisme de plate-forme ainsi que sa popularité.

# Objectifs stratégiques et opérationnels

## ♟️Stratégique♟️
- **Attirer les retruteurs:** l'aspect communautaire ouvrira une porte vers le marché caché de l'emploi. 
- **Rétention des membres:** Maitriser la qualité du contenu et créer un espace qui fleure bon le professionnalisme et la convivialité incitera les membres a ne pas quitter le serveur et à continuer a participer a la vie du serveur.
- **Image de marque de simplon:** Avec la prise de conscience du grand publique que le numérique est une voie forte d'accès a l'emploi et la multiplication des plateformes de formation en ligne, la compétition est féroce entre les prestataires qui offrent des formations. Cela se répercute sur la difficulté a remplir les groupes de promos ainsi que la répartition des bugdets dédiés a la formation. 
- **Attirer les pépites:** Héritage du précedent point, une bonne image de marque attirera plus facilement des talents (apprenants ou coach).
- **Ergonomie:** L'amélioration de l'experience utilisateur via l'egornomie ajoutée par les bots discord est un objectif stratégique qui va renforcer les autres points cités. 

## ⚙️Opérationnels⚙️
- **Fluidifier la transmition d'informations:** Une communication inéfficace compromet la transmition d'informations, ce qui peut entrainer par exemple une surchage de travail administrative.
- **Optimisation du temps de travail:** Les bots discord ont pour objectif d'automatiser tout ou partie des interactions entre membres (par exemple en simplifiant le rappel des non-signataires). Un gain de temps induit un gain de productivité.
- **Optimisation organisationnelle:** Les bots discord ont pour objectif de centraliser les opérations, ce qui permettra de gagner du temps et d'accroître la productivité.
- **Néo-méthodes de travail:** (Opportunité ou enjeux) Intégrer de nouvelles fonctionnalités, permettant de remplacer des outils existants ou de simplifier leur utilisation
- **Simplification de la gestion des groupes:** Les bots Discord permettent d'automatiser la création et la gestion des groupes, facilitant ainsi leur composition, leur suivi et leur réorganisation. Cette centralisation des tâches améliore l'efficacité et réduit les erreurs de gestion, tout en fluidifiant les processus internes.
- **Ergonomie:** L'amélioration de l'experience utilisateur via l'egornomie ajoutée par les bots discord est un objectif opérationel qui va renforcer les autres points cités. 

# Opportunités
- **Déploiement à plus grande échelle:** Pour le moment ce projet ne dépasse pas le spectre du groupe Simplon Haut-de-France. Un travail de qualité pourrait permettre de faire adopter ce projet au niveau national, voire international.
- **S'affranchir de certains outils surannés:** Certains outils représentent un frein au bon déroulement de l'apprentissage. En cas de succès de ce projet, nous pourrions éspérer voir fleurir de nouveaux projets dans la continuité de ceux ci (exemple: gerer les briefs et le suivi de l'apprentissage directement via discord)
- **L'open source:** De part leur nature précise, les différentes parties de se projet remedient a des problèmes qui n'ont pas de solutions a l'heure actuelle. Le travail effectué aurait une portée au dela du groupoe simplon.

# Problématiques

- **"discord-dépendance":** bah lààààààà ....
- **Communication:**
    - difficulté a trouver un membre précis dans la liste.
    - trop de channels, trop de threads
    
- **Discord n'est pas professionnel:**
    - gestion des membres: attribution de roles, pseudonymes, respect de la vie privée.
    - Biais dans l'utilisation de discord. 
- **User expérience compliquée:**
    - Le nombre de slash commands deviendra trop imposant



# Enjeux

# Contraintes
Discord n'est pas open source, les possibilités pour ajouter des features sont limités aux possibilités par l'api discord en matière de création de bots.
Discord représente un intermédiaire par qui vont transitter les données et à une sombre réputation sur sa politique de conservation des données.

# Contexte spécifique au Bot Signatature

AActuellement, lorsque les coachs doivent rappeler à un apprenant de signer, ils doivent rechercher manuellement le nom de la personne concernée, rendant le processus fastidieux et inefficace. Il devient donc essentiel de réfléchir à une solution pour simplifier cette démarche, particulièrement dans le cadre des formations ouvertes à distance.

# Objectif stratégique

#problematique 

le rappel de la signature est peu intuitif
    - le coach doit rechercher dans une longue liste de nombs pour rappeler un apprenant  a l'ordre
    - le coach peut oublier de lancer le code de la signature

Les problemes

<table>
    <tr>
        <td>Problématiques</td>
        <td>Problèmes</td>
        <td>Conséquences</td>
        <td>Solution</td>
    </tr>
    <tr>
        <td rowspan="5">Oubli de signatures</td>
        <td>Rattrapages</td>
        <td>Perte de temps</td>
        <td><a href="#">Aautomatisation des rappels</a></td>
    </tr>
    <tr>
        <td>Abense injustifiée</td>
        <td>Perte de rémunération</td>
        <td><a href="#">Automatisation des rappels</a></td>
    </tr>
    <tr>
        <td>Remise en cause du sérieux de Simplon</td>
        <td>Perte de financements
        </td>
        <td><a href="#">Automatisation des rappels</a></td>
    </tr>
    <tr>
        <td>Difficulté a cibler les apprenants</td>
        <td>Perte de temps <br> Risque d'oublis</td>
        <td><a href="#">Centraliser la promo</a></td>
    </tr>
    <tr>
        <td>Demander un envoi de signature au formateur</td>
        <td>Perte de temps <br> Risque d'oublis</td>
        <td><a href="#">Systeme de vote</a>
    </td>
    <tr>
        <td rowspan="2">Outils de signatures externes</td>
        <td>Outils différents</td>
        <td>Disperssion entre les plateformes</td>
        <td><a href="#">Centraliser les rappels de signatures</a></td>
    </tr>
    <tr>
        <td>Rattrapages officiels pass assez efficace</td>
        <td>Surcharge de travail administratif</td>
        <td><a href="#">Commande manuelle de notification(BTN)</a></td>
    </tr>
</table>
