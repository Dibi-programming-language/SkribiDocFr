
# Fonctions

Les fonctions fonctionnent de manière plutôt classique en Skribi.

<div class="warning">Page en cours de création</div>

**Attention :** Cette page est très proche [d'un contrôle du flux de code](../Flux/Flux%20de%20code.md), mais est rangée ici car cela reste du stockage.

## Introduction pour les débutants

Les fonctions permettent de bloc de code réutilisable plusieurs fois depuis plusieurs endroits du code. Elles permettent ainsi de factoriser le code, et de ne pas "réinventer la roue" (expression classique chez les développeurs) à chaque fois que l'on souhaite faire la moindre action.

Fondamentalement, une fonction est comme une usine qui peut prendre de la matière première, appelée "arguments", pour fabriquer éventuellement fabriquer un produit, nommé "valeur de retour". Dans certains langages, une fonction peut retourner plusieurs valeurs. Le point n'a pas encore été débattu en Skribi. Les arguments (leur nombre et leurs types) avec l'éventuelle valeur de retour, constituent le "prototype" de la fonction. Le prototype contient aussi souvent le nom de la fonction.

Ce qui se passe dans la fonction dépend de celle-ci, et est nommé "corps de la fonction". C'est un bloc de code.

Par exemple, vous n'avez pas besoin de coder un programme pour calculer la racine carrée, car une fonction qui permet de le faire a déjà été déclarée.

Afin de pouvoir avoir le code le plus réutilisable possible, il est conseillé de mettre chaque fonctionnalité de votre code dans une fonction.

## Déclarer une fonction

Déclarer une fonction permet de définir ses arguments, son nom et son type de retour. Le mot clé `ums` est alors utilisé.

```skribi
ums <nom>(<arguments>) {
    // Bloc de code
}
```

N'importe où dans le bloc de code, vous pouvez utiliser `ei` pour retourner une valeur. Ce mot clé arrête la fonction immédiatement pour retourner la valeur.

Pour le moment, le type de retour est déterminé automatiquement.

Dans la syntaxe, il faut remplacer `<nom>` par un nom au choix pour votre fonction.

Les arguments sont sous un format spécifique proche de celui des [Variables](Variables.md).

Les arguments suivent l'organisation suivante :

```skribi
<argument1>, <argument2>, ...
```

Les arguments sont séparés par des virgules, et peuvent être de n'importe quel type. Cependant, ils doivent tous avoir un nom différent.

La syntaxe pour un argument est la suivante :

```skribi
<type> <nom>
```

Le type et le nom sont obligatoires, mais il est possible d'ajouter une valeur par défaut :

```skribi
<type> <nom> <valeur par défaut>
```

Dans ce cas, l'argument devient facultatif. **Attention,** dans certains cas où il existe de nombreux éléments facultatifs, il n'est plus possible de déterminer qui est qui. Ces exceptions n'ont pas encore été débattues.

**En résumé**, la syntaxe complète simplifiée est la suivante :

```skribi
ums nom(t1 n1, t2 n2) {
    // code
    ei value
}
```

Par exemple, voici une fonction sans grand intérêt qui multiplie deux nombres :

```skribi
ums mult(int a, int b) {
    ei a*b
}
```

Ou, en plus complexe et moins optimisé, pour ceux qui ont déjà lu le chapitre [Flux de code](../Flux/Flux%20de%20code.md) :

```skribi
// Prise en charge uniquement des nombres positifs
ums mult(int a, int b) {
    if a == 0 {
        ei 0
    }
    int tot a
    ci b > 1 {
        tot tot + a
    }
    ei tot
}
```

## Utiliser une fonction

Utiliser une fonction se fait très facilement.
