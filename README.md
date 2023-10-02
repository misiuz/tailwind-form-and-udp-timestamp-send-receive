# UDP Timestamp send-receive
Te dwa programy, server.py i client.py, pozwalają na komunikację między sobą poprzez broadcastowanie informacji w sieci z użyciem protokołu UDP. Program server.py nadaje informacje zawierające timestamp, a program client.py odbiera tę informację i wyświetla różnicę czasu między urządzeniem nadającym a odbierającym w formie czytelnej dla użytkownika.

### Wymagania sprzętowe
Brak szczególnych wymagań sprzętowych. Programy te powinny działać na większości współczesnych komputerów.

### Wymagania programowe
Kompilacja
Nie ma potrzeby kompilacji, ponieważ programy są napisane w języku Python.

## Uruchomienie
Upewnij się, że masz zainstalowany Python na swoim systemie. Te programy zostały napisane w Pythonie 3 i wymagają jego obecności.

Sklonuj lub pobierz ten projekt na swój komputer.

Otwórz terminal i przejdź do katalogu, w którym znajdują się pliki server.py i client.py.

#### Dla programu server.py:
Uruchom program server.py za pomocą polecenia:
```bash
python server.py
```
Program zostanie uruchomiony i zacznie nadawać informacje na adres i port UDP 192.168.1.255:2023.
#### Dla programu client.py:
Uruchom program client.py za pomocą polecenia:
```bash
python client.py
```
Program zostanie uruchomiony i będzie odbierać nadawane informacje od programu server.py. Wyświetli różnicę czasu między urządzeniem nadającym a odbierającym w formie przyjaznej dla użytkownika.

## Zalecenia
- Upewnij się, że oba programy są uruchamiane na tym samym segmencie sieci i mogą widzieć siebie nawzajem.

- Program client.py zakłada, że czas na urządzeniu nadającym (server.py) i na odbierającym (client.py) jest zsynchronizowany. Jeśli to nie jest prawdą, różnica czasu może być błędnie obliczona.


## Autor

- [Michał Zdunek](https://www.github.com/misiuz)

