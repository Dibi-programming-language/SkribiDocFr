
# Création d'une grammaire LL1 pour le Skribi

Ici, en plus des symboles classiques de grammaire, les `{}` seront utilisés pour la répétition, et `..` pour les intervalles les plus logiques. De plus, les `""` et les `''` indiquent des terminaux constitués d'autre chose que des lettres et des chiffres. Enfin, `* -` indique tous les terminaux sauf ceux qui suivent.

Le terminal `\` sera toujours représenté par `\\` pour enlever les confusions.

## Motivations

L'algorithme qui avait été envisagé jusqu'à maintenant n'est absolument pas optimisé. C'est pourquoi la création d'une grammaire de type LL1 s'impose comme une deuxième tentative pour parser le code.

Le plus difficile sera de lever certaines ambiguïtés comme pour la déclaration des [Variables](Stockage/Variables.md).

Pour le moment la syntaxe la plus basique est : 

```
<identifiant> ::= plusieurs types d'identifiants, mais c'est difficile à différencier sans connaitre le reste du code (classes, variables, fonctions, ...)
<dec_var> ::= <identifiant> <identifiant> <identifiant>
<modif_var> ::= <identifiant> <identifiant>
<global_var> ::= fu <dec_var>
<private_var> ::= pu <dec_var>
<const_var> ::= ju <dev_var>
```

Il existe des compatibilités entre les trois dernières règles qui ne sont pas mentionnées ici.

Mais clairement, il n'est pour le moment pas possible de différencier un `dev_var` d'un `modif_var` facilement. De plus, pour le moment, il n'existe pas de séparateur obligatoire entre les instructions. Et si la grammaire est correcte, ce ne sera pas nécessaire.

Ainsi, si j'ai

```
<identifiant> <identifiant> <identifiant> <identifiant> <identifiant> <identifiant>
```

Il est impossible de dire si c'est 3 `modif_var` ou 2 `dec_var`. Et cela reste un exemple simple.

Il faudrait alors connaitre la valeur des identifiants et retrouver leur déclaration (classe, variables ou fonction existante)… ou exiger un préfixe, une convention de nommage.

Ainsi, je ne connais aucun moyen de rendre cette grammaire LL1.

Mais commençons par les éléments simples non ?

## Valeurs builtin

La plupart de ces valeurs sont directement gérées par le Lexer, mais un petit rappel est toujours bon.

### Inclus dans le Lexer

Si j'ai oublié des règles, n'hésitez pas à l'indiquer.

```
<bool> ::= io | no
<int> ::= 0..9 {0..9}
<float> ::= <int> "." <int>
<string> ::= '"' {(* - ('"' | \n)) | `\\"`} '"'
```

EN COURS
