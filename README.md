# NativeScript: Scan Inventory

## Cel
Zbuduj podstawową aplikację w **NativeScript używając framework Angular**, która używa **natywnej funkcji** oraz **komunikuje się z API**, z **3–4 widokami**.

## Zakres i wymagania funkcjonalne
- **Natywna funkcja (min. 1):** wybierz i uzasadnij (np. aparat/kamera – skan/zdjęcie, pliki, geolokalizacja, latarka, wibracje).
- **API (min. 1 endpoint):** pobranie listy elementów lub zapis nowego.
- **Widoki (3–4):**
  1. **Lista produktów** (nazwa, kod, mini-status).
  2. **Szczegóły produktu** (opis, zdjęcie/skan, akcje: usuń/edytuj).
  3. **Dodaj produkt** (formularz + akcja natywna, np. „zeskanuj/zdjęcie”).
  4. *(Opcjonalnie)* **Ustawienia** (np. preferencje, tryb offline).
- **Walidacja:** minimalna w formularzu (np. wymagane pola).

## Testowanie lokalne (w trakcie developmentu)
- Uruchom na **urządzeniu/emulatorze**.
- Pokaż: dodanie produktu z użyciem **natywnej funkcji** (np. zdjęcie/skan), pojawienie się na liście.
- Pokaż komunikację z **API** (pobranie/zapis) i zachowanie przy błędach/uprawnieniach.

## Definition of Done (DoD)
- [ ] 3–4 widoki + nawigacja.
- [ ] Co najmniej 1 **natywna funkcja**.
- [ ] Integracja z **API** (GET/POST).
- [ ] Walidacja formularza + podstawowa obsługa błędów.
- [ ] Aktualizacja `README.md`, zrzuty ekranów, min. 3 commity.
