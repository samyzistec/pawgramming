# Comandos principales de Git

| Comando | Descripción | Importancia |
| --- | --- | --- |
| `git commit --amend -m "[TASK-01] #comment Agregar bartool" -m "Este commit agrega la funcionalidad de agregar un toll en la barra."` | Permite modificar el mensaje del commit., lo que esta entre comillas es tu mensaje de commit, debes cambiarlo a tu descripción | Útil para corregir errores en el mensaje del commit. |
| `git branch -M main` | Cambia el nombre de la rama principal a main (la renombra). | Útil para estandarizar el nombre de la rama principal. |
| `git branch develop main` | Crea una nueva rama llamada `develop` basada en la rama `main`. | Útil para trabajar en nuevas características sin afectar la rama principal. |
|`git branch -d develop` | Elimina la rama `develop`.  Antes de usar este comando, debes hacer un checkout a una rama diferente de la que queires eliminar. Puedes usar -D mayúscula para forzar la eliminación. | Útil para eliminar ramas que ya no se utilizan. |
| `git checkout -b develop main` | Crea y cambia (hace checkout) a la rama `develop` basada en la rama `main`. | Útil para trabajar en nuevas características sin afectar la rama principal. |
| `git branch` | Muestra una lista de todas las ramas en el repositorio. | Útil para verificar en qué rama se encuentra actualmente. |
| `git tag -a START_PROJECT -m "Start repository with source code not versioned previously"` | Crea una nueva etiqueta llamada `START_PROJECT` con un mensaje. | Útil para etiquetar un punto específico en el historial del repositorio. |
| `git push origin --all` | Envía todas las ramas al repositorio remoto. | Útil para sincronizar todas las ramas en el repositorio remoto. |
| `git push --tags` | Envía todas las etiquetas al repositorio remoto. | Útil para sincronizar todas las etiquetas en el repositorio remoto. |
| `git checkout idcommit` | Cambia (hace checkout) a un commit anterior basado en su ID. | Útil para revisar cambios anteriores en el historial del repositorio. |
| `git fetch origin master` | Descarga los últimos cambios que hay en la rama master del repositorio remoto (puedes cambiar master por la rama que desees actualizar o usar --all para descargar todo). | Útil para sincronizar tu repositorio local con el remoto. |
| `git merge origin/master` | Integra los cambios de la rama master en tu rama actual (puedes cambiar master por la rama que desees integrar en tu rama actual). | Útil para evitar conflictos antes de un pull request. |
| `git push -f origin HEAD:main` | Envía la rama actual al repositorio remoto, sobrescribiendo cualquier cambio existente en la rama principal. | Útil para actualizar la rama principal con cambios locales. |
| `git reset --hard origin/main` | Descarta todos los cambios locales y restaura la rama `main` a su estado actual (como está en el repositorio remoto). | Útil para restaurar la rama local a su estado original en el repositorio remoto. |
| `git reset --hard TAG_ID` | Descarta todos los cambios locales y restaura los cambios del hashID al cual apunta el `TAG_ID` indicado. | Útil para restaurar la rama local a un momento específico del tiempo. |
| `git push --force-with-lease` | Resetea tu repositorio a un momento o instantánea específica. | Útil cuando estás seguro de que quieres volver a una versión específica del pasado. |
| `git stash pop` | Restaura los cambios del último stash y los elimina del stash. | Útil para aplicar los cambios guardados. |
| `git stash apply` | Restaura los cambios del último stash y los conserva en el stash. | Útil para aplicar cambios sin eliminarlos del stash. |
| `git stash list` | Muestra una lista de todos los stashes en el repositorio. | Útil para verificar qué se ha guardado. |
| `git stash clear` | Elimina todos los stashes en el repositorio. | Útil para limpiar el stash y liberar espacio. |
| `git stash drop stash@{1}` | Elimina el stash en la posición `1`. | Útil para eliminar un stash específico. |

---

## Más comandos básicos de Git

| Comando | Descripción | Importancia |
| --- | --- | --- |
| `git init` | Inicializa un nuevo repositorio Git en la carpeta actual. | Primer paso para empezar a usar Git en un proyecto. |
| `git clone <url>` | Clona un repositorio remoto a tu máquina local. | Útil para obtener una copia de un proyecto existente. |
| `git status` | Muestra el estado actual del repositorio (archivos modificados, en staging, no rastreados). | Útil para conocer qué cambios tienes antes de un commit. |
| `git add <archivo>` | Añade un archivo específico al área de staging. | Útil para preparar cambios que quieres confirmar. |
| `git add .` | Añade todos los archivos modificados al área de staging. | Útil para confirmar todos los cambios de una vez. |
| `git commit -m "mensaje"` | Crea un commit con los cambios en el área de staging. | Útil para guardar un punto en el historial del proyecto. |
| `git log` | Muestra el historial de commits. | Útil para revisar los cambios realizados. |
| `git diff` | Muestra las diferencias entre los archivos modificados y la última versión confirmada. | Útil para revisar cambios antes de hacer commit. |
| `git pull` | Descarga e integra los cambios de un repositorio remoto. | Útil para mantener tu rama sincronizada con el remoto. |
| `git push` | Envía tus commits locales al repositorio remoto. | Útil para compartir tus cambios. |
| `git rm <archivo>` | Elimina un archivo del proyecto y lo marca para ser eliminado en el próximo commit. | Útil para limpiar archivos que ya no se necesitan. |
| `git revert <idcommit>` | Crea un nuevo commit que deshace los cambios introducidos en el commit especificado. | Útil para revertir cambios sin alterar el historial. |

