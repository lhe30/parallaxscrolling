let estrela = document.getElementById('estrelas')
        let estrelas2 = document.getElementById('estrelas2')
        let lua = document.getElementById('lua')
        let rocha = document.getElementById('rocha')
        let castelo = document.getElementById('castelo')
        let texto = document.getElementById('texto')
        let header = document.getElementById('header')

        window.addEventListener('scroll', function(){
            let value = window.scrollY;
            estrela.style.bottom = value * 0.05 + '%';
            lua.style.bottom = value * -0.5 + 'px';
            rocha.style.bottom = value * -0.75 + 'px';
            castelo.style.bottom = value * -0.15 + 'px';
            texto.style.right = value * 0.1 + '%';
        })

        