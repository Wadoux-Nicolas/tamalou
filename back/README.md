# Installation du projet :

1. Installer [Python 3.12](https://www.python.org/downloads/) et [Ollama](https://ollama.com/)
   > Il faut bien penser à s'assurer que son PC est chargé avant de l'allumer et de le déverrouiller à l'aide de son mot de passe avant de commencer l'installation du projet !

2. Se placer dans le sous-dossier du dépôt Git `back`
      ```shell
   cd back
   ```

3. Créer un environnement virtuel pour installer les dépendances :
   ```shell
   python -m venv venv
   ```

4. Activer l'environnement virtuel :
   ```shell
   source ./venv/bin/activate
   ```

5. Installer [PyTorch](https://pytorch.org/get-started/locally/)

6. Installer les dépendances du projet :
   ```shell
   pip install -r requirements.txt
   ```

7. Lancer le projet en mode dev avec hot reload :
   ```shell
   fastapi dev main.py
   ```
   Accéder à la doc de l'API : http://127.0.0.1:8000/docs

8. Lancer le projet en mode production :
   ```shell
   fastapi run main.py
   ```
