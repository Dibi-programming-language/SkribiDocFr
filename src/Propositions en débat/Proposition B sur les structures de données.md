
# Proposition B sur les structures de données

Dans cette proposition, les nombreux débats rouverts par `StartKingz` sont revus afin de suggérer une façon de gérer les données en Skribi.

Certaines parties sont indépendantes. Proposition rédigée par `Alexiscomete`.

## Pointeurs

Un pointeur permet aux variables de partager des valeurs et de modifier une même valeur pour plusieurs éléments du programme.

Dans cette proposition, les pointeurs ne sont pas développés. Il est simplement considéré qu'ils existent, comme dans tous les langages, et qu'ils ne sont pas totalement implicites étant donné que le langage est compilé.

## Point sur les ensembles

Le principe des ensembles est de fournir un stockage de base.

Le stockage se fait d'une manière sélectionnée par le compilateur.

Un ensemble a plusieurs opérations de base liées au contenu.

On fait la différence entre les ensembles théoriques et concrets, comme dans ma proposition précédente

Je ne reviens pas sur les ensembles théoriques, car cette proposition concerne les structures de données concrètes.

Commençons.

## Au départ

Il est possible de créer un ensemble :

```skribi
{<elements>}
```

Il suffit de séparer les éléments par des virgules.

Un ensemble contient un type, l'ensemble est alors de type `<type_contenu> kropis`. Le compilateur sélectionne toujours le type le plus restrictif, mais il est possible d'enlever des restrictions avec `@ <type_contenu>` après l'ensemble.

Le type n'est pas limité à des choses classiques. Il est possible de stocker (par exemple) :
- Des classes avec le type `kat`
- Des fonctions avec le type `ums`
- N'importe quoi avec un type à définir
- Des ensembles

Un ensemble de classes est aussi un type valide. De même, un ensemble d'éléments peut être un type valide et restreindre les possibilités. Il faut pour cela utiliser un modèle sur lequel nous reviendrons plus tard.

Le compilateur se charge d'optimiser ces derniers types, mais moins le type est restreint moins l'optimisation est garantie !

Il est aussi possible de choisir la restriction de l'ensemble avec un petit sucre syntaxique si celui-ci est créé directement au moment d'une création de variable, avec `<type_contenu> kropis`.

## Les opérations arrivent

Si les opérations classiques existent, il manque encore leur modification, qui n'est pas forcément possible. Notons aussi la possibilité qu'il n'existe pas une unicité des éléments.

Deux symboles / mots clés sont introduits. De manière arbitraire, `~` permet d'ajouter ou de supprimer des éléments à un ensemble. De plus, `#` permet d'autoriser les doublons.

Les symboles se placent avec la déclaration de l'ensemble, et `~` se place avant `#` si les deux sont présents (exemples ici) :

```skribi
~#{<éléments>}
```

OU

```skribi
<type_contenu>~#kropis <nom> {<éléments>}
```
## Passage en argument

Le `~` change le comportement du passage en argument.

Si l'ensemble a une taille fixe, il est possible de passer l'ensemble en argument de toute fonction qui demande un ensemble avec un contenu moins restrictif, en plus du type exacte. L'arbre des restrictions ne sera pas forcément unique, étant donné que l'implémentation des ensembles risque de ne pas être la même pour tout les types, il faudra donc préciser cette partie.

Si le `~` est présent, le passage en argument se fait uniquement si le type est identique. Il est cependant possible de le passer en argument si l'argument a un type de taille fixe compatible. A condition que l'implémentation le permette, il faudrait proposer un type optimisé et un type non optimisé je pense. Avec le type optimisé, la conversion n'est pas possible, mais c'est possible avec celui non optimisé car c'est derrière une implémentation quasiment identique à celui à taille variable.

Pour conclure cette partie, il faudra creuser le sujet des conversions. Et je risque de ne pas avoir été très clair.

## En route vers les listes

Au départ, je voulais proposer l'idée des variants. C'est finalement pour moi une idée obsolète.
