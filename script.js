//================= SCRIPT SIMPLES E INFALÍVEL =================

// Aguardar a página carregar completamente
window.addEventListener('load', function() {
    console.log('Página carregada!');
    
    // Elementos
    const popup = document.getElementById('language-popup');
    const langButtons = document.querySelectorAll('.lang-btn');
    
    // Verificar se popup existe
    if (!popup) {
        console.error('Popup não encontrado!');
        return;
    }
    
    // Verificar se já escolheu idioma antes
    const savedLang = localStorage.getItem('selectedLanguage');
    console.log('Idioma salvo:', savedLang);
    
    if (!savedLang) {
        // NÃO TEM IDIOMA SALVO - mostrar popup
        console.log('Mostrar popup');
        
        // Pequeno delay para garantir que tudo carregou
        setTimeout(function() {
            popup.classList.add('show');
            console.log('Popup visível!');
        }, 1000); // 1 segundo de delay
    } else {
        // TEM IDIOMA SALVO - aplicar
        console.log('Aplicar idioma:', savedLang);
        applyLanguage(savedLang);
    }
    
    // Botões de idioma
    langButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            console.log('Clicou em:', lang);
            
            if (lang) {
                // Salvar
                localStorage.setItem('selectedLanguage', lang);
                
                // Aplicar
                applyLanguage(lang);
                
                // Esconder popup
                popup.classList.remove('show');
                console.log('Popup escondido');
            }
        });
    });
});

// Função para aplicar idioma
function applyLanguage(lang) {
    console.log('Aplicando idioma:', lang);
    
    // Esconder todos os elementos com data-lang
    document.querySelectorAll('[data-lang]').forEach(function(el) {
        el.style.display = 'none';
    });
    
    // Mostrar elementos do idioma selecionado
    document.querySelectorAll('[data-lang="' + lang + '"]').forEach(function(el) {
        el.style.display = 'block';
    });
    
    // Atualizar título da página
    if (lang === 'pt') {
        document.title = 'Marta Energia Renovável | Soluções Sustentáveis';
    } else {
        document.title = 'Marta Energia Renovável | Sustainable Solutions';
    }
}
