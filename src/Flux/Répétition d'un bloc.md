
# Répétition d'un bloc

Certains morceaux de code doivent être répétés plusieurs fois afin de faire fonctionner le programme. Chaque répétition est une "itération". On appelle "boucle" le bloc répété ainsi que les instructions associées à ce bloc, comme celle pour démarrer la répétition.

Le principe est de répéter un code jusqu'à ce qu'une condition ne soit plus respectée. 

Bien entendu, certaines [variables](../Stockage/Variables.md) sont modifiées durant chaque itération afin que la condition puisse devenir fausse.

De plus, répéter un code ne signifie pas répéter à chaque fois les mêmes opérations à l'identique. Ainsi, en combinant les répétitions avec des conditions, il est possible d'obtenir un outil extrêmement puissant.

Souvent, on souhaite répéter le code un nombre défini de fois plutôt que le répéter tant qu'une condition est satisfaite. Dans ce cas, il suffit de créer une variable qui compte le nombre de fois que le code a été respecté. Le Skribi, comme la plupart des langages, propose une manière plus facile de faire ceci, même si au final cela revient à créer une variable, elle sera simplement gérée par l'interpréteur.

## Répéter en fonction d'une condition

Répéter un bloc de code tant qu'une condition est satisfaite est la base de toute boucle.

Cela se fait avec le mot clé `ci` en Skribi.

Syntaxe :

```skribi
ci <condition> {
    // Bloc de code
}
```

Il faut bien entendu remplacer `<condition>` par une condition valide sans les `<>`.

Par exemple, pour calculer 2 à la puissance 3 sans utiliser l'opérateur de base :

```skribi
int resultat = 2
int i 1
ci i < 3 {
    resultat resultat*2
    i i+1
}
```

Ou encore 2 à la puissance `n` :

```skribi
// Valeur prise en exemple
ju int n 55

// ... si n n'est pas constant, possibilité de le modifier

int resultat = 2
int i 1
ci i < n {
    resultat resultat*2
    i i+1
}
```

Il est aussi possible de mettre des boucles dans des boucles, mais dans ce cas, il faut se méfier de la **complexité** du code : plus `n` est grand, plus le code sera long à exécuter.

Parfois un code plus long à écrire et à comprendre est mieux qu'un code court, mais lent à exécuter…

## Répéter un certain nombre de fois

`ci` `mio` et `popuite`
