
    /* ── Cursor ── */
    const dot  = document.getElementById('dot');
    const ring = document.getElementById('ring');
    let mx=0,my=0,rx=0,ry=0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx+'px'; dot.style.top = my+'px';
    });
    (function raf(){ rx+=(mx-rx)*.1; ry+=(my-ry)*.1;
      ring.style.left=rx+'px'; ring.style.top=ry+'px';
      requestAnimationFrame(raf);
    })();
    document.querySelectorAll('a,button').forEach(el=>{
      el.addEventListener('mouseenter',()=>document.body.classList.add('hover-link'));
      el.addEventListener('mouseleave',()=>document.body.classList.remove('hover-link'));
    });

    /* ── Header scroll ── */
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const sections = ['about','projects','skills','contact'];
      document.querySelectorAll('.s-nav a').forEach(a => a.classList.remove('active'));
      for(let id of sections){
        const el = document.getElementById(id);
        if(!el) continue;
        if(scrolled >= el.offsetTop - 200){
          const link = document.querySelector(`.s-nav a[data-sec="${id}"]`);
          if(link) link.classList.add('active');
        }
      }
    });

    /* ── Scroll reveal ── */
    new IntersectionObserver(entries => {
      entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('vis'); });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' })
    .observe && document.querySelectorAll('.reveal').forEach(el =>
      new IntersectionObserver(entries => {
        entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('vis'); });
      }, { threshold: 0.08 }).observe(el)
    );

    /* ── Skills bars ── */
    document.querySelectorAll('.skills-table tr').forEach(row => {
      new IntersectionObserver(([entry]) => {
        if(entry.isIntersecting){
          const fill = row.querySelector('.bar-fill');
          const pct  = row.dataset.pct;
          if(fill && pct) setTimeout(()=>{ fill.style.width = pct+'%'; }, 150);
        }
      }, { threshold: 0.5 }).observe(row);
    });