document.getElementById("contactButton").addEventListener("click", function () {
    window.location.href = "mailto:contact@sherylsandberg.com?subject=Contact Request&body=Hello,%0A%0AI would like to get in touch with you regarding...%0A%0AKind regards,%0A[Your name]";
});

document.getElementById("languageSelect").addEventListener("change", function() {
const language = this.value;
if (language === "fr") {
    // Titles
    document.getElementById("home").innerHTML = '<a href="#homeTitle" class="text-white" style="text-decoration: none;">Accueil</a>';
    document.getElementById("education").innerHTML = '<a href="#educationTitle" class="text-white" style="text-decoration: none;">Éducation</a>';
    document.getElementById("certificates").innerHTML = '<a href="#certificatesTitle" class="text-white" style="text-decoration: none;">Certificats</a>' ;
    document.getElementById("skills").innerHTML = '<a href="#skillsTitle" class="text-white" style="text-decoration: none;">Compétances</a>';
    document.getElementById("languages").innerHTML = '<a href="#languagesTitle" class="text-white" style="text-decoration: none;">Langues</a>';
    document.getElementById("experience").innerHTML = '<a href="#experienceTitle" class="text-white" style="text-decoration: none;">Expérience</a>';
    document.getElementById("projects").innerHTML = '<a href="#projectsTitle" class="text-white" style="text-decoration: none;">Projets</a>';

    document.getElementById("educationTitle").textContent = "Éducation";
    document.getElementById("certificatesTitle").textContent = "Certificats";
    document.getElementById("skillsTitle").textContent = "Compétances";
    document.getElementById("languagesTitle").textContent = "Langues";
    document.getElementById("experienceTitle").textContent = "Expérience";
    document.getElementById("projectsTitle").textContent = "Projets";


    // select
    document.getElementById("languageSelect").innerHTML =
        '<option value="en">Anglais</option>'+
        '<option value="fr">Français</option>'+
        '<option value="es">Espagnol</option>';

    // Home
    document.getElementById("greeting").textContent = "SALUT!";
    document.getElementById("mainTitle").innerHTML = "<h1>JE SUIS <span>Sheryl Sandberg</span></h1>";
    document.getElementById("subtitle").textContent = "Défenseure du Leadership | Ancienne COO de Meta | Auteure à Succès";
    document.getElementById("description").textContent = "Une cadre d'entreprise, auteure et défenseure de l’autonomisation des femmes. En tant qu’ancienne COO de Meta (Facebook), j’ai travaillé à développer des entreprises à l’échelle mondiale tout en défendant le leadership et l’égalité des sexes. Ma passion est d'aider les femmes à s'affirmer et à atteindre leur plein potentiel.";

    // Btn
    document.getElementById("contactButton").textContent = "Contact";
    document.getElementById("savePdfBtn").textContent = "Enregistrer le CV";

    // footer
    document.getElementById("footer-copyright").innerHTML = "<p>&copy; 2024 Portfolio de Sheryl Sandberg</p>";
    document.getElementById("footer-website").innerHTML = "<p>Site web : <a href='https://leanin.org' target='_blank'>leanin.org</a></p>";
    document.getElementById("footer-social-media").innerHTML = "<p>Réseaux sociaux : <a href='https://www.linkedin.com/in/sheryl-sandberg-5126652/' target='_blank' class='ms-2'><i class='bi bi-linkedin'></i></a>"+
            "<a href='https://twitter.com/sherylsandberg' target='_blank' class='ms-2'><i class='bi bi-twitter'></i></a>"+
            "<a href='https://facebook.com/sherylsandberg' target='_blank' class='ms-2'><i class='bi bi-facebook'></i></a>"+
            "<a href='https://instagram.com/sherylsandberg' target='_blank' class='ms-2'><i class='bi bi-instagram'></i></a></p>";
    
    // Cards
    document.getElementById("meta-title").textContent = "Directeur des opérations (COO)";
    document.getElementById("meta-duration").textContent = "Mars 2008 - Sept 2022";
    document.getElementById("google-title").textContent = "VP, Ventes et opérations en ligne mondiales";
    document.getElementById("google-duration").textContent = "Nov 2001 - Mars 2008";
    document.getElementById("treasury-title").textContent = "Chef de cabinet";
    document.getElementById("treasury-duration").textContent = "1996 - 2000";

        
    // Lists
    document.getElementById("educationList").innerHTML = 
        "<li>1987-1991 : Harvard College, Licence en Économie.</li>" +
        "<li>1993-1995 : Harvard Business School, MBA.</li>";
    document.getElementById("certificatesList").innerHTML = 
        '<li>Certification Lean In Leadership - Développement du leadership</li>' +
        '<li>Forbes et Time Magazine - Plusieurs distinctions et prix honorifiques</li>';
    document.getElementById("skillsList").innerHTML = 
        "<li>Stratégie commerciale et leadership.</li>" +
        "<li>Création d'équipes et développement organisationnel.</li>" +
        "<li>Prise de parole en public et défense des intérêts.</li>" +
        "<li>Publicité et monétisation des revenus.</li>";
    document.getElementById("languagesList").innerHTML = 
        '<li>Anglais <span class="circle level"></span><span class="circle level"></span><span class="circle level"></span><span class="circle level"></span><span class="circle level"></span></li>'+
        '<li>Français <span class="circle level"></span><span class="circle level"></span><span class="circle level"></span><span class="circle level"></span><span class="circle level-em"></span></li>'+
        '<li>Espagnol <span class="circle level"></span><span class="circle level"></span><span class="circle level-em"></span><span class="circle level-em"></span><span class="circle level-em"></span></li>';
    document.getElementById("projectsList").innerHTML = 
        "<li>Mouvement Lean In : Renforcer l'autonomie des femmes dans le monde.</li>" +
        "<li>Fondation Option B : Prône la résilience et le dépassement de l'adversité.</li>";
    
}else if (language === "es") {
            // Titles
            document.getElementById("home").innerHTML = '<a href="#homeTitle" class="text-white" style="text-decoration: none;">Inicio</a>';
            document.getElementById("education").innerHTML = '<a href="#educationTitle" class="text-white" style="text-decoration: none;">Educación</a>';
            document.getElementById("certificates").innerHTML = '<a href="#certificatesTitle" class="text-white" style="text-decoration: none;">Certificados</a>' ;
            document.getElementById("skills").innerHTML = '<a href="#skillsTitle" class="text-white" style="text-decoration: none;">Habilidades</a>';
            document.getElementById("languages").innerHTML = '<a href="#languagesTitle" class="text-white" style="text-decoration: none;">Idiomas</a>';
            document.getElementById("experience").innerHTML = '<a href="#experienceTitle" class="text-white" style="text-decoration: none;">Experiencia</a>';
            document.getElementById("projects").innerHTML = '<a href="#projectsTitle" class="text-white" style="text-decoration: none;">Proyectos</a>';

    
            document.getElementById("educationTitle").textContent = "Educación";
            document.getElementById("certificatesTitle").textContent = "Certificados";
            document.getElementById("skillsTitle").textContent = "Habilidades";
            document.getElementById("languagesTitle").textContent = "Idiomas";
            document.getElementById("experienceTitle").textContent = "Experiencia";
            document.getElementById("projectsTitle").textContent = "Proyectos";

            // select
            document.getElementById("languageSelect").innerHTML =
                '<option value="en">Inglés</option>'+
                '<option value="fr">Francés</option>'+
                '<option value="es">Español</option>';
    
            // Home
            document.getElementById("greeting").textContent = "¡HOLA!";
            document.getElementById("mainTitle").innerHTML = "<h1>SOMOS <span>Sheryl Sandberg</span></h1>";
            document.getElementById("subtitle").textContent = "Defensora del Liderazgo | Ex COO de Meta | Autora Bestselling";
            document.getElementById("description").textContent = "Ejecutiva de negocios, autora y defensora del empoderamiento de las mujeres. Como ex COO de Meta (Facebook), trabajé para escalar negocios globales mientras promovía el liderazgo y la igualdad de género. Mi pasión es ayudar a las mujeres a apoyarse y alcanzar su máximo potencial.";
    
            // Btn
            document.getElementById("contactButton").textContent = "Contacto";
            document.getElementById("savePdfBtn").textContent = "Guardar CV";
    
            // Footer
            document.getElementById("footer-copyright").innerHTML = "<p>&copy; 2024 Portafolio de Sheryl Sandberg</p>";
            document.getElementById("footer-website").innerHTML = "<p>Sitio web : <a href='https://leanin.org' target='_blank'>leanin.org</a></p>";
            document.getElementById("footer-social-media").innerHTML = "<p>Redes sociales : <a href='https://www.linkedin.com/in/sheryl-sandberg-5126652/' target='_blank' class='ms-2'><i class='bi bi-linkedin'></i></a>" +
                "<a href='https://twitter.com/sherylsandberg' target='_blank' class='ms-2'><i class='bi bi-twitter'></i></a>" +
                "<a href='https://facebook.com/sherylsandberg' target='_blank' class='ms-2'><i class='bi bi-facebook'></i></a>" +
                "<a href='https://instagram.com/sherylsandberg' target='_blank' class='ms-2'><i class='bi bi-instagram'></i></a></p>";
    
            // Cards
            document.getElementById("meta-title").textContent = "Directora de Operaciones (COO)";
            document.getElementById("meta-duration").textContent = "Mar 2008 - Sept 2022";
            document.getElementById("google-title").textContent = "VP, Ventas y operaciones en línea globales";
            document.getElementById("google-duration").textContent = "Nov 2001 - Mar 2008";
            document.getElementById("treasury-title").textContent = "Jefa de gabinete";
            document.getElementById("treasury-duration").textContent = "1996 - 2000";
    
            // Lists
            document.getElementById("educationList").innerHTML =
                "<li>1987-1991 : Harvard College, Licenciatura en Economía.</li>" +
                "<li>1993-1995 : Harvard Business School, MBA.</li>";
            document.getElementById("certificatesList").innerHTML =
                '<li>Certificación Lean In Leadership - Desarrollo de liderazgo</li>' +
                '<li>Forbes y Time Magazine - Varias distinciones y premios honoríficos</li>';
            document.getElementById("skillsList").innerHTML =
                "<li>Estrategia empresarial y liderazgo.</li>" +
                "<li>Creación de equipos y desarrollo organizacional.</li>" +
                "<li>Oratoria y defensa.</li>" +
                "<li>Publicidad y monetización de ingresos.</li>";
            document.getElementById("languagesList").innerHTML =
                '<li>Inglés <span class="circle level"></span><span class="circle level"></span><span class="circle level"></span><span class="circle level"></span><span class="circle level"></span></li>' +
                '<li>Francés <span class="circle level"></span><span class="circle level"></span><span class="circle level"></span><span class="circle level"></span><span class="circle level-em"></span></li>' +
                '<li>Español <span class="circle level"></span><span class="circle level"></span><span class="circle level-em"></span><span class="circle level-em"></span><span class="circle level-em"></span></li>';
            document.getElementById("projectsList").innerHTML =
                "<li>Movimiento Lean In: Empoderando a las mujeres en todo el mundo.</li>" +
                "<li>Fundación Option B: Promoviendo la resiliencia y el poder de superar la adversidad.</li>";
}
else{
    // Titles
    document.getElementById("home").innerHTML = '<a href="#homeTitle" class="text-white" style="text-decoration: none;">Home</a>';
    document.getElementById("education").innerHTML = '<a href="#educationTitle" class="text-white" style="text-decoration: none;">Education</a>';
    document.getElementById("certificates").innerHTML = '<a href="#certificatesTitle" class="text-white" style="text-decoration: none;">Certificates</a>' ;
    document.getElementById("skills").innerHTML = '<a href="#skillsTitle" class="text-white" style="text-decoration: none;">Skills</a>';
    document.getElementById("languages").innerHTML = '<a href="#languagesTitle" class="text-white" style="text-decoration: none;">Languages</a>';
    document.getElementById("experience").innerHTML = '<a href="#experienceTitle" class="text-white" style="text-decoration: none;">Experience</a>';
    document.getElementById("projects").innerHTML = '<a href="#projectsTitle" class="text-white" style="text-decoration: none;">Projects</a>';

    document.getElementById("educationTitle").textContent = "Education";
    document.getElementById("certificatesTitle").textContent = "Certificates";
    document.getElementById("skillsTitle").textContent = "Skills";
    document.getElementById("languagesTitle").textContent = "Languages";
    document.getElementById("experienceTitle").textContent = "Experience";
    document.getElementById("projectsTitle").textContent = "Projects";

    // select
    document.getElementById("languageSelect").innerHTML =
        '<option value="en">English</option>'+
        '<option value="fr">French</option>'+
        '<option value="es">Spanish</option>';

    // Home
    document.getElementById("greeting").textContent = "HI THERE!";
    document.getElementById("mainTitle").innerHTML = "<h1>I'M <span>Sheryl Sandberg</span></h1>";
    document.getElementById("subtitle").textContent = "Leadership Advocate | Former COO of Meta | Bestselling Author";
    document.getElementById("description").textContent = "A business executive, author, and advocate for women’s empowerment. As the former COO of Meta (Facebook), I’ve worked to scale global businesses while championing leadership and gender equality. My passion lies in helping women lean in and achieve their full potential.";

    // Btn
    document.getElementById("contactButton").textContent = "Contact";
    document.getElementById("savePdfBtn").textContent = "Save Resume";

    // footer
    document.getElementById("footer-copyright").innerHTML = "<p>&copy; 2024 Sheryl Sandberg Portfolio</p>";
    document.getElementById("footer-website").innerHTML = "<p>Website : <a href='https://leanin.org' target='_blank'>leanin.org</a></p>";
    document.getElementById("footer-social-media").innerHTML = "<p>Social Media : <a href='https://www.linkedin.com/in/sheryl-sandberg-5126652/' target='_blank' class='ms-2'><i class='bi bi-linkedin'></i></a>"+
            "<a href='https://twitter.com/sherylsandberg' target='_blank' class='ms-2'><i class='bi bi-twitter'></i></a>"+
            "<a href='https://facebook.com/sherylsandberg' target='_blank' class='ms-2'><i class='bi bi-facebook'></i></a>"+
            "<a href='https://instagram.com/sherylsandberg' target='_blank' class='ms-2'><i class='bi bi-instagram'></i></a></p>";
    
    // Cards
    document.getElementById("meta-title").textContent = "Chief Operating Officer";
    document.getElementById("meta-duration").textContent = "Mar 2008 - Sep 2022";
    document.getElementById("google-title").textContent = "VP, Global Online Sales & Ops";
    document.getElementById("google-duration").textContent = "Nov 2001 - Mar 2008";
    document.getElementById("treasury-title").textContent = "Chief of Staff";
    document.getElementById("treasury-duration").textContent = "1996 - 2000";

        
    // Lists
    document.getElementById("educationList").innerHTML = 
        "<li>1987-1991 : Harvard College, Bachelor's degree in Economics.</li>" +
        "<li>1993-1995 : Harvard Business School, MBA.</li>";
    document.getElementById("certificatesList").innerHTML = 
        '<li>Lean In Leadership Certification - Leadership Development</li>' +
        '<li>Forbes and Time Magazine - Numerous accolades and honorary awards</li>';
    document.getElementById("skillsList").innerHTML = 
        "<li>Business Strategy and Leadership.</li>" +
        "<li>Team Building and Organizational Development.</li>" +
        "<li>Public Speaking and Advocacy.</li>" +
        "<li>Advertising and Revenue Monetization.</li>";
    document.getElementById("languagesList").innerHTML = 
        '<li>English <span class="circle level"></span><span class="circle level"></span><span class="circle level"></span><span class="circle level"></span><span class="circle level"></span></li>'+
        '<li>French <span class="circle level"></span><span class="circle level"></span><span class="circle level"></span><span class="circle level"></span><span class="circle level-em"></span></li>'+
        '<li>Spanish <span class="circle level"></span><span class="circle level"></span><span class="circle level-em"></span><span class="circle level-em"></span><span class="circle level-em"></span></li>';
    document.getElementById("projectsList").innerHTML = 
        "<li>Lean In Movement: Empowering women globally.</li>" +
        "<li>Option B Foundation: Advocating resilience and overcoming adversity.</li>";
}
});


document.getElementById("savePdfBtn").addEventListener("click", function () {
    const { jsPDF } = window.jspdf; // Import jsPDF
    const doc = new jsPDF();

    // Add content to the PDF
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("Sheryl Sandberg", 20, 20);

    doc.setFontSize(16);
    doc.setFont("helvetica", "normal");
    doc.text("Leadership Advocate | Former COO of Meta | Bestselling Author", 20, 30);
    
    doc.setFontSize(14);
    doc.text("Education:", 20, 50);
    doc.text("- Harvard College: Bachelor's in Economics (1991-1995)", 20, 60);
    doc.text("- Harvard Business School: MBA (1995-1997)", 20, 70);

    doc.text("Skills:", 20, 90);
    doc.text("- Business Strategy and Leadership", 20, 100);
    doc.text("- Team Building and Organizational Development", 20, 110);

    doc.text("Languages:", 20, 130);
    doc.text("- English (Native)", 20, 140);
    doc.text("- French (Intermediate)", 20, 150);

    doc.text("Experience:", 20, 170);
    doc.text("- COO, Meta (2008-2022)", 20, 180);
    doc.text("- VP of Global Online Sales, Google", 20, 190);

    // Save the PDF
    doc.save("Sheryl_Sandberg_Resume.pdf");
});





const toggleDarkMode = () => {
    const body = document.body;
    const icon = document.getElementById('theme-icon');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }

    // Sauvegarder l'état dans localStorage
    localStorage.setItem('darkMode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
};

// Restaurer l'état du thème au chargement
window.onload = () => {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-icon').classList.remove('fa-moon');
        document.getElementById('theme-icon').classList.add('fa-sun');
    }
};



