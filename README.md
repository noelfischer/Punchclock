# M223: Punchclock
Dies ist das Abschlussprojekt für das Modul M223.

## Loslegen
Folgende Schritte befolgen um loszulegen:
1. Sicherstellen, dass JDK 12 installiert und in der Umgebungsvariable `path` definiert ist.
1. Sicherstellen, dass node und npm installiert ist.
1. Ins Verzeichnis der Applikation wechseln und über die Kommandozeile mit `./gradlew bootRun` oder `./gradlew.bat bootRun` starten
1. Unittest mit `./gradlew test` oder `./gradlew.bat test` ausführen.
1. Ein ausführbares JAR kann mit `./gradlew bootJar` oder `./gradlew.bat bootJar` erstellt werden.
1. Ins Verzeichnis /react-app wechseln und mit `npm install` die generierten Files installieren
1. den Front-End Service Starten:`npm start`


Folgende Dienste stehen während der Ausführung im Profil `dev` zur Verfügung:
- Das GUI der Applikation: http://localhost:3000
- REST-Schnittstelle der Applikation: http://localhost:8081
- Dashboard der H2 Datenbank: http://localhost:8081/h2-console

Mehr Informationen zu react finden Sie im `README.md` im `/react-app` Verzeichnis.