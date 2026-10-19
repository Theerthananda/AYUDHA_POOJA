export const kannada = {
  hero: 'ಶ್ರೀ ಚಾಮುಂಡೇಶ್ವರಿ ದೇವಿಯ ಕೃಪೆ ನಿಮ್ಮೆಲ್ಲರ ಮೇಲಿರಲಿ',
  wish: 'ಶುಭ ಆಯುಧ ಪೂಜೆಯ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು',
  mysuru: 'ಮೈಸೂರು ದಸರಾ ವೈಭವ',
  devotion: 'ತಾಯಿಯ ಕೃಪೆ ಸದಾ ನಮ್ಮೊಂದಿಗಿರಲಿ'
}

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const images = {
  deity: {
    src: asset('images/devi-chamundeshwari.jpg'),
    fallbackSrc: asset('images/chamundeshwari-idol.jpg'),
    alt: "Devi Chamundeshwari during a village jatra",
  },
  palace: {
    src: asset('images/mysore-palace-illuminated.jpg'),
    alt: "Mysore Palace illuminated for Dasara",
  },
  procession: {
    src: asset('images/dasara-procession.jpg'),
    alt: "Mysore Dasara procession",
  },
  dance: {
    src: asset('images/karnataka-folk-dance.jpg'),
    alt: "Folk dance of Karnataka",
  },
};
