(function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.site-nav');
  var navLinks = document.querySelectorAll('.site-nav a');
  var sections = document.querySelectorAll('main section[id]');
  var reveals = document.querySelectorAll('.card, .process-step, .deliverables-list article');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  var sectionObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        var id = entry.target.getAttribute('id');
        navLinks.forEach(function (link) {
          var active = link.getAttribute('href') === '#' + id;
          link.classList.toggle('active', active);
        });
      });
    },
    { threshold: 0.35 }
  );

  sections.forEach(function (section) {
    sectionObserver.observe(section);
  });

  reveals.forEach(function (el) {
    el.classList.add('reveal');
  });

  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  reveals.forEach(function (el) {
    revealObserver.observe(el);
  });
})();
