# Installation du projet :

1. Installer [Python 3.12](https://www.python.org/downloads/) et [Ollama](https://ollama.com/)

2. Créer un environnement virtuel pour installer les dépendances :
   ```shell
   cd back
   ```
   ```shell
   python -m venv venv
   ```

3. Activer l'environnement virtuel :
   ```shell
   source ./venv/bin/activate
   ```

4. Installer [PyTorch](https://pytorch.org/get-started/locally/)

5. Installer les dépendances du projet :
   ```shell
   pip install -r requirements.txt
   ```

6. Lancer le projet en mode dev avec hot reload :
   ```shell
   fastapi dev main.py
   ```
   Accéder à la doc de l'API : http://127.0.0.1:8000/docs

7. Lancer le projet en mode production :
   ```shell
   fastapi run main.py
   ```
