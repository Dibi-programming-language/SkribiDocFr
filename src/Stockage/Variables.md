
# Variables

Les variables permettent de stocker des valeurs afin de les utiliser plus tard. Les valeurs peuvent être de n'importe quel type.

## Déclaration de variables

Déclarer une variable se fait avec la syntaxe suivante :

```skribi
type nom valeur
```

Déclarer une variable est obligatoire pour pouvoir l'utiliser ensuite. En effet, si une variable n'existe pas, elle ne contient aucune valeur et ne peut donc pas être utilisée.

Déclarer une variable est aussi obligatoire pour la modifier. En effet, déclarer une variable permet de donner son type.

Exemple :

```skribi
dar daritmi 1.5
int integi 2
int int2 24
skr hello "Hello World"
ioi false no
```

### Modificateurs du fonctionnement de la déclaration

#### Constantes

Une constante est une variable dont la valeur ne peut pas varier. L'intérêt est d'éviter de modifier par erreur une valeur dont la constance permet de faire fonctionner certains algorithmes.

Ainsi, modifier une constante génère une erreur. Déclarer une variable constante permet aussi parfois d'optimiser certaines choses du côté de l'interpréteur (pas pour le moment).

```skribi
ju <déclaration>
```

`<déclaration>`est à remplacer par n'importe quelle déclaration de variable. Par exemple

```skribi
ju type nom valeur
```

Ceci reste un exemple, des déclarations plus complexes existent.

Concrètement :

```skribi
ju dar daritmi 1.5
ju int integi 2
```

Déclare deux constantes `daritmi` et `integi`.

#### Variables privées

`pu`

#### Variables globales

Les variables globales sont très souvent considérées comme une mauvaise pratique. Faites attention si vous les utilisez.

Le mot clé à utiliser pour déclarer une variable globale est  `fu`.

```skribi
fu <déclaration>
```

## Modification de variables

Modifier une variable permet de lui donner une nouvelle valeur.

La syntaxe est la suivante :

```skribi
nom valeur
```

L'ancienne valeur est alors remplacée par la nouvelle.

```skribi
int integi 2
integi 5
// La valeur est modifiée de 5 à 2
```

## Appel de variables

Appeler une variable permet d'utiliser sa valeur dans d'autres instructions, expressions et calculs.

```skribi
nom
```

Exemple :

```skribi
int integi 5
oste(integi * 5):adatali
#// Imprime 25 dans la console, voir le chapitre concerné
integi integi * 20
#// Change la valeur à 100
oste(integi + 1):adatali
#// Imprime 101 dans la console
```

Ce code simple met en avant les différentes notions de ce chapitre.
