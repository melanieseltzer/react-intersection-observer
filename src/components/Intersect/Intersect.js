// TODO: type check elem
const setCurrent = elem => {
  // Get all elements which were active and remove the active class
  document
    .querySelectorAll('.active')
    .forEach(el => el.classList.remove('active'));

  // Add the active class to the new active element
  document.querySelector(`a[href="#${elem.id}"`).classList.add('active');
};

// TODO: type check item
const intersect = item => {
  const elem = document.querySelector(`.${item.id}`);

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        setCurrent(entry.target);
      }
    });
  });

  observer.observe(elem);
};

export default intersect;
