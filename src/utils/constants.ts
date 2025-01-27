import image from '@/assets/news-image.png';
import photo from '@/assets/default-photo.svg';
import lang from '@/assets/lang_ru.svg';

export const therapistsCards = [
  {
    id: '1',
    photo: '',
    name: 'Рыспаева Алия Шаяхметовна',
    position: 'Врач-остеопат',
    location: 'Петропавловск-Камчатский',
    distance: '5 км',
    clinic: 'Клиника «Доктор»',
    address: 'ул. Новостроистельная, 25',
    price: '2500',
    phone: '+7 (999) 444-44 44',
  },
  {
    id: '2',
    photo: '',
    name: 'Авдеева-Миронюк Ирина Викторовна',
    position: 'Врач-остеопат',
    location: 'Петропавловск-Камчатский',
    distance: '5 км',
    clinic: 'Клиника «Доктор»',
    address: 'ул. Новостроистельная, 25',
    price: '4000',
    phone: '+7 (999) 444-44 44',
  },
  {
    id: '3',
    photo: '',
    name: 'Иванов Иван Иванович',
    position: 'Врач-остеопат',
    location: 'Петропавловск-Камчатский',
    distance: '5 км',
    clinic: 'Клиника «Доктор»',
    address: 'ул. Новостроистельная, 25',
    price: '2500',
    phone: '+7 (999) 444-44 44',
  },
  {
    id: '4',
    photo: '',
    name: 'Петров Сергей Викторович',
    position: 'Врач-остеопат',
    location: 'Петропавловск-Камчатский',
    distance: '5 км',
    clinic: 'Клиника «Доктор»',
    address: 'ул. Новостроистельная, 25',
    price: '7500',
    phone: '+7 (999) 444-44 44',
  },
  {
    id: '5',
    photo: photo,
    name: 'Пушкин Николай Сергеевич',
    position: 'Врач-остеопат',
    location: 'Петропавловск-Камчатский',
    distance: '5 км',
    clinic: 'Клиника «Доктор»',
    address: 'ул. Новостроистельная, 25',
    price: '7500',
    phone: '+7 (999) 444-44 44',
  },
  {
    id: '6',
    photo: photo,
    name: 'Пупкин Николай Сергеевич',
    position: 'Врач-остеопат',
    location: 'Петропавловск-Камчатский',
    distance: '5 км',
    clinic: 'Клиника «Доктор»',
    address: 'ул. Новостроистельная, 25',
    price: '7500',
    phone: '+7 (999) 444-44 44',
  },
];

export const news = [
  {
    id: '1',
    photo: image,
    title: 'Открытие новой клиники состоялось 12 сентября. Были проведены',
  },
  {
    id: '2',
    photo: image,
    title: '17 мая — Мы представим новое поколение современных технологий',
  },
  {
    id: '3',
    photo: image,
    title: 'Главные события уходящего года мы обсудили вместе с нашими',
  },
  {
    id: '4',
    photo: image,
    title: 'Открытие новой клиники состоялось 12 сентября. Были проведены',
  },
  {
    id: '5',
    photo: image,
    title: '17 мая — Мы представим новое поколение современных технологий',
  },
  {
    id: '6',
    photo: image,
    title: 'Главные события уходящего года мы обсудили вместе с нашими',
  },
];
export const languages = [
  { photo: lang, title: 'English', ISO: 'En', active: false },
  { photo: lang, title: 'Русский', ISO: 'Ru', active: true },
  { photo: lang, title: 'Español', ISO: 'Es', active: false },
];
