export const translations = {
  pt: {
    nav: {
      inicio: "Início",
      sobre: "Sobre",
      servicos: "Serviços",
      portfolio: "Casos de Sucesso",
      calculadora: "Simulador ROI",
      tecnologia: "Tecnologia",
      contato: "Contato"
    },
    hero: {
      badge: "Consultoria Agronômica de Precisão",
      titlePre: "Transformando a Agricultura com ",
      titleSpan1: "Ciência",
      titleAnd: " e ",
      titleSpan2: "Tecnologia",
      description: "Ajudo produtores rurais e empresas do agronegócio a maximizarem sua produtividade, otimizarem o uso de insumos e implementarem práticas sustentáveis de manejo de solos através de dados, inteligência agronômica e sensoriamento remoto.",
      btnContact: "Falar Conosco",
      btnProjects: "Ver Projetos de Sucesso",
      floatCardTitle: "Manejo Sustentável",
      floatCardDesc: "100% focado em resultados"
    },
    stats: {
      hectares: "Hectares Monitorados",
      productivity: "Aumento de Produtividade",
      farms: "Fazendas Atendidas",
      experience: "Anos de Experiência"
    },
    about: {
      tag: "Sobre Mim",
      title: "Ciência e Dedicação a Serviço da Terra",
      subtitle: "Aliando anos de conhecimento prático de campo com as ferramentas digitais mais avançadas da agricultura moderna.",
      heading: "Olá, sou o Dr. Lucas Martins",
      bio: "Sou Engenheiro Agrônomo graduado pela ESALQ/USP com mestrado em Nutrição de Plantas e Fertilidade do Solo. Ao longo da minha trajetória, colaborei com produtores de pequeno, médio e grande porte, ajudando a planejar safras e mitigar problemas que comprometiam a produção.\n\nMinha missão é guiar a transição tecnológica da agricultura brasileira, garantindo que o avanço tecnológico ande lado a lado com a conservação ambiental e a segurança de investimentos rurais.",
      experienceBadge: "Anos de Histórico",
      values: [
        {
          title: 'Ciência Aplicada',
          description: 'Recomendações técnicas embasadas em estudos científicos e análises laboratoriais rigorosas.'
        },
        {
          title: 'Sustentabilidade',
          description: 'Preservação de recursos hídricos e bioma local através de manejo regenerativo e conservação de solo.'
        },
        {
          title: 'Decisões por Dados',
          description: 'Monitoramento contínuo por sensores IoT e mapas de satélite para intervenções agrícolas assertivas.'
        },
        {
          title: 'Segurança & Retorno',
          description: 'Foco na maximização do retorno financeiro (ROI) de insumos e na mitigação de riscos climáticos e pragas.'
        }
      ]
    },
    services: {
      tag: "Nossos Serviços",
      title: "Soluções Agronômicas Avançadas",
      subtitle: "Oferecemos suporte técnico de excelência ponta a ponta para maximizar a rentabilidade e longevidade de sua fazenda.",
      cards: [
        {
          title: 'Agricultura de Precisão',
          description: 'Mapeamento aéreo por drones de última geração com sensores multiespectrais para identificar anomalias vegetativas precocemente.',
          features: [
            'Mapas de NDVI / Índices de vigor',
            'Prescrição de taxa variável para insumos',
            'Contagem e falhas de estande de plantas',
            'Imagens ortomosaicas de alta resolução'
          ]
        },
        {
          title: 'Nutrição de Solo e Plantas',
          description: 'Planejamento e recomendação de calagem, gessagem e adubação balanceada baseada em amostragem georreferenciada.',
          features: [
            'Amostragem inteligente de solo (grid)',
            'Interpretação química e física detalhada',
            'Recomendações customizadas por cultivo',
            'Diagnósticos foliares periódicos'
          ]
        },
        {
          title: 'Manejo de Pragas & Doenças',
          description: 'Estruturação do Manejo Integrado de Pragas (MIP) com monitoramento sistemático para reduzir o impacto químico nas lavouras.',
          features: [
            'Monitoramento georreferenciado de pragas',
            'Uso de agentes de controle biológico',
            'Planejamento de pulverização inteligente',
            'Diagnóstico precoce de fitopatologias'
          ]
        },
        {
          title: 'Gestão & Sustentabilidade',
          description: 'Direcionamento estratégico para aumentar a lucratividade da propriedade, adequar licenças ecológicas e ingressar no mercado verde.',
          features: [
            'Planejamento de safras e custos (OPEX)',
            'Projetos de crédito de carbono e ESG',
            'Regularização ambiental (CAR / PRA)',
            'Auditoria e preparação de certificações'
          ]
        }
      ]
    },
    portfolio: {
      tag: "Casos de Sucesso",
      title: "Resultados Comprovados no Campo",
      subtitle: "Resultados expressivos gerados através de consultoria técnica qualificada e intervenções precisas.",
      categories: ['Todos', 'Tecnologia', 'Manejo de Solo', 'Irrigação'],
      cases: [
        {
          title: 'Otimização de Nutrição em Soja',
          location: 'Fazenda Sol Nascente, GO',
          category: 'Tecnologia',
          description: 'Mapeamento aéreo de vigor com drone multiespectral e aplicação direcionada de nitrogênio e boro em taxa variável em 450 Hectares.',
          metricLabel: 'Produtividade',
          metricValue: '+18% Sacas/Ha'
        },
        {
          title: 'Recuperação de Solo de Pastagem',
          location: 'Fazenda Bela Vista, MG',
          category: 'Manejo de Solo',
          description: 'Análise físico-química profunda e reestruturação do solo com calcário e gesso integrados a plantio de braquiária e rotação de pastagens.',
          metricLabel: 'Lotação U.A./Ha',
          metricValue: '+120% Capacidade'
        },
        {
          title: 'Irrigação Inteligente em Cítricos',
          location: 'Fazenda Vale Verde, SP',
          category: 'Irrigação',
          description: 'Instalação de sensores subterrâneos de umidade e automatização da irrigação por gotejamento guiada pela evapotranspiração calculada.',
          metricLabel: 'Consumo de Água',
          metricValue: '-30% Economia'
        }
      ]
    },
    calculator: {
      tag: "Simulador de Impacto",
      title: "Estime sua Produtividade & Lucratividade",
      subtitle: "Simule o aumento de produtividade e o retorno financeiro estimado ao implementar nossa consultoria agronômica de precisão.",
      inputsTitle: "Dados da sua Lavoura",
      cropLabel: "Tipo de Cultivo",
      sojaBtn: "🌱 Soja",
      milhoBtn: "🌽 Milho",
      areaLabel: "Área de Plantio",
      yieldLabel: "Produtividade Média Atual",
      resultsTitle: "Retorno Projetado",
      extraHa: "Extra por Hectare",
      totalExtra: "Produção Extra Total",
      grossGain: "Aumento Financeiro Bruto",
      netGain: "Ganho Líquido Projetado",
      roiLabel: "Estimativa de ROI (Retorno sobre Investimento)",
      btnSubmit: "Solicitar Laudo Técnico para Minha Área",
      sojaBags: "Sacas/Ha",
      milhoBags: "Sacas/Ha",
      bagsText: "Sacas",
      bagsPerHaText: "Sacas/Ha"
    },
    tech: {
      tag: "Infraestrutura",
      title: "Tecnologia Embarcada no Campo",
      subtitle: "A agricultura moderna exige dados exatos. Empregamos softwares e hardwares líderes de mercado para substituir o \"achismo\" por tomadas de decisão cirúrgicas.",
      techs: [
        {
          name: 'Drones Agrícolas',
          detail: 'DJI Mavic & Agras',
          desc: 'Mapeamento multiespectral e aplicação automatizada ultra-localizada em relevo acidentado.'
        },
        {
          name: 'Mapeamento & SIG',
          detail: 'QGIS & Pix4DFields',
          desc: 'Criação de curvas de nível, processamento ortofoto e delimitação de zonas de manejo homogêneo.'
        },
        {
          name: 'Sensores IoT',
          detail: 'Sondas TDR / Estações',
          desc: 'Leitura online em tempo real de temperatura, salinidade e potencial de água no perfil do solo.'
        },
        {
          name: 'Dados Integrados',
          detail: 'Climate FieldView',
          desc: 'Centralização de dados de plantio, fertilização e colheita para gerar mapas de produtividade.'
        }
      ]
    },
    testimonials: {
      tag: "Depoimentos",
      title: "O que dizem os Produtores",
      subtitle: "A parceria de sucesso no campo gera resultados mensuráveis e relacionamentos duradouros.",
      data: [
        {
          quote: "O mapeamento de vigor por drones e a recomendação de calagem mudaram totalmente a nossa operação em Goiás. Tivemos um salto de produtividade sem aumentar o custo com fertilizantes. Uma consultoria indispensável para quem busca rentabilidade real.",
          name: "Roberto Silveira",
          role: "Diretor Operacional da Fazenda Sol Nascente (GO)"
        },
        {
          quote: "A implementação dos sensores de umidade automatizados poupou nosso recurso hídrico e reduziu o gasto com energia elétrica na irrigação dos pomares. Lucas demonstrou profundo rigor científico aliado a uma visão prática admirável.",
          name: "Dra. Clara Vasconcelos",
          role: "Gestora Técnica do Grupo Cítricos Vale Verde (SP)"
        },
        {
          quote: "Estávamos prestes a perder 200 hectares de pasto devido à erosão e compactação. Com o manejo regenerativo de solos planejado pelo Lucas, recuperamos a cobertura vegetal rapidamente e dobramos o número de cabeças por hectare.",
          name: "Antônio de Souza",
          role: "Pecuarista na Agropecuária Boa Vista (MG)"
        }
      ]
    },
    contact: {
      tag: "Fale Conosco",
      title: "Agende uma Consulta Técnica",
      subtitle: "Pronto para levar sua lavoura ao próximo nível de produtividade? Preencha o formulário ou fale conosco diretamente.",
      infos: [
        {
          title: 'WhatsApp / Telefone',
          linkLabel: 'Iniciar Conversa'
        },
        {
          title: 'E-mail Profissional',
          linkLabel: 'Enviar E-mail'
        },
        {
          title: 'Região de Atuação',
          linkLabel: 'Disponibilidade para Viagens'
        }
      ],
      socialsTitle: "Conecte-se nas Redes",
      form: {
        name: "Seu Nome *",
        namePlaceholder: "Ex: João da Silva",
        email: "E-mail de Contato *",
        emailPlaceholder: "Ex: joao@fazenda.com",
        phone: "WhatsApp *",
        phonePlaceholder: "Ex: (62) 99999-9999",
        crop: "Cultura Principal",
        cropOptions: {
          soja: "Soja / Milho",
          citricos: "Citros / Fruticultura",
          pastagem: "Pecuária / Pastagem",
          cana: "Cana-de-açúcar",
          outra: "Outras Culturas"
        },
        message: "Sua Mensagem / Necessidades *",
        messagePlaceholder: "Descreva brevemente a situação atual da sua lavoura ou suas necessidades técnicas...",
        btnSubmit: "Solicitar Consulta Técnica",
        btnSubmitting: "Enviando...",
        successAlert: "✓ Mensagem enviada com sucesso! Entraremos em contato em até 24 horas."
      }
    },
    footer: {
      desc: "Aliando ciência, dados exatos e tecnologia de ponta para impulsionar a produtividade no campo, preservando os recursos naturais para as próximas gerações.",
      linksTitle: "Links Rápidos",
      contactTitle: "Contatos",
      contactDetail: "Goiânia, GO - Brasil\nAtendimento Presencial e Remoto",
      copy: "AgroScience. Todos os direitos reservados. Feito com paixão pela agricultura sustentável.",
      privacy: "Políticas de Privacidade",
      terms: "Termos de Uso"
    }
  },
  en: {
    nav: {
      inicio: "Home",
      sobre: "About",
      servicos: "Services",
      portfolio: "Case Studies",
      calculadora: "ROI Simulator",
      tecnologia: "Technology",
      contato: "Contact"
    },
    hero: {
      badge: "Precision Agronomy Consulting",
      titlePre: "Transforming Agriculture with ",
      titleSpan1: "Science",
      titleAnd: " and ",
      titleSpan2: "Technology",
      description: "I help farmers and agribusiness companies maximize yield, optimize crop input usage, and implement sustainable soil management practices through data, agronomic intelligence, and remote sensing.",
      btnContact: "Get in Touch",
      btnProjects: "View Success Stories",
      floatCardTitle: "Sustainable Management",
      floatCardDesc: "100% focused on results"
    },
    stats: {
      hectares: "Monitored Hectares",
      productivity: "Average Yield Increase",
      farms: "Farms Serviced",
      experience: "Years of Experience"
    },
    about: {
      tag: "About Me",
      title: "Science and Dedication Serving the Earth",
      subtitle: "Combining years of practical field knowledge with the most advanced digital tools of modern agriculture.",
      heading: "Hello, I am Dr. Lucas Martins",
      bio: "I am an Agronomist graduated from ESALQ/USP with a master's degree in Plant Nutrition and Soil Fertility. Throughout my career, I have collaborated with small, medium, and large producers, helping plan crops and mitigate issues that compromised production.\n\nMy mission is to guide the technological transition of agriculture, ensuring that technological progress goes hand in hand with environmental conservation and the security of rural investments.",
      experienceBadge: "Years of Record",
      values: [
        {
          title: 'Applied Science',
          description: 'Technical recommendations based on rigorous scientific studies and detailed laboratory analysis.'
        },
        {
          title: 'Sustainability',
          description: 'Conservation of water resources and local biome through regenerative management and soil conservation.'
        },
        {
          title: 'Data-driven Decisions',
          description: 'Continuous monitoring by IoT sensors and satellite mapping for highly assertive agricultural interventions.'
        },
        {
          title: 'Safety & Return',
          description: 'Focus on maximizing financial return (ROI) of crop inputs and mitigating climate and pest risks.'
        }
      ]
    },
    services: {
      tag: "Our Services",
      title: "Advanced Agronomic Solutions",
      subtitle: "We offer end-to-end technical excellence to maximize the profitability and longevity of your farm.",
      cards: [
        {
          title: 'Precision Agriculture',
          description: 'Aerial mapping by state-of-the-art drones with multispectral sensors to identify vegetative anomalies early.',
          features: [
            'NDVI maps / Vigor indices',
            'Variable rate prescription for crop inputs',
            'Plant stand counting and gap detection',
            'High-resolution orthomosaic imagery'
          ]
        },
        {
          title: 'Soil & Plant Nutrition',
          description: 'Planning and recommendation of liming, gypsum application, and balanced fertilization based on georeferenced sampling.',
          features: [
            'Smart grid soil sampling',
            'Detailed chemical and physical soil mapping',
            'Tailored crop fertilization guides',
            'Periodic leaf tissue diagnostic analyses'
          ]
        },
        {
          title: 'Integrated Pest Management',
          description: 'Structure of Integrated Pest Management (IPM) with systematic monitoring to reduce chemical impact on crops.',
          features: [
            'Georeferenced pest scouting',
            'Usage of biological control agents',
            'Smart chemical application targeting',
            'Early fitopathology diagnostics'
          ]
        },
        {
          title: 'Management & Sustainability',
          description: 'Strategic direction to increase property profitability, comply with ecological permits, and join the green carbon market.',
          features: [
            'Crop planning and budget optimization (OPEX)',
            'Carbon credit projects and ESG metrics',
            'Environmental compliance registry (CAR / PRA)',
            'Audits and preparation for eco-certifications'
          ]
        }
      ]
    },
    portfolio: {
      tag: "Success Stories",
      title: "Proven Results in the Field",
      subtitle: "Significant results generated through qualified technical consulting and precise field interventions.",
      categories: ['All', 'Technology', 'Soil Management', 'Irrigation'],
      cases: [
        {
          title: 'Soybean Nutrition Optimization',
          location: 'Sol Nascente Farm, GO',
          category: 'Technology',
          description: 'Aerial crop vigor mapping with multispectral drone and directed application of nitrogen and boron at variable rates in 450 Hectares.',
          metricLabel: 'Productivity',
          metricValue: '+18% Bags/Ha'
        },
        {
          title: 'Pasture Soil Rehabilitation',
          location: 'Bela Vista Farm, MG',
          category: 'Manejo de Solo', // keeping internal category identical for filtering logic
          description: 'Deep physical-chemical analysis and soil structural conditioning with lime and gypsum integrated with rotational pasture grazing.',
          metricLabel: 'LSU / Hectare',
          metricValue: '+120% Capacity'
        },
        {
          title: 'Smart Irrigation in Citrus',
          location: 'Vale Verde Citrus, SP',
          category: 'Irrigação', // keeping internal category identical for filtering logic
          description: 'Installation of subterranean soil sensors and drip irrigation automation guided by calculated real-time evapotranspiration.',
          metricLabel: 'Water Consumption',
          metricValue: '-30% Savings'
        }
      ]
    },
    calculator: {
      tag: "Impact Simulator",
      title: "Estimate your Yield & Profitability",
      subtitle: "Simulate the yield increase and estimated financial return when implementing our precision agronomic consulting.",
      inputsTitle: "Your Farm Data",
      cropLabel: "Crop Type",
      sojaBtn: "🌱 Soybeans",
      milhoBtn: "🌽 Corn",
      areaLabel: "Planted Area",
      yieldLabel: "Current Average Yield",
      resultsTitle: "Projected Return",
      extraHa: "Extra per Hectare",
      totalExtra: "Total Extra Production",
      grossGain: "Gross Financial Gain",
      netGain: "Projected Net Gain",
      roiLabel: "ROI Estimate (Return on Investment)",
      btnSubmit: "Request Technical Analysis for My Area",
      sojaBags: "Bags/Ha",
      milhoBags: "Bags/Ha",
      bagsText: "Bags",
      bagsPerHaText: "Bags/Ha"
    },
    tech: {
      tag: "Infrastructure",
      title: "Embedded Technology in the Field",
      subtitle: "Modern agriculture demands exact data. We employ market-leading software and hardware to replace guesswork with surgical decisions.",
      techs: [
        {
          name: 'Agricultural Drones',
          detail: 'DJI Mavic & Agras',
          desc: 'Multispectral mapping and ultra-localized automated spraying application in complex terrains.'
        },
        {
          name: 'GIS & Mapping',
          detail: 'QGIS & Pix4DFields',
          desc: 'Elevation contour lines, orthophoto processing, and design of homogeneous management zones.'
        },
        {
          name: 'IoT Soil Sensors',
          detail: 'TDR Probes / Weather Stations',
          desc: 'Real-time online logs of soil temperature, electrical conductivity, and volumetric water content.'
        },
        {
          name: 'Integrated Data',
          detail: 'Climate FieldView',
          desc: 'Centralization of planting, spraying, and harvest data to generate detailed spatial yield maps.'
        }
      ]
    },
    testimonials: {
      tag: "Testimonials",
      title: "What Farmers Are Saying",
      subtitle: "Successful partnerships in the field generate measurable results and long-lasting relationships.",
      data: [
        {
          quote: "Vigor mapping by drones and lime recommendation completely changed our operation in Goias. We had a huge yield leap without increasing fertilizer costs. An indispensable consultation for anyone seeking real profitability.",
          name: "Roberto Silveira",
          role: "Operations Director at Sol Nascente Farm (GO)"
        },
        {
          quote: "Implementing automated humidity sensors saved our water resource and reduced electricity costs in orange orchard irrigation. Lucas demonstrated deep scientific rigor combined with an admirable practical view.",
          name: "Dr. Clara Vasconcelos",
          role: "Technical Manager at Vale Verde Citrus Group (SP)"
        },
        {
          quote: "We were about to lose 200 hectares of pasture due to erosion and compaction. With the soil regenerative management planned by Lucas, we recovered pasture cover quickly and doubled our cattle capacity.",
          name: "Antônio de Souza",
          role: "Cattle Rancher at Boa Vista Ranch (MG)"
        }
      ]
    },
    contact: {
      tag: "Get in Touch",
      title: "Schedule a Technical Consultation",
      subtitle: "Ready to take your crops to the next level of yield? Fill out the form or contact us directly.",
      infos: [
        {
          title: 'WhatsApp / Phone',
          linkLabel: 'Start Conversation'
        },
        {
          title: 'Professional Email',
          linkLabel: 'Send Email'
        },
        {
          title: 'Operating Region',
          linkLabel: 'Availability for Travels'
        }
      ],
      socialsTitle: "Connect on Social Media",
      form: {
        name: "Your Name *",
        namePlaceholder: "e.g., John Smith",
        email: "Contact Email *",
        emailPlaceholder: "e.g., john@farm.com",
        phone: "WhatsApp *",
        phonePlaceholder: "e.g., +1 (555) 019-2834",
        crop: "Primary Crop",
        cropOptions: {
          soja: "Soybeans / Corn",
          citricos: "Citrus / Fruits",
          pastagem: "Cattle / Pasture",
          cana: "Sugarcane",
          outra: "Other Crops"
        },
        message: "Your Message / Needs *",
        messagePlaceholder: "Briefly describe the current situation of your crops or your technical needs...",
        btnSubmit: "Request Technical Consultation",
        btnSubmitting: "Sending...",
        successAlert: "✓ Message sent successfully! We will get in touch within 24 hours."
      }
    },
    footer: {
      desc: "Combining science, exact data, and cutting-edge technology to boost productivity in the field while preserving natural resources for future generations.",
      linksTitle: "Quick Links",
      contactTitle: "Contacts",
      contactDetail: "Goiania, GO - Brazil\nIn-person and Remote Consulting",
      copy: "AgroScience. All rights reserved. Made with passion for sustainable agriculture.",
      privacy: "Privacy Policies",
      terms: "Terms of Use"
    }
  }
};
