
# Embranchements de base

<div class="warning">
Les embranchements n'ont pas encore été votées, mais une seule proposition existe pour le moment.
</div>

Les embranchements permettent de choisir si un bloc de code sera ou non exécuté en fonctions de certaines conditions.

## Si alors

En Skribi comme dans presque tous les langages, le `si alors` est l'embranchement le plus simple.

La particule Dibi `ij` signifie `si` et la particule `ji` signifie `alors`.

Étant donné la [syntaxe des blocs de code](../Base/Instructions_et_blocs_de_code.md) donnée, la particule `ji` n'est pour le moment pas utilisée.

Ainsi, la particule `ij` permet d'exécuter un bloc de code si une expression booléenne est vraie, aussi appelée condition.

```skribi
ij condition {
    // Votre code
}
```

Exemple :

```skribi
ij io {
    // Code toujours exécuté
}
```

Pensez à regarder la page [sur les opérations et les types](../Base/Opérations_et_types_de_base.md) afin de vous familiariser avec les expressions booléennes.

Ou en utilisant une variable :

```skribi
ioi cond io
#// Plus de code ici si vous le voulez
ij cond {
    // Code toujours exécuté
    #// Sauf si vous modifiez la variable avant !
}
```

Laissez votre créativité vous guider !

### Imbrication

Notez qu'un bloc de code peut contenir tout ensemble correct d'instructions, y compris d'autres embranchements. Ainsi, vous pouvez placer des embranchements dans les embranchements.

## Sinon

Il est aussi possible de vouloir exécuter un bloc de code seulement si la condition est fausse.

En Dibi, `sula` signifie `sinon` et cette particule est là pour vous en Skribi ! En effet, pas besoin de répéter la condition en utilisant la négation…

Utilisation :

```skribi
ij condition {
    // Exécuté si la condition est vraie
} sula {
    // Exécuté dans le cas contraire
}
```

Mais attention ! Si le bloc de code du `ij` est vide, il est plus optimal et propre de simplement utiliser une négation.

## Sinon si

Vous pourriez avoir la syntaxe suivante :

```skribi
ij c1 {
    // Exécuté si la condition est vraie
} sula {
    // c1 est fausse
    ij c2 {
        // Exécuté si c2 vraie et c1 fausse
    } sula {
        // Exécuté si tout est faux
    }
}
```

Cette syntaxe peut être simplifiée en :

```skribi
ij c1 {
    // Exécuté si la C1 vraie
} sula ij c2 {
    // Exécuté si c2 vraie et c1 fausse
} sula {
    // Exécuté si c1 et c2 sont fausses
}
```

Il est possible de répéter cette syntaxe à l'infinie !

Par exemple :

```skribi
ij c1 {
    // ...
} sula ij c2 {
    // ...
} sula ij c3 {
    // ...
} sula ij c4 {
    // ...
} sula ij c5 {
    // ...
} sula {
    // ...
}
```
