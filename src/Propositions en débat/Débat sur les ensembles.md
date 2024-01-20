
# Débat sur les ensembles

## Résumé du débat jusqu'au 11/11/2023

Le débat a été ouvert suite à un autre débat. Le résumé commence au tout début.

Ce débat a pour objectif initial de s'inspirer des maths afin de créer un nouveau système de programmation orientée objet.

Très vite, un premier problème apparait. Les ensembles sont soient finis soit infinis en mathématique. Donc, tous les ensembles ne peuvent pas être représentés dans la mémoire de l'ordinateur.

Une différence est alors proposée entre les petits ensembles et les gros ensembles, mais n'est pas développée. Dans cette proposition, il est aussi évoqué le fait de connaitre toutes les *instances* d'un ensemble.

Il est alors évoqué qu'un ensemble peut aussi être considéré comme une liste de conditions, ou ensemble fini de conditions, comme en mathématiques. Il faudrait alors un ensemble sur lequel se baser pour créer le nouvel ensemble.

Le "pour tout" est aussi évoqué comme un moyen de parcourir les ensembles, mais ce n'est pas convaincant. Une contre-proposition est de pouvoir convertir les ensembles en listes.

Une personne interroge aussi sur l'utilité de manipuler des ensembles.

Une autre personne propose de faire la distinction entre :
- les ensembles (`Kropi` en Dibi)
- les fonctions (`Umsi` en Dibi)
- les instances (`Coi` en Dibi)

Il est alors nécessaire de créer des définitions pour ces notions dans le cadre du Skribi.

Pour les ensembles, la définition mathématique est proposée.

Pour les fonctions, une définition par le graphe d'une fonction est proposée étant donné que cela permet de revenir à la notion d'ensemble.

Il est alors évoqué qu'une instance est en réalité une fonction qui associe à un nom une fonction.

Malheureusement, la notion de `k-uplet` arrive avec les graphes. Plus précisément des couples.

Mais dans tous les cas, le potentiel débloqué est immense.

Il est alors proposé d'avoir des fonctions définies par un graphe et des fonctions classiques afin de palier le problème des graphes infinis. Les graphes seraient le cas particulier des classiques.

Il est proposé de nommer ce paradigme "Programmation Orientée Ensembles". Ou langage orienté ensembles.

Il est rappelé qu'une différence entre bloc de code et bloc d'ensemble doit alors avoir lieu.

Une remarque est alors faite, qu'un ensemble de couples qui sert de graphe est en réalité un dictionnaire.

La notation `key:dict` est alors évoquée.

Une remarque est faite à propos d'une boucle entre les définitions d'ensemble et de couple.

Les membres se demandent alors s'il est possible de créer des ensembles qui contiennent des types différents.

Le débat dérive sur les classes, et le fait qu'une classe contient plus que des fonctions (nom, classe mère, visibilité, …). Il est rappelé qu'on parle bien d'instances pour le moment.

Premier débat terminé.

---

Le second débat porte uniquement sur les ensembles, ou `Kropis`.

Les tables de hash sont évoquées. Ou dictionnaires. Mais ici, on parle aussi de tables de hash avec exclusivement des clés.

Une personne propose de faire la différence entre les ensembles originaux et les ensembles restreints : un original accompagné de conditions.

Les opérations de base sur les ensembles sont évoquées.

Les multiensembles sont évoqués rapidement.

## Proposition rédigée n°1

### Introduction

Pour commencer cette proposition, nous allons parler des ensembles en Skribi.

Un ensemble est un rassemblement de plusieurs éléments de même type, ou de types ayant un ancêtre commun. Le type sélectionné pour l'ensemble sera toujours le plus restrictif.

Un ensemble est lui-même un type, il est donc possible de faire des ensembles d'ensembles.

La syntaxe pour créer un ensemble est la suivante :

```Skribi
{<éléments>}
```

Les éléments sont séparés par des virgules.

On peut remarquer les types sélectionnés pour les ensembles suivants :

```skribi
{"a", "b", "c", "de"} // skr
{'a', 'b', 'c'} // correspondant à un charactère
{{"a"}, {"b", "c"}} // skr kropis
{5, 5.0} // Supertype de int et dar ? Je ne nomme number pour le moment
```

Dans le cas où le type de l'ensemble souhaité n'est pas celui sélectionné, alors il est possible de préciser le type de cette façon :

```skribi
{<éléments>} @ <Type>
```

Le `@` pourra dans la proposition finale être remplacé par une autre syntaxe.

Dans ce cas où le type n'est pas compatible avec les éléments, une erreur est renvoyée.

### Opérations sur les ensembles

Les opérations disponibles sur les ensembles seront les opérations classiques :
- Appartenance
- Sous-ensemble → devra être optimisé dans cette optique
- Égalité
- Union
- Intersection
- Cardinal ?

Je pense qu'il est important de noter que parcourir un ensemble n'est normalement pas possible, mais qu'on est en informatique. Je pense qu'il est donc important de pouvoir parcourir un ensemble dans un sens arbitraire.

#### Prédicat et opérations

Tout ensemble peut être transformé en un ensemble qu'il n'est plus possible de parcourir, car les valeurs exactes sont perdues. L'implémentation reste à définir afin d'être la plus optimisée possible. De préférence, l'opération `appartenance` doit être au maximum en `O(log(n))`.

Je pense que connaitre le cardinal de l'ensemble peut être pratique.

Il est important de noter les opérations qui existent (`e` = élément, `p` = prédicat, `s` = ensemble et `m` = prédicat ou ensemble, pas d'importance) :
- `appartenance: e x p -> ioi`
- `sous ensemble: s x p -> ioi`. Attention à l'ordre.
- `egalité: m x m -> ioi`. Si cardinal connu.
- `intersection: m x m -> m`. Dans le cas où c'est deux prédicats, il est possible de faire l'intersection via une petite triche où le nouvel objet ne fait en réalité qu'appeler les méthodes des deux autres. Il renvoie alors un prédicat. Dans les autres cas, il renvoie un ensemble en utilisant un parcours des valeurs et l'appartenance.
- `union: m x m -> p`. De même ici.
- `predicat: s -> p`. Transforme en prédicat l'ensemble.

Les noms seront modifiés plus tard.

Exemple :

```skribi
predicat:ensemble
appartenance(5):predicat:{5} @ int // io
appartenance(6):predicat:{5} @ int // no
```

#### Variants

##### Définition

Cette partie est vraiment en expérimentation. Toute suggestion est bienvenue.

Tout élément dans un ensemble peut être accompagné d'une variable nommée `variant`.

Pour un élément, la syntaxe d'un variant de type donné est :

```skribi
element with type valeur
```

Pour accéder à la valeur d'un variant, ou la modifier, il suffit d'utiliser la syntaxe suivante :

```skribi
// On admet un ensemble e
// ...
e(element) // Donne la valeur du variant associé
e(element) = valeur // modifier la valeur
```

Il est possible d'indiquer des constantes avec les préfixes habituels.

L'avantage des variants est qu'ils sont **ignorés** par les opérations classiques des ensembles pour les comparaisons. Lors d'une union / intersection, les valeurs sont **perdues** en cas de conflit.

Notons cependant qu'un élément accompagné d'un variant de type A est différent du même élément accompagné d'un variant de type B (ou vide) afin de garantir les opérations.

##### Classes d'ensembles

Les classes d'ensembles permettent de regrouper en catégories les ensembles.

Il suffit d'utiliser les mots clés `kat kropis` devant la définition. Cet ensemble est alors quasiment une classe.

Ce qui change est qu'il est alors possible de ne pas donner de valeur à un variant, et qu'il est possible de créer des instances.

##### Instances

Créer une instance permet de définir les différentes valeurs des variants. Syntaxe :

```skribi
e(a, b, c, d, ...) // instanciation
```

Un nouvel ensemble est alors créé, avec les valeurs données. L'ordre des arguments est identique à celui utilisé lors de la déclaration.

Pour savoir si un élément est une instance d'une classe d'ensembles, il suffit d'utiliser le symbole de sous-ensemble de cette manière : `e "sous ensemble de" e(a, b, c, ...)`. Cet ordre permettra aussi de couvrir l'héritage.

Un élément devait être ajouté ici, mais a été oublié.

#### Modifier un ensemble

Dans cette proposition, la modification des ensemble n'est pas du tout définie. Tout simplement, car aucune idée n'a été trouvée.

Utiliser le mot clé classique pour indiquer qu'un ensemble ne peut pas être modifié ? Utiliser un système de particule ?

Bref, il est parfois considéré que l'ensemble n'est pas modifiable, et d'autres fois qu'il l'est.

### Ensemble de conditions

Comme en maths, il est possible de créer un ensemble à partir de conditions, mais cet ensemble est appelé ensemble théorique en Skribi.

```skribi
{<conditions>} @ Condition
```

"Condition" reste à traduire en Dibi. Il est **très important** de préciser que c'est un ensemble de conditions sinon il risque d'être interprété comme un ensemble de booléens.

Une fois qu'il est mentionné que c'est un ensemble de conditions, il est possible de continuer en remplissant les conditions :

```skribi
{<conditions de types>, <conditions initiales>, <conditions restreintes>} @ Condition
```

La syntaxe notée ici est plutôt souple, mais il est important de noter l'ordre.

Les conditions de types indiquent comme en maths les types de chaque variable. La première variable sera celle dont les valeurs seront contenues dans l'ensemble.

Avoir une condition de type **implique** que des conditions initiales sont nécessaires. Les conditions initiales permettent de générer les valeurs de l'ensemble, qui seront filtrées par la suite. Une seule condition initiale sera traitée en tant que tel par variable. Ainsi, le choix de la condition initiale peut optimiser votre code.

Les conditions suivantes sont toutes des conditions restreintes : elles s'occupent de filtrer les valeurs générées par les conditions initiales.

Quelques exemples d'ensembles. Cliquez sur l'œil pour les explications.

```skribi
#// Représente l'ensemble des nombres pairs de 5 à 10 exclus
{int a, 5 < a < 10, a % 2 == 0} @ Condition
```

5 < a < 10 doit être notée comme étant une condition initiale valide, car il est possible de déterminer toutes les valeurs prises par `a`.
 
Il est IMPOSSIBLE que `a % 2 == 0` soit une condition initiale, puisqu'il en existe une infinité.

```skribi
#// Représente aussi l'ensemble des nombres pairs de 5 à 10 exclus
{int a, 5 < a ae a < 10, a % 2 == 0}
```

Notez ici l'importance du `ae` qui permet à deux conditions non initiales d'en devenir une.

Bien entendu, ces conditions dépendent du type et de ce qui est pris en charge par celui-ci.

```skribi
#// Encore
{int a, 5 < a ae a < 10 ae a % 2 == 0}
```

Ici un `ae` a remplacé une virgule. Ceci n'a pas besoin d'être géré par le type, car une condition initiale a été trouvée.

```skribi
#// Ensemble de sommes
{int a, int b, int c, 2 < b < 5, 2 < c < 5, a == b + c}
```

Ici, je ne vois pas de problème au niveau purement mathématique, mais je ne vois pas comment le gérer en Skribi. Je pense que ce point doit être débattu, surtout si les nombres sont passés en argument d'une méthode et qu'on cherche son résultat.

Après un `==` pourrait être considéré comme une condition initiale…

Après tout :

```skribi
#// {5, 6} 
{int a, a == 5 OU a == 6}
```

Revient à créer l'ensemble manuellement.

#### Rendre concret un ensemble théorique

Les ensembles de conditions sont des ensembles dits théoriques, car ils restent non générés. Pour générer les valeurs de l'ensemble, il suffit d'utiliser `kere`.

```skribi
kere:{int a, a == 5 OU a == 6} @ Condition
#// == {5, 6} est io
```

L'ensemble généré est alors l'unique instance possible de cette sorte de classe.

#### Transformer en prédicat un ensemble théorique

Une deuxième méthode doit être créée, puisque `predicat` est utilisée pour les ensembles normaux, et retourne ici un prédicat de conditions.

Je nomme pour le moment cette méthode `pipeline` car c'est une sorte de tunnel qui vérifie une par une les conditions.

### Ensemble de variables

Coming soon ...

### Les fonctions

Par graphe et classiques.

#### Ensemble de fonctions

### Les dictionnaires

Rédigé dans l'après-midi ou demain.

<div class="warning">Cette proposition rédigée n'est pas terminée</div>

Listes des choses à rédiger :
- Pour l'héritage, sous-ensemble
- Fonctions et méthodes
- Dictionnaires
- Instances
- …
