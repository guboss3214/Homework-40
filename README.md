# Опис

## У проєкті реалізовано три компоненти:

1. ControlledForm - контрольований компонент з формою, стан якої керується через React.

2. UncontrolledForm - неконтрольований компонент із формою, де використовується референс (ref) для доступу до значень.

3. ServerData - компонент для отримання даних із сервера через useEffect.

## Складнощі

- Обробка станів завантаження: Додавання станів "завантаження", "успішно" та "помилка" потребувало додаткової логіки для синхронізації.

- Axios: Хоча axios є потужною бібліотекою, було потрібно налаштувати базовий URL та обробку можливих помилок на стороні сервера.

- Неконтрольовані компоненти: Управління референсами (refs) вимагало тестування, щоб забезпечити коректний доступ до даних.