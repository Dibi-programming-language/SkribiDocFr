
# Appel d'une fonction de l'interpréteur

Il est possible depuis un code Skribi d'appeler certaines fonctions de l'interpréteur.

<div class="warning">

Théoriquement, vous n'aurez jamais besoin d'utiliser ces fonctions. Elles seront utilisées à terme uniquement dans la librairie de base du Skribi.

Pour le moment, la librairie de base n'existe pas. Vous pouvez donc utiliser ces fonctions. Mais plus tard, cela génèrera un warning au moment de l'interprétation de votre code.

</div>

Ces fonctions sont conçues spécialement pour ceux qui codent le Skribi, et ne sont ainsi pas soumises au vote sur les salons de discussion. Vous pouvez cependant proposer des `Pull Requests`.

## Syntaxe

La syntaxe d'un appel est simple :

```skribi
skr_app fonction argument1 argument2 ...
```

Le mot clé `skr_app` est utilisé, suivi d'un identifiant `fonction` qui peut être trouvé dans la liste plus loin sur cette page.

Les arguments sont séparés par un espace, et peuvent être très nombreux. Ici, il n'est pas possible de sauter une ligne au milieu de cette syntaxe, car le nombre d'arguments n'est pas connu à l'avance.

## Fonctions existantes

| Nom | Arguments | Conséquence |
| ---- | ---- | ---- |
| `print` | Non limités. Tout type de base.  | Envoie dans la console les valeurs des éléments converties en String. Non séparés par des espaces. Aucun retour à la ligne automatique. |
| `println` | Non limités. Tout type de base. | Même conséquence que pour le `print` mais avec un retour à la ligne. |

### Exemples

```skribi
#skr myskr "abc"
#skr myskr2 "def"
skr_app print myskr myskr2
#// Résultat = abcdef
```

```skribi
#skr myskr "abc"
#skr myskr2 "def"
skr_app println myskr myskr2
#// Résultat = abcdef\n
```
