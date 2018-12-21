// TODO: type check item
const intersect = item => {
  const elem = document.querySelector(`.${item.id}`);

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        console.log(`section ${item.id} is in the view`);
      } else {
        console.log(`section ${item.id} is out of view`);
      }
    });
  });

  observer.observe(elem);
};

export default intersect;
