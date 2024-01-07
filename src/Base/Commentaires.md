
# Commentaires

Les commentaires sont des morceaux de codes ignorés par l'interpréteur. Ce qui est à l'intérieur ne sera pas exécuté, ni vérifié.

Mettre des commentaires est nécessaire pour aider les autres développeurs à comprendre votre code.

## Commenter la fin d'une ligne

Pour indiquer que la fin d'une ligne est un commentaire, il suffit d'écrire `//`, et ce qui suit sera un commentaire comme dans la plupart des langages.

Exemple :

```skribi
Je suis exécuté
// Je ne suis pas exécuté
Exécuté // Non exécuté
```

Un commentaire sous cette forme n'est pas prioritaire sur un [string](Opérations_et_types_de_base.md). Ainsi, vous ne pouvez pas commenter la fin d'un string.

Exemple :

```skribi
"abc // toujours dans string" // Non exécuté à partir d'ici
```
