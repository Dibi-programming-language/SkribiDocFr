
# Proposition B sur les structures de données

Dans cette proposition, les nombreux débats rouverts par `StartKingz` sont revus afin de suggérer une façon de gérer les données en Skribi.

Certaines parties sont indépendantes. Proposition rédigée par `Alexiscomete`.

## Pointeurs

Un pointeur permet aux variables de partager des valeurs et de modifier une même valeur pour plusieurs éléments du programme.

Dans cette proposition, les pointeurs ne sont pas développés. Il est simplement considéré qu'ils existent, comme dans tous les langages, et qu'ils ne sont pas totalement implicites étant donné que le langage est compilé.

## Point sur les ensembles

Le principe des ensembles est de fournir un stockage de base, une première collection de données. Je parle ici des ensembles au sens mathématique : un regroupement d'éléments non ordonnés. C'est aussi le sens le plus commun en informatique.

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
- Des ensembles.

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

Si l'ensemble a une taille fixe, il est possible de passer l'ensemble en argument de toute fonction qui demande un ensemble avec un contenu moins restrictif, en plus du type exacte. L'arbre des restrictions ne sera pas forcément unique, étant donné que l'implémentation des ensembles risque de ne pas être la même pour tous les types, il faudra donc préciser cette partie.

Si le `~` est présent, le passage en argument se fait uniquement si le type est identique. Il est cependant possible de le passer en argument si l'argument a un type de taille fixe compatible. À condition que l'implémentation le permette, il faudrait proposer un type optimisé et un type non optimisé, je pense. Avec le type optimisé, la conversion n'est pas possible, mais c'est possible avec celui non optimisé, car c'est derrière une implémentation quasiment identique à celui à taille variable.

Pour conclure cette partie, il faudra creuser le sujet des conversions. Et je risque de ne pas avoir été très clair.

## En route vers les listes - Première rencontre avec les dictionnaires

Au départ, je voulais proposer l'idée des variants, et l'appliquer dans la plupart des cas. C'est finalement pour moi une idée obsolète pour les listes.

Cependant, l'idée reste correcte pour les hashmap !

En effet, une hashmap / un dictionnaire va avoir un principe similaire aux ensembles.

// TODO !!

## Arrivée dans un village

Reprise d'une bonne partie d'une autre proposition. Je parle ici de "village", car je souhaite parler de nombreuses structures !

Dans ce village, je me concentre si ce qu'on appelle souvent les "listes". Je considère donc : les structures de données ordonnées, dont les éléments ont un type défini et dont l'accès peut se faire à n'importe quel emplacement. Par la suite, je parlerai de "village" et de "maison" afin de faire plus court.

Il existe deux variables importantes dans le but de définir un élément du village (une maison) : est-ce qu'il est possible d'ajouter / supprimer des éléments ? est-ce qu'il est possible de modifier des éléments ?

À partir de ces deux questions, nous pouvons construire quatre maisons / structures de données de base, de type "liste".

| Nom en fonction du type de "liste" | Taille variable | Taille constante |
| ---------------------------------- | --------------- | ---------------- |
| Éléments variables (= muable)      | Liste / list    | Tableau / array  |
| Éléments constants (= immuable)    | Nom inconnu     | Nom inconnu      |

Les noms ont été sélectionnés de manière arbitraire, et un nom Dibi sera le plus souvent utilisé afin de couvrir toutes les particularités d'une structure.

Nous pouvons ici reprendre nos deux symboles : `~` pour le principe de taille variable, et `#` pour le principe de mutabilité.

Exemples :

```skribi
~#[<éléments>]
```

OU

```skribi
<type_contenu>~#[] <nom> [<éléments>]
```

On garde alors le symbole classique `[]`

Notons qu'étant donné que les ensembles utilisent la syntaxe `{}`, les scopes ne peuvent pas l'utiliser. Il s'ensuit que la structure la plus proche est la maison immuable et à taille constante. Les scopes sont donc maintenant notés avec des `[]`.

### Ordre et répétition des symboles

L'ordre et la répétition des symboles peuvent compter pour l'implémentation !

Exemples :
- `~#` : L'ajout en temps constant est plus important que la modification en temps constant
- `#~` : La modification et l'accès en temps constant est plus important que la modification en temps constant
- `~` : L'ajout est plus important que l'accès
- `~~` : L'ajout ET l'accès doivent être optimisés (= arbre de recherche)

Ceci est sera soumis au vote plus tard, je pense. C'est en effet en bêta.

### Voyage en montgolfière

Il est possible de faire des maisons de maisons en enchaînant la syntaxe. Exemple : `~#[]~#[]`

Si on souhaite avoir une structure plus compacte, je propose de donner la possibilité de faire comme en C# : `~#[,]`. Toutes les lignes / colonnes doivent alors avoir la même longueur !

### Type défini et taille définie

Il est ici aussi possible d'utiliser le `@` pour changer le type.

Pour définir une taille (pour remplir plus tard une maison de taille fixe), il faut indiquer un nombre entre les `[]` du type ou juste après le `@`. Les éléments doivent alors pouvoir être `null`.

## La montagne des modèles et les tuples

On arrive à un passage original !

Il est possible de déclarer de nouveaux types à partir d'une maison / d'un ensemble, on parle alors de modèle.

Syntaxe d'un modèle :

```skribi
kurti <nom> <type>
```

On peut aussi voir ceci comme des alias.

Le type peut être une structure de donnée de base :
- Un ensemble de types permet de dire qu'une donnée de type "nom" est alors en réalité une donnée d'un des types de l'ensemble.
- Une maison permet de créer des tuples.

Quoi qu'il arrive à la maison ou à l'ensemble après qu'un modèle est créé, le modèle ne sera pas modifié.

Il est possible d'utiliser des parenthèses afin d'aller plus vite dans la création des tuples.

De plus, le type d'un tuple est aussi indiqué avec des parenthèses si on veut. Mais il faut dans ce dernier cas utiliser un symbole spécial : le `$`.

Exemple :

```
$(int a, int b) ab (5, 4)
```

Ainsi, la syntaxe pour créer une fonction peut devenir :

```
ums abc$() [

]
```

Mais je pense qu'on peut éviter le `$` dans cette situation.

## La grotte des classes

À partir d'un ensemble abstrait de variables, il est possible de créer une classe !

```skribi
// CLASSE
kat Nom {
	// ENSEMBLE
	// Déclaration classique des classes
}
```

Pour le constructeur, il ne peut pas faire partie de la classe !! 
