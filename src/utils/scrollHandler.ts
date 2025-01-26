export const smoothScrollTo = (id: string, offset: number = -120) => {
    const section = document.querySelector(id);
    if (section) {
      window.scroll({
        top: section.getBoundingClientRect().top + window.scrollY + offset,
        behavior: 'smooth',
      });
  
      setTimeout(() => {
        const header = section.querySelector('h2');
        if (header) header.style.opacity = '1';
      }, 200);
    }
  };