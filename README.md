Instructions
=

Le but de l'exercice ici est principalement de construire un breadcrumb, c'est-à-dire un élément servant de fil rouge pour indiquer à l'utilisateur où il se trouve dans le site.

Pour cela vous disposez de la librairie UI semantic-ui-react, et de données qui reflètent à peu près ce que nous utilisons sur notre produit.

## Les zones:

Les zones sont une abstraction dans notre modèle de données qui nous permet de représenter une partie de l'infrastructure d'un client industriel. Ainsi, il peut avoir une zone de niveau (`zoneLevel` dans les données) 1 à n, les zones de niveau 1 représentant un site industriel par exemple. Puis niveau 2: Bâtiments, niveau 3: Salles, etc.

## Les scénarios:

Les scénarios sont les tutoriels que nous permettons aux utilisateurs de construire afin d'aligner, étape par étape, les instructions nécessaires afin de mener à bien une opération de maintenance avec le HoloLens directement sur le terrain. **Ils sont contextualisés par la salle (zone)** où ils se déroulent et par les machines avec lesquelles il sera nécessaire d'interagir (mais on verra ça plus tard ;) )

## L'objectif

L'objectif est donc ici de construire une navbar faite d'un breadcrumb afin d'indiquer à l'utilisateur dans quel contexte se déroule son scénario, ou juste lui indiquer où il se trouve (si jamais il n'est pas sur un scénario mais simplement dans une salle).

L'idée est aussi qu'en naviguant grâce à ce breadcrumb, l'élément visé se retrouve dans la vue principale.

Si jamais vous avez des idées de fonctionnalités additionnelles ou un meilleur design n'hésitez pas non plus ;)
