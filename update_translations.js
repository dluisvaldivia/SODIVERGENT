const fs = require('fs');

const eng = {
    faq: {
        title: "FAQ",
        standards: {
            title: "Professional Standards",
            p1: "Practice is grounded in ICF Code of Ethics (confidentiality, integrity, professional conduct), PAAC principles for neuro-affirming ADHD coaching, and Clean Language ethics (metaphorical integrity, zero interference).",
            p2: "Scope of practice is explicitly coaching, not therapy. Trauma-informed space-holding, somatic awareness, psychoeducation, and the Systematic Pause fall within scope. Trauma processing, EMDR, shadow work, and clinical psychiatric treatment are referred to.",
            p3: "All work is rooted in the Neurodiversity Paradigm recognizing neurotypes as natural human variation, not deficits. Behavior is communication. The focus is access, safety, and self-knowledge."
        },
        q: {
            therapy: "Is this therapy?",
            diagnosis: "Do I need a formal diagnosis to work together?",
            unsure: "What if I'm not sure whether I'm neurodivergent?",
            partial: "What if I have a diagnosis, but it has never quite explained everything?",
            coaching_before: "I've tried coaching before, and it didn't work. Why would this be different?",
            specific_profile: "Do you work with my specific profile?",
            language: "What language do we work in?",
            based: "Where are you based, and does it matter?",
            matching_call: "What does the Matching Call actually involve?",
            afford: "What if I can't afford coaching?",
            professional: "I'm a professional who wants to work with you or collaborate. Is that possible?"
        },
        a: {
            therapy: "No. This is coaching, and the distinction matters and is always kept clear. The work starts from the assumption that you already know a great deal about yourself, and that the frameworks you have been given haven't done that knowledge justice. Sessions don't process trauma, conduct clinical assessments, or replace psychiatric care. When that's what the situation calls for, it's named directly, and finding the right support becomes part of the work.",
            diagnosis: "No. Self-recognition is valid here. If you recognise yourself in the overlap patterns: if something in what you've read has landed before anyone has officially named it: that's enough to start. A formal diagnosis can be a useful context, but it has never been the whole picture, which is rather the point.",
            unsure: "Start with Invisible Architecture. It's free, it takes about 12 minutes, and it was built exactly for that moment: when something feels recognisable but you don't yet have the language for what it is. If what comes back in your overlap summary resonates, the Matching Call is the natural next step.",
            partial: "That's the most common reason people arrive here. A diagnosis that accounts for part of the picture, advice that works for someone else's brain, frameworks that almost fit. This practice starts precisely where those explanations run out. The overlap is where the real architecture lives, and mapping it is the work.",
            coaching_before: "Most coaching approaches were built for a different kind of nervous system. Goal-setting, action plans, accountability structures: these aren't wrong exactly, they just weren't designed for interest-driven attention, regulation load, or a threat response that activates before thinking catches up. This practice starts with the architecture first, which means what gets built actually fits how you work rather than how you're supposed to work.",
            specific_profile: "The practice holds 23 neurodivergent profiles and, more importantly, the overlaps between them. If you're carrying ADHD, autism, AuDHD, PDA, dyslexia, dyscalculia, dyspraxia, sensory processing differences, giftedness, twice-exceptionality, trauma-affected learning, or any combination of these: yes. If you're not sure what you're carrying but something on the site feels recognisable, also yes. The Matching Call exists to figure out whether this is the right fit before anything else.",
            language: "English, Spanish, or French. You choose at the application stage, and everything: sessions, between-session support, and written summaries happen in that language. If you're multilingual and want to switch between sessions, that's a conversation worth having at the Matching Call.",
            based: "Málaga, Spain. Sessions are online, which means geography doesn't matter. Clients currently come from across Europe, the Americas, and beyond. The Family Map has a specific strand for navigating the Spanish education system, but everything else works wherever you are.",
            matching_call: "Thirty minutes. Free. By application only, which means there's a short form to fill in before it gets scheduled: not to filter people out, but to make sure the conversation is useful from the first minute, rather than spending it on logistics. It isn't a sales call or a free coaching session. It's an honest conversation to establish fit, understand what you're carrying, and decide together whether this is the right next step. If it isn't, that gets said directly too.",
            afford: "The Invisible Architecture lead magnet and the profile library are free and always will be. They were built for exactly this: for the person who needs the map but can't access paid support right now. Use them. That's what they're there for.",
            professional: "Yes, and it's actively part of where this practice is going. Use the Other Inquiry form in Get in Touch and tell us what you're thinking."
        }
    },
    about: {
        title: "ABOUT",
        intro: {
            heading: "This didn't start with a business plan.",
            p1: "It started with a gap. The kind you only see when you've fallen through it yourself, and then watched others fall through the same place, over and over, in different languages, in different cities, carrying different diagnoses that all pointed at the same missing piece.",
            p2: "The neurodivergent paradigm has been around long enough to have conferences, certifications, and TED talks. And still, most people who need it most can't access it. Not because the knowledge doesn't exist. Because nobody has connected it to their specific life, in their specific language, inside their specific system.",
            p3: "That's the gap this practice was built to fill."
        },
        believe: {
            heading: "What we believe",
            p1: "Neurodivergence isn't a collection of disorders that happen to overlap. It's architecture. A specific way of being wired that makes complete sense when you see the full picture, and almost no sense when you only see part of it.",
            p2: "Most people arrive here having seen part of it. A diagnosis at seven that got buried under other explanations. A label that almost fits. A framework built for a different kind of mind, applied to theirs and found wanting.",
            p3: "The work is always the same: find the full picture. Map what's actually there. Build something from that, not from what should have been there."
        },
        started: {
            heading: "How this started",
            p1: "This practice exists because two gaps became impossible to ignore.",
            p2: "The first was the near-total silence around Down syndrome compared to the infrastructure that had built up around other neurodivergent profiles. The second was the experience of neurodivergent architecture being partially explained across multiple languages, multiple systems, and multiple diagnoses, each holding part of the picture and none of the whole.",
            p3: "Both gaps pointed at the same truth. There is a visible and invisible spectrum under every human being. And the people whose difficulties are invisible: who don't look like life is harder for them, who have become so skilled at translation and adaptation that even they sometimes struggle to locate the original signal: are often the most isolated of all. Not because their needs are smaller. Because the systems designed to help were built to respond to what they could see.",
            p4: "This practice was built for the full spectrum. Not from clinical distance. From the particular clarity that arrives when you stop waiting for the right framework to exist and start building it yourself."
        },
        going: {
            heading: "Where this is going",
            p1: "[Brand name] is not a solo practice with ambitions. It's a practice built from the beginning to grow into something larger than one person can hold.",
            p2: "The gaps in neurodivergent support are not small. They exist in schools, workplaces, medical systems, families, and in the space between what research knows and what communities have access to. Filling them requires coaches, specialists, advocates, educators, and technologists who are convinced, not just trained, that neurodivergent people deserve a better quality of life.",
            p3: "That's who this practice is being built with and for."
        },
        cta_text: "If you're here because you need support, the work starts with The Matching Call.",
        cta_button: "Book your Matching Call",
        cta_contact: "If you're here because you want to be part of what comes next, we want to hear from you."
    },
    accessibility: {
        title: "Accessibility Statement",
        p1: "At That's Very ADHD, we are committed to ensuring that our website and services are accessible to all individuals, including those with disabilities. We strive to provide a user-friendly experience that accommodates a variety of accessibility needs.",
        features_title: "Accessibility Features",
        features_intro: "We have taken the following measures to enhance the accessibility of our website:",
        f1: "Our website is designed to be navigable using both keyboard and mouse.",
        f2: "We provide alternative text (alt text) for all non-text content, such as images and graphics, to ensure it can be interpreted by screen readers.",
        f3: "We use color contrast that meets accessibility standards to ensure readability for individuals with visual impairments.",
        f4: "We provide captions and transcripts for video and audio content whenever applicable.",
        f5": "Our site supports screen reader compatibility for users with visual disabilities.",
        feedback_title: "Feedback & Assistance",
        feedback_p1: "We are always looking for ways to improve our accessibility. If you encounter any accessibility issues while using our website or services, please let us know. We are happy to provide assistance or address any specific needs you may have to enhance your experience.",
        feedback_p2: "If you have feedback, suggestions, or need assistance, please contact us at:",
        third_party_title: "Third-Party Services",
        third_party_p: "While we make every effort to ensure our website is fully accessible, some third-party services we use, such as Calendly and Stripe, may not fully comply with all accessibility standards. We encourage you to reach out to us if you encounter any difficulties using these third-party services, and we will assist you in any way we can.",
        commitment_title: "Commitment to Accessibility",
        commitment_p1: "We are committed to continuing to improve the accessibility of our website and services. We regularly review and update our website to ensure we are meeting accessibility best practices and complying with accessibility guidelines such as the Web Content Accessibility Guidelines (WCAG) 2.1.",
        commitment_p2: "Thank you for your understanding and for being part of the That's Very ADHD community."
    },
    others: {
        title: "OTHERS",
        p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        p2: "We offer bespoke services for organizations, schools, and other groups. Contact us to discuss your specific needs.",
        schedule: "Schedule a Consultation"
    }
};

const esp = {
    faq: {
        title: "FAQ",
        standards: {
            title: "Estándares Profesionales",
            p1: "La práctica se basa en el Código de Ética de la ICF (confidencialidad, integridad, conducta profesional), los principios de la PAAC para el coaching de TDAH que afirma la neurodiversidad y la ética del Lenguaje Limpio (integridad metafórica, cero interferencia).",
            p2: "El alcance de la práctica es explícitamente el coaching, no la terapia. El mantenimiento del espacio informado por el trauma, la conciencia somática, la psicoeducación y la Pausa Sistemática entran dentro de este alcance. El procesamiento de traumas, el EMDR, el trabajo de sombras y el tratamiento psiquiátrico clínico son derivados a otros profesionales.",
            p3: "Todo el trabajo está arraigado en el Paradigma de la Neurodiversidad, reconociendo los neurotipos como una variación humana natural, no como déficits. El comportamiento es comunicación. El enfoque es el acceso, la seguridad y el autoconocimiento."
        },
        q: {
            therapy: "¿Es esto terapia?",
            diagnosis: "¿Necesito un diagnóstico formal para trabajar juntos?",
            unsure: "¿Qué pasa si no estoy seguro de si soy neurodivergente?",
            partial: "¿Qué pasa si tengo un diagnóstico, pero nunca ha explicado todo del todo?",
            coaching_before: "He probado el coaching antes y no funcionó. ¿Por qué esto sería diferente?",
            specific_profile: "¿Trabajas con mi perfil específico?",
            language: "¿En qué idioma trabajamos?",
            based: "¿Dónde estás basado, y eso importa?",
            matching_call: "¿En qué consiste realmente la Llamada de Compatibilidad?",
            afford: "¿Qué pasa si no puedo permitirme el coaching?",
            professional: "Soy un profesional que quiere trabajar con ustedes o colaborar. ¿Es posible?"
        },
        a: {
            therapy: "No. Esto es coaching, y la distinción importa y siempre se mantiene clara. El trabajo parte del supuesto de que ya sabes mucho sobre ti mismo, y que los marcos que te han dado no han hecho justicia a ese conocimiento. Las sesiones no procesan el trauma, no realizan evaluaciones clínicas ni reemplazan la atención psiquiátrica. Cuando la situación lo requiere, se nombra directamente, y encontrar el apoyo adecuado se convierte en parte del trabajo.",
            diagnosis: "No. El autorreconocimiento es válido aquí. Si te reconoces en los patrones de solapamiento: si algo de lo que has leído te ha impactado antes de que nadie lo haya nombrado oficialmente: eso es suficiente para empezar.",
            unsure: "Empieza con la Arquitectura Invisible. Es gratis, toma unos 12 minutos, y fue construido exactamente para ese momento: cuando algo se siente reconocible pero aún no tienes el lenguaje para explicar qué es. Si lo que vuelve en tu resumen de solapamiento resuena contigo, la Llamada de Compatibilidad es el siguiente paso natural.",
            partial: "Esa es la razón más común por la que la gente llega aquí. Un diagnóstico que explica una parte de la imagen, consejos que funcionan para el cerebro de otra persona, marcos que casi encajan. Esta práctica comienza precisamente donde esas explicaciones se agotan. El solapamiento es donde vive la verdadera arquitectura, y mapearla es el trabajo.",
            coaching_before: "La mayoría de los enfoques de coaching fueron construidos para un tipo de sistema nervioso diferente. El establecimiento de metas, los planes de acción, las estructuras de responsabilidad: estos no son incorrectos exactamente, simplemente no fueron diseñados para la atención impulsada por intereses, la carga de regulación o una respuesta de amenaza que se activa antes de que el pensamiento la alcance. Esta práctica comienza con la arquitectura primero, lo que significa que lo que se construye realmente se adapta a cómo funcionas en lugar de cómo se supone que debes funcionar.",
            specific_profile: "La práctica abarca 23 perfiles neurodivergentes y, más importantemente, los solapamientos entre ellos. Si tienes TDAH, autismo, AuDHD, PDA, dislexia, discalculia, dispraxia, diferencias en el procesamiento sensorial, superdotación, doble excepcionalidad, aprendizaje afectado por el trauma, o cualquier combinación de estos: sí. Si no estás seguro de lo que tienes pero algo en el sitio se siente reconocible, también sí. La Llamada de Compatibilidad existe para averiguar si esto es el ajuste correcto antes de cualquier otra cosa.",
            language: "Inglés, español o francés. Tú eliges en la etapa de solicitud, y todo: las sesiones, el apoyo entre sesiones y los resúmenes escritos se realizan en ese idioma. Si eres multilingüe y quieres cambiar entre sesiones, esa es una conversación que vale la pena tener en la Llamada de Compatibilidad.",
            based: "Málaga, España. Las sesiones son en línea, lo que significa que la geografía no importa. Los clientes actualmente provienen de toda Europa, América y más allá. El Mapa Familiar tiene un apartado específico para navegar por el sistema educativo español, pero todo lo demás funciona estés donde estés.",
            matching_call: "Treinta minutos. Gratis. Solo por solicitud, lo que significa que hay un breve formulario que rellenar antes de que se programe: no para filtrar a la gente, sino para asegurar que la conversación sea útil desde el primer minuto, en lugar de gastarlo en logística. No es una llamada de ventas ni una sesión de coaching gratuita. Es una conversación honesta para establecer la compatibilidad, entender lo que llevas contigo y decidir juntos si este es el siguiente paso correcto. Si no lo es, también se dice directamente.",
            afford: "El documento de Arquitectura Invisible y la biblioteca de perfiles son gratuitos y siempre lo serán. Fueron construidos para esto exactamente: para la persona que necesita el mapa pero no puede acceder al apoyo de pago en este momento. Úsalos. Para eso están.",
            professional: "Sí, y es activamente parte de hacia dónde va esta práctica. Utiliza el formulario de Otras Consultas en Ponte en Contacto y cuéntanos lo que estás pensando."
        }
    },
    about: {
        title: "SOBRE NOSOTROS",
        intro: {
            heading: "Esto no empezó con un plan de negocios.",
            p1: "Empezó con un vacío. El tipo de vacío que solo ves cuando has caído por él tú mismo, y luego has visto a otros caer por el mismo lugar, una y otra vez, en diferentes idiomas, en diferentes ciudades, con diagnósticos diferentes que todos apuntaban a la misma pieza que faltaba.",
            p2: "El paradigma neurodivergente ha existido el tiempo suficiente como para tener conferencias, certificaciones y charlas TED. Y aún así, la mayoría de las personas que más lo necesitan no pueden acceder a él. No porque el conocimiento no exista. Porque nadie lo ha conectado a su vida específica, en su idioma específico, dentro de su sistema específico.",
            p3: "Ese es el vacío que esta práctica fue construida para llenar."
        },
        believe: {
            heading: "En qué creemos",
            p1: "La neurodivergencia no es una colección de trastornos que coinciden por casualidad. Es arquitectura. Una forma específica de estar cableado que tiene todo el sentido cuando ves el panorama general, y casi ningún sentido cuando solo ves una parte.",
            p2: "La mayoría de las personas llegan aquí habiendo visto una parte. Un diagnóstico a los siete años que quedó enterrado bajo otras explicaciones. Una etiqueta que casi encaja. Un marco construido para un tipo de mente diferente, aplicado a la suya y encontrado deficiente.",
            p3: "El trabajo es siempre el mismo: encontrar el panorama general. Mapear lo que realmente está ahí. Construir algo a partir de eso, no a partir de lo que debería haber estado ahí."
        },
        started: {
            heading: "Cómo empezó esto",
            p1: "Esta práctica existe porque dos vacíos se volvieron imposibles de ignorar.",
            p2: "El primero fue el silencio casi total en torno al síndrome de Down en comparación con la infraestructura que se había construido alrededor de otros perfiles neurodivergentes. El segundo fue la experiencia de que la arquitectura neurodivergente se explicaba parcialmente a través de múltiples idiomas, múltiples sistemas y múltiples diagnósticos, cada uno con una parte del panorama y ninguno con el todo.",
            p3: "Ambos vacíos apuntaban a la misma verdad. Hay un espectro visible e invisible debajo de cada ser humano. Y las personas cuyas dificultades son invisibles: las que no parece que la vida les sea más difícil, que se han vuelto tan hábiles en la traducción y adaptación que incluso ellas mismas a veces luchan por localizar la señal original: a menudo son las más aisladas de todas. No porque sus necesidades sean menores. Porque los sistemas diseñados para ayudar fueron construidos para responder a lo que podían ver.",
            p4: "Esta práctica fue construida para todo el espectro. No desde la distancia clínica. Desde la claridad particular que llega cuando dejas de esperar a que exista el marco adecuado y empiezas a construirlo tú mismo."
        },
        going: {
            heading: "Hacia dónde va esto",
            p1: "Esta no es una práctica individual con ambiciones. Es una práctica construida desde el principio para crecer hasta convertirse en algo más grande de lo que una persona puede abarcar.",
            p2: "Los vacíos en el apoyo neurodivergente no son pequeños. Existen en las escuelas, los lugares de trabajo, los sistemas médicos, las familias y en el espacio entre lo que la investigación sabe y a lo que las comunidades tienen acceso. Llenarlos requiere coaches, especialistas, defensores, educadores y tecnólogos que estén convencidos, no solo capacitados, de que las personas neurodivergentes merecen una mejor calidad de vida.",
            p3: "Esa es la gente con la que, y para la que, se está construyendo esta práctica."
        },
        cta_text: "Si estás aquí porque necesitas apoyo, el trabajo comienza con la Llamada de Compatibilidad.",
        cta_button: "Reserva tu Llamada de Compatibilidad",
        cta_contact: "Si estás aquí porque quieres ser parte de lo que viene después, queremos saber de ti."
    },
    accessibility: {
        title: "Declaración de Accesibilidad",
        p1: "En That's Very ADHD, estamos comprometidos a garantizar que nuestro sitio web y servicios sean accesibles para todas las personas, incluidas aquellas con discapacidades. Nos esforzamos por proporcionar una experiencia fácil de usar que se adapte a una variedad de necesidades de accesibilidad.",
        features_title: "Características de Accesibilidad",
        features_intro: "Hemos tomado las siguientes medidas para mejorar la accesibilidad de nuestro sitio web:",
        f1: "Nuestro sitio web está diseñado para ser navegable utilizando tanto el teclado como el ratón.",
        f2: "Proporcionamos texto alternativo (texto alt) para todo el contenido no textual, como imágenes y gráficos, para garantizar que pueda ser interpretado por lectores de pantalla.",
        f3: "Utilizamos un contraste de color que cumple con los estándares de accesibilidad para garantizar la legibilidad de las personas con discapacidades visuales.",
        f4: "Proporcionamos subtítulos y transcripciones para el contenido de video y audio siempre que sea aplicable.",
        f5: "Nuestro sitio es compatible con lectores de pantalla para usuarios con discapacidades visuales.",
        feedback_title: "Comentarios y Asistencia",
        feedback_p1: "Siempre estamos buscando formas de mejorar nuestra accesibilidad. Si encuentras algún problema de accesibilidad al usar nuestro sitio web o servicios, por favor háznoslo saber. Estaremos encantados de brindarte asistencia o abordar cualquier necesidad específica que puedas tener para mejorar tu experiencia.",
        feedback_p2: "Si tienes comentarios, sugerencias o necesitas asistencia, por favor contáctanos en:",
        third_party_title: "Servicios de Terceros",
        third_party_p: "Aunque hacemos todo lo posible para garantizar que nuestro sitio web sea completamente accesible, algunos servicios de terceros que utilizamos, como Calendly y Stripe, pueden no cumplir completamente con todos los estándares de accesibilidad. Te animamos a que te comuniques con nosotros si encuentras alguna dificultad al usar estos servicios de terceros, y te asistiremos en todo lo que podamos.",
        commitment_title: "Compromiso con la Accesibilidad",
        commitment_p1: "Estamos comprometidos a seguir mejorando la accesibilidad de nuestro sitio web y servicios. Revisamos y actualizamos regularmente nuestro sitio web para asegurarnos de que estamos cumpliendo con las mejores prácticas de accesibilidad y cumpliendo con las pautas de accesibilidad, como las Pautas de Accesibilidad al Contenido en la Web (WCAG) 2.1.",
        commitment_p2: "Gracias por tu comprensión y por ser parte de la comunidad The That''s Very ADHD."
    },
    others: {
        title: "OTROS",
        p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        p2: "Ofrecemos servicios a medida para organizaciones, escuelas y otros grupos. Contáctenos para hablar sobre sus necesidades específicas.",
        schedule: "Programe una Consulta"
    }
};

const fra = {
    faq: {
        title: "FAQ",
        standards: {
            title: "Normes Professionnelles",
            p1: "La pratique est fondée sur le Code d'Éthique de l'ICF (confidentialité, intégrité, conduite professionnelle), les principes de la PAAC pour le coaching TDAH affirmant la neurodiversité, et l'éthique du Langage Clair (intégrité métaphorique, zéro interférence).",
            p2: "Le champ de pratique est explicitement le coaching, pas la thérapie. Le maintien de l'espace informé par le trauma, la conscience somatique, la psychoéducation et la Pause Systématique font partie de ce champ. Le traitement des traumatismes, l'EMDR, le travail sur l'ombre et le traitement psychiatrique clinique sont orientés vers d'autres professionnels.",
            p3: "Tout le travail est enraciné dans le Paradigme de la Neurodiversité reconnaissant les neurotypes comme une variation humaine naturelle, pas comme des déficits. Le comportement est une communication. L'accent est mis sur l'accès, la sécurité et la connaissance de soi."
        },
        q: {
            therapy: "Est-ce une thérapie ?",
            diagnosis: "Ai-je besoin d'un diagnostic formel pour que nous travaillions ensemble ?",
            unsure: "Et si je ne suis pas sûr(e) d'être neurodivergent(e) ?",
            partial: "Et si j'ai un diagnostic, mais qu'il n'a jamais tout expliqué ?",
            coaching_before: "J'ai déjà essayé le coaching et ça n'a pas marché. Pourquoi cela serait-il différent ?",
            specific_profile: "Travaillez-vous avec mon profil spécifique ?",
            language: "Dans quelle langue travaillons-nous ?",
            based: "Où êtes-vous basé(e) et est-ce que ça a de l'importance ?",
            matching_call: "En quoi consiste réellement l'Appel de Correspondance ?",
            afford: "Et si je n'ai pas les moyens de payer un coaching ?",
            professional: "Je suis un professionnel qui souhaite travailler avec vous ou collaborer. Est-ce possible ?"
        },
        a: {
            therapy: "Non. Il s'agit de coaching, et la distinction a de l'importance et est toujours maintenue claire. Le travail part du principe que vous en savez déjà beaucoup sur vous-même, et que les cadres qu'on vous a donnés n'ont pas rendu justice à cette connaissance. Les sessions ne traitent pas le trauma, ne font pas d'évaluations cliniques et ne remplacent pas les soins psychiatriques. Quand la situation l'exige, cela est nommé directement, et trouver le bon soutien fait partie du travail.",
            diagnosis: "Non. La reconnaissance de soi est valide ici. Si vous vous reconnaissez dans les schémas de chevauchement : si quelque chose dans ce que vous avez lu a résonné en vous avant que quiconque ne l'ait officiellement nommé : c'est suffisant pour commencer.",
            unsure: "Commencez par l'Architecture Invisible. C'est gratuit, cela prend environ 12 minutes, et cela a été conçu exactement pour ce moment-là : quand quelque chose semble reconnaissable mais que vous n'avez pas encore les mots pour dire ce que c'est. Si ce qui revient dans votre résumé de chevauchement résonne en vous, l'Appel de Correspondance est la prochaine étape naturelle.",
            partial: "C'est la raison la plus courante pour laquelle les gens arrivent ici. Un diagnostic qui explique une partie du tableau, des conseils qui fonctionnent pour le cerveau de quelqu'un d'autre, des cadres de référence qui conviennent presque. Cette pratique commence précisément là où ces explications s'arrêtent. Le chevauchement est là où se trouve la véritable architecture, et la cartographier est le but du travail.",
            coaching_before: "La plupart des approches de coaching ont été conçues pour un type de système nerveux différent. L'établissement d'objectifs, les plans d'action, les structures de responsabilité : ces éléments ne sont pas exactement faux, ils n'ont simplement pas été conçus pour une attention dirigée par l'intérêt, la charge de régulation ou une réponse à la menace qui s'active avant que la pensée ne la rattrape. Cette pratique commence par l'architecture d'abord, ce qui signifie que ce qui est construit correspond réellement à votre façon de fonctionner et non à la façon dont vous êtes censé fonctionner.",
            specific_profile: "La pratique englobe 23 profils neurodivergents et, plus important encore, les chevauchements entre eux. Si vous avez le TDAH, l'autisme, l'AuDHD, le PDA, la dyslexie, la dyscalculie, la dyspraxie, des différences de traitement sensoriel, une surdouance, une double exceptionnalité, un apprentissage affecté par le trauma, ou n'importe quelle combinaison de ceux-ci : oui. Si vous n'êtes pas sûr de ce que vous avez mais que quelque chose sur le site semble reconnaissable, oui aussi. L'Appel de Correspondance existe pour déterminer si c'est la bonne correspondance avant tout.",
            language: "Anglais, espagnol ou français. Vous choisissez à l'étape de la candidature, et tout : les sessions, le soutien entre les sessions et les résumés écrits se font dans cette langue. Si vous êtes multilingue et souhaitez changer entre les sessions, c'est une discussion qui vaut la peine d'être eue lors de l'Appel de Correspondance.",
            based: "Málaga, en Espagne. Les sessions se font en ligne, ce qui signifie que la géographie n'a pas d'importance. Les clients viennent actuellement de toute l'Europe, des Amériques et d'ailleurs. La Carte Familiale contient un volet spécifique pour naviguer dans le système éducatif espagnol, mais tout le reste fonctionne où que vous soyez.",
            matching_call: "Trente minutes. Gratuit. Uniquement sur candidature, ce qui signifie qu'il y a un court formulaire à remplir avant de le programmer : non pas pour filtrer les gens, mais pour s'assurer que la conversation est utile dès la première minute, plutôt que de la dépenser en logistique. Ce n'est pas un appel de vente ni une session de coaching gratuite. C'est une conversation honnête pour établir la correspondance, comprendre ce que vous portez, et décider ensemble si c'est la bonne prochaine étape. Si ce n'est pas le cas, cela se dit aussi directement.",
            afford: "Le document d'Aimant Principal Architecture Invisible et la bibliothèque de profils sont gratuits et le seront toujours. Ils ont été créés exactement pour cela : pour la personne qui a besoin de la carte mais qui n'a pas accès à un soutien payant pour le moment. Utilisez-les. C'est à cela qu'ils servent.",
            professional: "Oui, et cela fait activement partie de la direction que prend cette pratique. Utilisez le formulaire Autre Demande dans Contact et dites-nous ce à quoi vous pensez."
        }
    },
    about: {
        title: "À PROPOS",
        intro: {
            heading: "Cela n'a pas commencé avec un plan d'affaires.",
            p1: "Cela a commencé par un vide. Le genre de vide qu'on ne voit que lorsqu'on y est tombé soi-même, et qu'on a vu d'autres personnes tomber exactement au même endroit, à maintes reprises, dans différentes langues, dans différentes villes, portant des diagnostics différents qui pointaient tous vers la même pièce manquante.",
            p2: "Le paradigme de la neurodivergence existe depuis assez longtemps pour faire l'objet de conférences, de certifications et de conférences TED. Et pourtant, la plupart de ceux qui en ont le plus besoin n'y ont pas accès. Non pas parce que la connaissance n'existe pas. Mais parce que personne ne l'a reliée à leur vie spécifique, dans leur langue spécifique, à l'intérieur de leur système spécifique.",
            p3: "C'est ce vide que cette pratique a été créée pour combler."
        },
        believe: {
            heading: "Ce en quoi nous croyons",
            p1: "La neurodivergence n'est pas une collection de troubles qui se chevauchent par hasard. C'est une architecture. Une façon spécifique d'être câblé qui prend tout son sens quand on voit l'ensemble du tableau, et qui n'a presque aucun sens quand on n'en voit qu'une partie.",
            p2: "La plupart des gens arrivent ici en ayant vu une partie. Un diagnostic à sept ans qui a été enfoui sous d'autres explications. Une étiquette qui correspond presque. Un cadre de référence conçu pour un autre type d'esprit, appliqué au leur et jugé inadapté.",
            p3: "Le travail est toujours le même : trouver l'ensemble du tableau. Cartographier ce qui est réellement là. Construire quelque chose à partir de cela, et non à partir de ce qui aurait dû être là."
        },
        started: {
            heading: "Comment cela a commencé",
            p1: "Cette pratique existe parce que deux vides sont devenus impossibles à ignorer.",
            p2: "Le premier était le silence quasi total autour du syndrome de Down par rapport à l'infrastructure qui s'était construite autour d'autres profils neurodivergents. Le second était l'expérience de voir l'architecture neurodivergente partiellement expliquée à travers plusieurs langues, plusieurs systèmes et plusieurs diagnostics, chacun détenant une partie du tableau et aucun ne l'ayant en entier.",
            p3: "Ces deux vides pointaient vers la même vérité. Il y a un spectre visible et invisible sous chaque être humain. Et les personnes dont les difficultés sont invisibles : celles pour qui la vie n'a pas l'air plus difficile, qui sont devenues si douées pour la traduction et l'adaptation que même elles ont parfois du mal à localiser le signal d'origine : sont souvent les plus isolées de toutes. Pas parce que leurs besoins sont moindres. Parce que les systèmes conçus pour aider ont été créés pour répondre à ce qu'ils pouvaient voir.",
            p4: "Cette pratique a été conçue pour couvrir l'ensemble du spectre. Pas avec une distance clinique. À partir de la clarté particulière qui survient quand on arrête d'attendre que le bon cadre de référence existe et qu'on commence à le construire soi-même."
        },
        going: {
            heading: "Où cela va",
            p1: "Il ne s'agit pas d'une pratique individuelle avec des ambitions. C'est une pratique conçue dès le départ pour devenir quelque chose de plus grand qu'une seule personne ne peut gérer.",
            p2: "Les lacunes dans le soutien aux personnes neurodivergentes ne sont pas minimes. Elles existent dans les écoles, les lieux de travail, les systèmes médicaux, les familles, et dans l'espace entre ce que sait la recherche et l'accès dont disposent les communautés. Les combler nécessite des coachs, des spécialistes, des militants, des éducateurs et des experts en technologie qui soient convaincus, et pas seulement formés, que les personnes neurodivergentes méritent une meilleure qualité de vie.",
            p3: "C'est avec, et pour eux, que cette pratique est en train d'être construite."
        },
        cta_text: "Si vous êtes ici parce que vous avez besoin de soutien, le travail commence avec l'Appel de Correspondance.",
        cta_button: "Réservez votre Appel de Correspondance",
        cta_contact: "Si vous êtes ici parce que vous voulez faire partie de la suite, nous voulons vous entendre."
    },
    accessibility: {
        title: "Déclaration d'accessibilité",
        p1: "Chez That's Very ADHD, nous nous engageons à faire en sorte que notre site Web et nos services soient accessibles à tous, y compris aux personnes handicapées. Nous nous efforçons de fournir une expérience conviviale qui répond à diverses exigences en matière d'accessibilité.",
        features_title: "Fonctionnalités d'accessibilité",
        features_intro: "Nous avons pris les mesures suivantes pour améliorer l'accessibilité de notre site Web :",
        f1: "Notre site Web est conçu pour être navigable à l'aide d'un clavier et d'une souris.",
        f2: "Nous fournissons un texte alternatif (texte alt) pour tous les contenus non textuels, tels que les images et les graphiques, afin de garantir qu'ils puissent être interprétés par les lecteurs d'écran.",
        f3: "Nous utilisons un contraste de couleurs conforme aux normes d'accessibilité afin de garantir la lisibilité pour les personnes malvoyantes.",
        f4: "Nous fournissons des sous-titres et des transcriptions pour le contenu vidéo et audio chaque fois que cela s'applique.",
        f5: "Notre site prend en charge la compatibilité des lecteurs d'écran pour les utilisateurs ayant une déficience visuelle.",
        feedback_title: "Commentaires et aide",
        feedback_p1: "Nous sommes toujours à la recherche de moyens pour améliorer notre accessibilité. Si vous rencontrez des problèmes d'accessibilité lors de l'utilisation de notre site Web ou de nos services, n'hésitez pas à nous en informer. Nous serons heureux de vous fournir de l'aide ou de répondre à toute exigence spécifique que vous pourriez avoir afin d'améliorer votre expérience.",
        feedback_p2: "Si vous avez des commentaires, des suggestions ou si vous avez besoin d'aide, veuillez nous contacter à l'adresse suivante :",
        third_party_title: "Services tiers",
        third_party_p: "Bien que nous fassions tout notre possible pour garantir que notre site Web soit entièrement accessible, il se peut que certains des services tiers que nous utilisons, tels que Calendly et Stripe, ne soient pas entièrement conformes à l'ensemble des normes d'accessibilité. Nous vous encourageons à nous contacter si vous rencontrez des difficultés lors de l'utilisation de ces services tiers, et nous vous aiderons du mieux que nous pourrons.",
        commitment_title: "Engagement en faveur de l'accessibilité",
        commitment_p1: "Nous nous engageons à continuer d'améliorer l'accessibilité de notre site Web et de nos services. Nous révisons et mettons régulièrement à jour notre site Web pour nous assurer de respecter les meilleures pratiques en matière d'accessibilité et de nous conformer aux directives d'accessibilité telles que les Règles pour l'accessibilité des contenus Web (WCAG) 2.1.",
        commitment_p2: "Nous vous remercions de votre compréhension et de votre participation à la communauté That's Very ADHD."
    },
    others: {
        title: "AUTRES",
        p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        p2: "Nous offrons des services sur mesure pour les organisations, les écoles et d'autres groupes. Contactez-nous pour discuter de vos besoins spécifiques.",
        schedule: "Planifier une Consultation"
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
console.log('Update Complete');
