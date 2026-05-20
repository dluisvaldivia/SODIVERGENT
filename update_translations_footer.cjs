const fs = require('fs');

const eng = {
    footer: {
        title: "That's Very ADHD",
        description: "Empowering neurodivergent individuals, parents, and families through coaching and understanding.",
        links_title: "Links",
        legal_title: "Legal",
        rights: "That's Very ADHD. All rights reserved."
    },
    contact_form: {
        name: "Name",
        name_placeholder: "Your name",
        email: "Email",
        email_placeholder: "your@email.com",
        message: "Message",
        message_placeholder: "How can we help?",
        success: "Message sent successfully!"
    }
};

const esp = {
    footer: {
        title: "That's Very ADHD",
        description: "Empoderando a individuos neurodivergentes, padres y familias a trav\u00e9s del coaching y la comprensi\u00f3n.",
        links_title: "Enlaces",
        legal_title: "Legal",
        rights: "That's Very ADHD. Todos los derechos reservados."
    },
    contact_form: {
        name: "Nombre",
        name_placeholder: "Tu nombre",
        email: "Correo electr\u00f3nico",
        email_placeholder: "tu@correo.com",
        message: "Mensaje",
        message_placeholder: "\u00bfC\u00f3mo podemos ayudarte?",
        success: "\u00a1Mensaje enviado con \u00e9xito!"
    }
};

const fra = {
    footer: {
        title: "That's Very ADHD",
        description: "\u00c9manciper les individus neurodivergents, les parents et les familles gr\u00e2ce au coaching et \u00e0 la compr\u00e9hension.",
        links_title: "Liens",
        legal_title: "L\u00e9gal",
        rights: "That's Very ADHD. Tous droits r\u00e9serv\u00e9s."
    },
    contact_form: {
        name: "Nom",
        name_placeholder: "Votre nom",
        email: "E-mail",
        email_placeholder: "votre@email.com",
        message: "Message",
        message_placeholder: "Comment pouvons-nous vous aider ?",
        success: "Message envoy\u00e9 avec succ\u00e8s !"
    }
};

const updateFile = (path, extra) => {
    const raw = fs.readFileSync(path, 'utf8');
    const parsed = JSON.parse(raw);
    Object.assign(parsed, extra);
    fs.writeFileSync(path, JSON.stringify(parsed, null, 4));
};

updateFile('public/locales/en/translation.json', eng);
updateFile('public/locales/es/translation.json', esp);
updateFile('public/locales/fr/translation.json', fra);
console.log('Update Complete Phase 3');
